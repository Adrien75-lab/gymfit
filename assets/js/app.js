import React from "react";
import ReactDOM from "react-dom";
import Caroussel from "./components/Caroussel";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Features from "./pages/Features";
import HomePage from "./pages/HomePage";
import { HashRouter, Switch, Route } from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
import FeaturesPage from "./pages/FeaturesPage";
import inscriptionCoach from "./pages/inscriptionCoach";

// any CSS you import will output into a single css file (app.css in this case)
require("../styles/app.css");

console.log("Hello Adrien");

const App = () => {
  return (
    // Le HashRouter permet de faire des routes avec un #
    <HashRouter>
      <Navbar />
      <main className="pt-3">
        <Switch>
          <Route path="/features" component={FeaturesPage} />
          <Route path="/about" component={About} />
          <Route path="/inscriptionCoach" component={inscriptionCoach} />
          <Route path="/customers" component={CustomersPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </HashRouter>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
