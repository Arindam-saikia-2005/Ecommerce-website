import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseAuth/FirebaseAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigateHome = useNavigate();
  const [userSignUp, setUserSignUp] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userSignUp.email || !userSignUp.pass) {
      return toast.error("All field are required");
    } else {
      signInWithEmailAndPassword(auth, userSignUp.email, userSignUp.pass)
        .then((res) => {
          const user = res.user;

          navigateHome("/");
        })
        .catch((err) => toast.error(err.message));
    }
  };
  return (
    <>
      <div>
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
            Login
          </h2>
        </div>

        {/* Login Form */}
        <div className="container px-5 py-24 mx-auto flex ">
          <div className=" mx-auto bg-white  p-8 flex flex-col mt-10 md:mt-0  shadow-md rounded-xl shadow-black">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Login
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
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
              <label className="leading-7 text-sm text-gray-600">
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
              Don't have an account ?{" "}
              <NavLink to="/signup">
                <button className="cursor-pointer hover:text-blue-300 text-black">
                  Sign Up
                </button>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
