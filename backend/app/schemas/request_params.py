from typing import Any

from pydantic.main import BaseModel


class RequestParams(BaseModel):
    skip: int
    limit: int
    order_by: Any


class DefaultResponse(BaseModel):
    detail: str

    class Config:
        orm_mode = True
