import React from "react";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Properties from "./components/Property/Properties";
import SearchProperty from "./components/SearchProperty/SearchProperty";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";



function App() {
  return (
    <>
      <Hero/>
      <SearchProperty/>
      {/* <SectionTitle/> */}
      <Properties/>
      <Services/>
      <Blog/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
