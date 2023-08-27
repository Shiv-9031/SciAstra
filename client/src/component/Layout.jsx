import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../App.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}
      {/* <Footer /> */}
    </>
  );
};
