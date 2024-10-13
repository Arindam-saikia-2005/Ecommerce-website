
//Pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";


//components
import AllProducts from "./components/AllProducts/AllProducts";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "./FirebaseAuth/FirebaseAuth";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  const [cart, setCart] = useState([]);
  const [promocode,setPromocode] = useState("");
  const [discount,setDiscount] = useState(0);
  const [invalid,setInvalid] = useState("Invalid Promocode");
  const [userName,setUserName] = useState("");
  //add to cart
  const addToCart = (product) => {
    const isProductExist = cart.find((findItem) => findItem.id === product.id);

    if (isProductExist) {
      const updateCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updateCart);
      toast.success("your item has been succesfully added to your cart")
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      console.log(cart);
    }
  };

  //increase quantity
  const handleInc = (id) => {
    const incBtn = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(incBtn);
  };

  //decrease quantity
  const handleDec = (id) => {
    const decBtn = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(decBtn);
  };

  // For removing the items
  const handleRemove = (id) => {
    const updateByFilter = cart.filter((filterItem) => filterItem.id !== id);
    setCart(updateByFilter);
  };

  //calculate total price

  const getTotalPrice = () => {
     const totalPrice =  cart.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.price* cartReduceItem.quantity;
    }, 0);

    return totalPrice - discount;
  };


  // Discount Promocode 
  const applyPromoCode = () => {
    if(promocode === "DISCOUNT10") {
      setDiscount(getTotalPrice()*0.1)
      setPromocode("")
      setInvalid("")
    }else {
      setInvalid(invalid)
    }
  }

  //userName display
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      if(user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    })
  },[])

  return (
    <div>
      <BrowserRouter>
        <Navbar cart={cart} userName={userName} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleInc={handleInc}
                handleDec={handleDec}
                handleRemove={handleRemove}
                getTotalPrice={getTotalPrice}
                applyPromoCode={applyPromoCode}
                promocode={promocode}
                setPromocode={setPromocode}
                invalid={invalid}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/singlePoduct/:userId" element={<SingleProduct addToCart={addToCart}/>}/>
          <Route
            path="/allproducts"
            element={<AllProducts addToCart={addToCart} />}
          />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer />
        <Toaster/>
      </BrowserRouter>
    </div>
  );
}

export default App;
