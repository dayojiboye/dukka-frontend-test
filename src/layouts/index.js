import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import Header from "../components/ui/header";
import Backdrop from "../components/ui/backdrop";
import "./styles.scss";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const openNavHandler = () => {
    setOpen(!open);

    document.documentElement.classList.toggle("_fixed");
    document.body.classList.toggle("_fixed");
  };

  useEffect(() => {
    setOpen(false);

    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");

    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Backdrop open={open} clicked={openNavHandler} />

      <Header isOpen={open} clicked={openNavHandler} />

      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
