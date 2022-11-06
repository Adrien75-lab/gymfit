import React from "react";
import ReactDOM from "react-dom";
import Caroussel from "./components/Caroussel";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Features from "./pages/Features";
import HomePage from "./pages/HomePage";

// any CSS you import will output into a single css file (app.css in this case)
require("../styles/app.css");

console.log("Hello Adrien");

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container pt-3">
        <HomePage />
      </div>
      <div className="container pt-3">
        <About />
      </div>

      <Features />
    </>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
