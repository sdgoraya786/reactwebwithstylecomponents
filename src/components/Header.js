import React, { useEffect, useState } from "react";
import { Header1, Header2 } from "./Headers";

const Header = () => {
  const [header, setHeader] = useState(false);

  const listenScrollEvent = (event) => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll < 73) {
      setHeader(false);
    } else {
      setHeader(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return <>{header ? <Header2 /> : <Header1 />}</>;
};

export default Header;
