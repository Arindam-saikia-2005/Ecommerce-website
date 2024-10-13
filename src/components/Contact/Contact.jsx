import { useState } from "react";
import { db } from "../../FirebaseAuth/FirebaseAuth";
import { collection , addDoc } from "firebase/firestore";
import toast from "react-hot-toast";




const Contact = () => {
  const [userContact, setUserContact] = useState({
    username: "",
    email: "",
    msg: "",
  });

  const handleContact = (e) => {
    setUserContact({ ...userContact, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    if (!userContact.username || !userContact.email || !userContact.msg) {
      return toast.error("All field are required");
    } else {
      addDoc(collection(db,"contactuser"),{
        user : userContact.username,
        Email: userContact.email,
        message:userContact.msg,
      }).then(()=>{
        toast.success(` Your form has sucessfully submitted , thank you ${userContact.username} `);
        setUserContact({
          username: "",
          email: "",
          msg: "",
        })
      })
      .catch((err)=> toast.error(err.message))
    }
  };
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">example@email.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">5555-5555</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact us
            </h2>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="username"
                value={userContact.name}
                onChange={handleContact}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userContact.email}
                onChange={handleContact}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                name="msg"
                value={userContact.msg}
                onChange={handleContact}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button  onClick={handleSubmitContact}  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
