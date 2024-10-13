

const Gallery = () => {
    return (
      <>
      <div className=" mt-10 text-center"> 
        <h2 className=" text-4xl  md:text-5xl font-semibold underline">
            Gallery Products
        </h2>
      </div>
       <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="./Gallery/Shoes.png"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="./Gallery/Watch.png"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="./Gallery/Tshirts.png"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="./Gallery/Hoddie.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="./Gallery/Iphone.png"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="./Gallery/Laptop.png"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
        
    )
}

export default Gallery;