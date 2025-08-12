import React from "react";
import amazon from "../../assets/images/amazon.png";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Search } from "../Home";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  //  const cartNumber = useSelector((state) => state.cart.productNumber);

  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonClone text-white h-[60px]">
        <div className="flex items-center m-4">
          <Link to="/">
            <img className="h-[35px] w-[100px] m-2" src={amazon} alt="Amazon Logo" />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">Zimbabwe</div>
          </div>
        </div>

        <div className="flex grow relative items-center">
          <Search />
        </div>

        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">Accounts & Lists</div>
          </div>

          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>

          <Link to="/checkout">
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon className="h-[48px]" />
              {/* <div className="relative">
                {cartNumber > 0 && ( // Only show cart number if greater than 0
                  <div className="absolute">
                    {cartNumber}
                  </div>
                )}
              </div> */}
              <div className="mt-7 text-xs xl:text-sm">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex bg-amazonClone-light_blue text-white text-xs space-x-3 xl:text-sm p-2 pl-6">
        <div>Todays Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default Navbar;
