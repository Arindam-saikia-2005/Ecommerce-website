import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AllProductShim from "../AllComponentshim/AllProductShim.jsx";


const FamousProduct = ({ addToCart  }) => {


    const [showProduct,setshowProduct] = useState([]);

   useEffect(()=>{
      const PopularProduct = async() => {
        try {
            const res = await axios ('https://dummyjson.com/carts/1');
            setshowProduct(res.data.products);
            console.log(showProduct)

        } catch (err) {
            toast.error(err.message)
        }
      }

      PopularProduct();
   },[])

  return (
    <div>
      <div className=" mt-10 text-center"> 
        <h2 className=" text-4xl  md:text-5xl font-semibold underline">
            Popular Products
        </h2>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
                showProduct.map((popularItem) =>(
                    <div key={popularItem.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={popularItem.thumbnail}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {popularItem.title}
                </h2>
                <p className="mt-1"> Price : {popularItem.price} ₹</p>
              </div>
              <button  onClick={()=>addToCart(popularItem)} className=" rounded-[25px] flex ml-[200px] text-white bg-indigo-500 border-0 p-3 md:px-6 focus:outline-none hover:bg-indigo-500">Add to cart</button>
            </div>
                ))
            }
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamousProduct;
