import React from "react";
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import Charts from "../components/Charts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Charts />
      <Footer />
    </>
  );
};

export default Home;
