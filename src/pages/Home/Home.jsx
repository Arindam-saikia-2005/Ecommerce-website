

import React from 'react'
import Hero from '../../components/heroSection/Hero';
import Service from '../../components/service/Service';
import Gallery from '../../components/Gallery/Gallery';
import FamousProduct from '../../components/popularProducts/FamousProduct';
import Testimonials from '../../components/Testimonials/Testimonials';

function Home({ addToCart }) {
  return (
    <>
      <Hero/>
      <Service/>
      <FamousProduct addToCart={addToCart}/>
      <Gallery/>
      <Testimonials/>
    </>
  )
}

export default Home;