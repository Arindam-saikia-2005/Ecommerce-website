const About = () => {
  return (
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
          AboutUs
        </h2>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Arindam Saikia , CEO and Founder of Saikia's shop
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed font-800 ">
              "Integrity builds trust, and the trust that our customers and
              stakeholders place in us is paramount. To become the trusted
              e-commerce platform in India, we must commit to transparency and
              accountability, and always act with integrity and do the right
              thing - even when no one's watching."
            </p>
          </div>
          <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-[500px] h-[500px] mb-10 md:mb-0">
            <img
              className="object-cover rounded object-center"
              alt="hero"
              src="./Eren eyagar.jpg"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./AboutUs.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              who we are ?
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              At Saikia's Shop , we’re a passionate team of innovators,
              creators, and dreamers committed to making your shopping
              experience as seamless as possible. Founded with the belief that
              shopping should be enjoyable, easy, and accessible, we bring
              together the best products from across the globe, all in one
              place. We’re not just a brand; we’re a community. Our journey
              began with a simple mission: to deliver quality, value, and
              exceptional customer service. Today, we continue that mission by
              offering carefully curated collections that reflect the latest
              trends, while ensuring every product meets our high standards of
              excellence. Driven by customer satisfaction, our team works around
              the clock to offer the latest products, amazing deals, and a
              smooth, secure online shopping experience. From sourcing the
              finest materials to delivering right to your doorstep, we’re here
              for you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Technology at Saikia's Shop
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./Technology.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
