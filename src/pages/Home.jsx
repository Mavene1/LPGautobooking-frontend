import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Charts from "../components/Charts";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const Home = ({ setToken, token }) => {
  return (
    <>
      <Navbar setToken={setToken} />
      <Hero token={token}/>
      <Charts />
      <Footer />
    </>
  );
};
Home.propTypes = {
  setToken: PropTypes.func.isRequired,
}

export default Home;
