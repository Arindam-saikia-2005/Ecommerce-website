import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AllProductShim from "../AllComponentshim/AllProductShim";




const AllProducts = ({ addToCart }) => {
  //for category products
  const [allCategory, setAllCategory] = useState([]);

  //for all products that fetching in the UI
  const [products, setProducts] = useState([]);

  // for selecting products
  const [selectProducts, setSelectProducts] = useState("");

  //  for showing all products in all products section
  const [allProducts, setAllProducts] = useState([]);

  // this code of line is used for showing either filter products or all products
  const [showProduct, setShowProduct] = useState(false);



  // product according to their category
  useEffect(() => {
    const getAllProductsCategory = async () => {
      const data = await fetch("https://dummyjson.com/products/categories");
      const jsonData = await data.json();
      console.log(jsonData);
      setAllCategory(jsonData);
    };

    getAllProductsCategory();
  }, []);

  const filterProducts = (category) => {
    console.log(category);
    setSelectProducts(category);
    setShowProduct(true);
  };

  //AllProducts
  useEffect(() => {
    const singlePage = async () => {
      const result = await fetch("https://dummyjson.com/products");
      const resJson = await result.json();
      console.log(resJson.products);
      setAllProducts(resJson.products);
    };
    singlePage();
  }, []);

  // Single product
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        if (selectProducts) {
          const res = await fetch(
            `https://dummyjson.com/products/category/${selectProducts}`
          );
          const jsonRes = await res.json();
          setProducts(jsonRes.products);
        }

        // console.log(jsonRes.products);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, [selectProducts]);

 

  return (
    <>
      <div className="relative ">
        <img
          className="object-cover w-full object-center h-[200px]"
          src="./Login/login.png"
          alt="login-img"
        />
        <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[0.3]">
          {" "}
        </div>
        <h2 className="absolute top-[50%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
          All Products
        </h2>
      </div>

      {/* Products category section */}
      <div className=" flex gap-4 flex-wrap justify-center mt-2">
        <select 
          onChange={(e) => filterProducts(e.target.value)}
          className="border"
        >
          <option>filter by category</option>
          {allCategory.length > 0 ? (
            allCategory
              .filter(
                (filterItem) =>
                  ![
                    "lighting",
                    "motocycle",
                    "automotive",
                    "furniture",
                  ].includes(filterItem)
              )
              .map((allItems) => (
                <option key={allItems.id} value={allItems.slug}>{allItems.slug}</option>
              ))
          ) : (
            ""
          )}
        </select>
      </div>

      {
        !allProducts.length ? (<AllProductShim/>) :(
          ""
        )
      }
      

      {/* Single Product Section */}

      {showProduct ? (
        <section className="text-gray-600 body-font ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex gap-4 flex-wrap justify-center">
              {products.map((item) => (
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full border-4"
                  key={item.id}
                >
                  <NavLink to={`/singlePoduct/${item.id}`} className="block relative h-48 overflow-hidden"> 
              <img
                src={item.thumbnail}
                alt="eco-img"
                className=" object-cover object-center block"
              />
              </NavLink>
                  
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Title : {item.title} $
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Rating : {item.rating}
                    </h2>
                    <p className="mt-1">Price : {item.price} Rs</p>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="border bg-blue-500  rounded-2xl h-10 w-28 mt-2 text-black border-none"
                  >
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="flex gap-5 flex-wrap justify-center mt-8">
          {allProducts.map((productItem) => (
            <div key={productItem.id} className="border-4 rounded-md">
              <NavLink to={`/singlePoduct/${productItem.id}`} className="block relative h-48 overflow-hidden"> 
              <img
                src={productItem.thumbnail}
                alt="eco-img"
                className="object-cover object-center block"
              />
              </NavLink>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Title : {productItem.title} Arindam
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Rating : {productItem.rating}
                </h2>
                <p className="mt-1">Price : {productItem.price} Rs</p>
              </div>
              <button
                onClick={() => addToCart(productItem)}
                className="border bg-blue-500  rounded-2xl h-10 w-28 mt-2 text-black border-none"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AllProducts;
