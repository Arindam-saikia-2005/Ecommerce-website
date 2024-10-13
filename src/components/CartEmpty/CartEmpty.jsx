import { NavLink } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="w-full flex justify-center  items-center h-[90vh] mt-[80px] container bg-[#f8f3f3] mx-auto px-4 py-4 shadow-lg">
      <div className="flex items-center flex-col">
        <img
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt="cart-img"
          className="w-[300px]"
        />
        <h3 className="text-center text-2xl font-semibold mt-3">
          Your cart is currently Empty
        </h3>
        <NavLink to="/">
        <button className=" text-white bg-indigo-500 border-0 py-1 px-1 md:px-3 focus:outline-none hover:bg-indigo-600 rounded mt-4">
          Go to Home{" "}
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CartEmpty;
