import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseAuth/FirebaseAuth";

const SignUp = () => {
  const navigateLogin = useNavigate();
  const [userSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userSignUp.username || !userSignUp.email || !userSignUp.pass) {
      return toast.error("All field are required");
    } else {
      createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.pass)
        .then(async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: userSignUp.name,
          });

          navigateLogin("/login");
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <>
      <div className="relative ">
        <img
          className="object-cover w-full object-center h-[200px]"
          src="./Login/login.png"
          alt="login-img"
        />
        <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[0.3]"></div>
        <h2 className="absolute top-[50%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
          Login
        </h2>
      </div>

      <div className="container px-5 py-24 mx-auto flex bg-red-300">
        <div className=" mx-auto bg-white  p-8 flex flex-col mt-10 md:mt-0  shadow-md rounded-xl shadow-black w-[500px]">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            SignUp
          </h2>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              name="username"
              value={userSignUp.username}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userSignUp.email}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              password
            </label>
            <input
              type="password"
              id="pass"
              name="pass"
              value={userSignUp.pass}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            submit
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Do you have an account ?
            <NavLink to="/login">
              <button className="cursor-pointer hover:text-blue-300 text-black">
                Login
              </button>
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
