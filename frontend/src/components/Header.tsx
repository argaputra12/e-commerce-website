import { useEffect, useState, useCallback, Fragment } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineHeart, HiOutlineSearch } from "react-icons/hi";
import AuthForm from "./auth/AuthForm";
import CartItem from "./cart/CartItem";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";
import PopoverMenu from "./PopoverMenu";
import { useQuery } from "react-query";
import { CategoryService, DetailCategory } from "../api";
import { capitalCase } from "change-case";

interface props {
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ search, setSearch }: props) => {
  let categories = new Array<{
    type: string;
    items: DetailCategory[];
  }>();
  const fetchCategories = useQuery(
    "categories",
    () => CategoryService.getCategory(),
    {
      staleTime: Infinity,
    }
  );
  const { role } = useAuth();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [didMount, setDidMount] = useState<boolean>(false);
  const { wishlist } = useWishlist();
  const [animate, setAnimate] = useState("");

  let noOfWishlist = wishlist.data?.length || 0;
  // Animate Wishlist Number
  const handleAnimate = useCallback(() => {
    if (noOfWishlist === 0) return;
    setAnimate("animate__animated animate__headShake");
  }, [noOfWishlist, setAnimate]);

  // Set animate when no of wishlist changes
  useEffect(() => {
    handleAnimate();
    setTimeout(() => {
      setAnimate("");
    }, 1000);
  }, [handleAnimate]);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [setScrolled]);

  useEffect(() => {
    setDidMount(true);
    window.addEventListener("scroll", handleScroll);
    return () => setDidMount(false);
  }, [handleScroll]);

  if (!didMount) {
    return null;
  }
  if (fetchCategories.isLoading) {
    return <div>Loading...</div>;
  }
  if (fetchCategories.isError) {
    return <div>Error...</div>;
  }
  if (fetchCategories.data) {
    categories = fetchCategories.data.data.reduce(
      (acc, curr) => {
        const type = capitalCase(curr.type, { delimiter: " & " });
        const existing = acc.find((item) => item.type === type);
        if (existing) {
          existing.items.push(curr);
        } else {
          acc.push({ type, items: [curr] });
        }
        return acc;
      },
      [] as {
        type: string;
        items: DetailCategory[];
      }[]
    );
  }

  return (
    <>
      <nav
        className={`${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        } sticky top-0 z-50  flex  h-20 w-full place-content-center place-items-center transition-all duration-1000`}
      >
        <div className="h-full w-full 2xl:max-w-[96rem]">
          <div className="justify-content-center flex h-full justify-between align-baseline">
            {/* Left Nav */}
            <ul className="flex-0 flex place-items-center gap-x-4 lg:flex-1 ">
              {categories?.map((category, index) => (
                <li key={index} className="relative h-6">
                  <PopoverMenu
                    menuTitle={category.type}
                    linksArray={category.items.map((item) => [
                      capitalCase(item.title),
                      `/products?category=${item.id}`,
                    ])}
                  />
                </li>
              ))}
            </ul>

            {/* Tutu Logo */}
            <div className="flex flex-1 cursor-pointer items-center justify-center ">
              <div className="h-auto w-32">
                <Link to="/">
                  <div className="font-title text-4xl">TUTU</div>
                </Link>
              </div>
            </div>

            {/* Right Nav */}
            <ul className="mr-4 flex flex-1 place-items-center justify-start gap-x-8 lg:justify-end 2xl:mr-0">
              <li>
                {/* <SearchForm /> */}
                <HiOutlineSearch
                  onClick={() => setSearch(true)}
                  className="text-2xl cursor-pointer"
                />
              </li>
              <li className="opacity-100 text-2xl">
                {role !== "guest" ? (
                  <Link to="/profile" aria-label="Profile">
                    <AiOutlineUser />
                  </Link>
                ) : (
                  <AuthForm>
                    <AiOutlineUser />
                  </AuthForm>
                )}
              </li>

              <li>
                <Link to="/wishlist" aria-label="Wishlist">
                  {/* <a className="relative" aria-label="Wishlist"> */}
                  <button
                    type="button"
                    className="relative"
                    aria-label="Wishlist"
                  >
                    <HiOutlineHeart className="text-2xl" />
                    {noOfWishlist > 0 && (
                      <span
                        className={`${animate} absolute -top-3 -right-3 rounded-full bg-gray-500 py-1 px-2 text-xs text-gray-100`}
                      >
                        {noOfWishlist}
                      </span>
                    )}
                  </button>
                  {/*  */}
                </Link>
              </li>
              <li>
                <CartItem />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
