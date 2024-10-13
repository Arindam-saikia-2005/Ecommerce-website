import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function Navbar({ cart, userName }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChange = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <>
      <div>
        <header className="bg-white border-b border-gray-200 fixed top-0 z-10 w-full">
          <div className="container mx-auto flex justify-between p-5 items-center ">
            <div>
              <h3 className="font-bold text-2xl">
                Saikia<span>Shop</span>
              </h3>
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center text-lg justify-center font-semibold">
                <NavLink to="/">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">
                    Home
                  </li>
                </NavLink>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">
                  <NavLink to="/allproducts">All Products</NavLink>
                </li>
                <NavLink to="/contact">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">
                    Contact Us
                  </li>
                </NavLink>
                <NavLink to="/about">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">
                    About
                  </li>
                </NavLink>
              </ul>
            </div>

            {isOpen ? (
              <div>
                <ul className="flex flex-col gap-10 text-2xl absolute top-[81px] left-0 h-screen w-full z-10 bg-[red]  justify-center text-white font-semibold items-center">
                  <NavLink to="/" onClick={toggleChange}>
                    <li className="mt-5 hover:text-gray-900 cursor-pointer">
                      Home
                    </li>
                  </NavLink>
                  <NavLink to="/allproducts" onClick={toggleChange}>
                    <li className="mt-5 hover:text-gray-900 cursor-pointer">
                      All Products
                    </li>
                  </NavLink>
                  <NavLink to="/contact" onClick={toggleChange}>
                    <li className="mt-5 hover:text-gray-900 cursor-pointer">
                      Contact Us
                    </li>
                  </NavLink>
                  <NavLink to="/about" onClick={toggleChange}>
                    <li className="mt-5 hover:text-gray-900 cursor-pointer">
                      About
                    </li>
                  </NavLink>
                </ul>
                <button
                  onClick={toggleChange}
                  className="absolute top-[81px] z-10 right-0 text-white py-2 px-4 cursor-pointer"
                >
                  <RxCross1 />
                </button>
              </div>
            ) : (
              ""
            )}

            <div className="flex justify-center items-center gap-3">
              {
                userName ? (<> 
                <NavLink to="/login">
                <button className=" bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gyay-200 rounded text-base ">
                  Logout
                </button>
              </NavLink>
              <button>{userName}</button>
                </>) : (
                  <>
                   <NavLink to="/login">
                <button className=" bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gyay-200 rounded text-base ">
                  Logout
                </button>
              </NavLink>
              <button>{userName}</button>
                  </>
                )
              }
              
              <NavLink to="/cart">
                <button className="relative">
                <span className="absolute bg-[red] rounded-[50%]  top-[-10px]   px-2 right-[-3px] text-[white] ">{cart.length}</span>
                  <FaShoppingCart size={35} />
                </button>
              </NavLink>
              {isOpen ? (
                ""
              ) : (
                <button onClick={toggleChange} className=" md:hidden">
                  <IoMenu size={35} />
                </button>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
