import uuid
from datetime import datetime, timedelta
from typing import Generator

import pytz
from fastapi import Depends, HTTPException, status
from fastapi.routing import APIRouter
from fastapi.security import OAuth2PasswordRequestForm

from app.core.logger import logger
from app.deps.authentication import (
    create_access_token,
    email_validation,
    get_current_active_user,
    password_validation,
)
from app.deps.db import get_db
from app.deps.email import send_forgot_password_email
from app.models.forgot_password import ForgotPassword
from app.models.user import User
from app.schemas.authentication import (
    ChangePassword,
    GetUser,
    ResetPassword,
    UserCreate,
    UserRead,
)
from app.schemas.request_params import DefaultResponse

router = APIRouter()


@router.post("/sign-in", response_model=UserRead, status_code=status.HTTP_200_OK)
def sign_in(
    request: OAuth2PasswordRequestForm = Depends(),
    session: Generator = Depends(get_db),
):
    user = session.query(User).filter(User.email == request.username).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )

    if not User.verify_password(request.password, user):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": user.email})
    user = GetUser(
        name=user.name,
        email=user.email,
        phone_number=user.phone_number,
        type="seller" if user.is_admin else "buyer",
    )
    return UserRead(
        user_information=user,
        access_token=access_token,
        token_type="bearer",
        message="Login success",
    )


@router.post("/sign-up", response_model=UserRead, status_code=status.HTTP_201_CREATED)
def sign_up(
    request: UserCreate,
    session: Generator = Depends(get_db),
):
    email_validation(request.email)
    password_validation(request.password)
    user = session.query(User).filter(User.email == request.email).first()
    if user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
            headers={"WWW-Authenticate": "Bearer"},
        )

    hashed_password, salt = User.encrypt_password(request.password)

    new_user = User(
        name=request.name,
        email=request.email,
        phone_number=request.phone_number,
        salt=salt,
        password=hashed_password,
    )
    session.add(new_user)
    session.commit()

    access_token = create_access_token(data={"sub": request.email})

    user = GetUser(
        name=request.name,
        email=request.email,
        phone_number=request.phone_number,
        type="buyer",
    )
    logger.info(f"User {user.email} signed up")
    return UserRead(
        user_information=user,
        access_token=access_token,
        token_type="bearer",
        message="success, user created",
    )


@router.post(
    "/forgot-password",
    status_code=status.HTTP_200_OK,
    response_model=DefaultResponse,
)
async def forgot_password(
    email: str,
    session: Generator = Depends(get_db),
):
    user = session.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email not registered",
            headers={"WWW-Authenticate": "Bearer"},
        )
    reset_token = str(uuid.uuid4())

    # remove old token
    session.query(ForgotPassword).filter(ForgotPassword.user_id == user.id).delete()

    # send_forgot_password_email
    forgot_password = ForgotPassword(
        user_id=user.id,
        token=reset_token,
        expired_at=datetime.now() + timedelta(hours=1),
    )
    session.add(forgot_password)
    session.commit()
    await send_forgot_password_email(email, reset_token)
    return DefaultResponse(
        message="Reset password link sent to your email",
    )


@router.put(
    "/reset-password/{token}",
    status_code=status.HTTP_201_CREATED,
    response_model=DefaultResponse,
)
def reset_password(
    request: ResetPassword,
    session: Generator = Depends(get_db),
):
    password_validation(request.password)
    forgot_password = (
        session.query(ForgotPassword)
        .filter(ForgotPassword.token == request.token)
        .first()
    )

    if not forgot_password:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    if forgot_password.expired_at < datetime.now(tz=pytz.UTC):

        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Token expired",
            headers={"WWW-Authenticate": "Bearer"},
        )

    session.query(ForgotPassword).filter(
        ForgotPassword.id == forgot_password.id
    ).delete()

    user = session.query(User).filter(User.id == forgot_password.user_id).first()
    hashed_password, salt = User.encrypt_password(request.password)
    user.password = hashed_password
    user.salt = salt
    session.commit()
    return DefaultResponse(message="Password reset success")


@router.put(
    "/change-password",
    status_code=status.HTTP_201_CREATED,
    response_model=DefaultResponse,
)
def change_password(
    request: ChangePassword,
    session: Generator = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
):
    password_validation(request.new_password)

    if not User.verify_password(request.old_password, current_user):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    hashed_password, salt = User.encrypt_password(request.new_password)
    current_user.password = hashed_password
    current_user.salt = salt
    session.commit()
    return DefaultResponse(message="Password changed success")