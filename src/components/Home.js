import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Contact from "./Contact";
import { useGloabalContext } from "../ContextAPI/Context";

const Home = () => {
  // const data = {
  //   name: "goraya",
  //   image: "./images/hero.svg",
  // };

  /** #7 */
  const { updateHomePage } = useGloabalContext();
  useEffect(() => {
    updateHomePage();
  }, []);

  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
