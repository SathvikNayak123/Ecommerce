import React from 'react';
import useFetch from '../hooks/useFetch.js';
import LatestProducts from '../components/LatestProducts.js';
import Hero from "../components/Hero.js";


const Home = () => {
  return (
    <section>
      <Hero/>
      <LatestProducts/>
    </section>
  )
};

export default Home;
