import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import { useGloabalContext } from "../ContextAPI/Context";

const About = () => {
  // const data = {
  //   name: "Shahzad",
  //   image: "./images/about1.svg",
  // };

  /** #7 */
  const { updateAboutPage } = useGloabalContext();
  useEffect(() => {
    updateAboutPage();
  }, []);
  return <HeroSection />;
};

export default About;
