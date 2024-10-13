import React from "react";

function AllProductShim() {
  const arrData = new Array(9).fill("");

  return (
    <div>
      <section className="text-gray-600 overflow-hidden body-font ">
        <div className="container flex flex-wrap gap-5 justify-center px-5 py-24 mx-auto">
          {arrData.map((el, i) => (
            <div key={i} className="lg:w-1/4 md:w-1/2 p-4">
              <div className=" p-4 border-4">
                <div className="h-[170px] bg-[#ccc] rounded-md"></div>
                <div className="mt-4">
                  <h3 className="text-gray-500 w-[200px] h-[30px] rounded-md bg-[#ccc] mb-1"></h3>
                  <h2 className="rounded-md bg-[#ccc] w-[50px] h-[30px]"></h2>
                  <p className="mt-1 rounded-md bg-[#ccc] w-[100px] h-[20px]"></p>
                </div>
                <button className="border-none bg-[#ccc] rounded-2xl h-[30px] w-[100px] mt-2"></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AllProductShim;
