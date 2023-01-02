import React, { useState } from "react";
import ReactDOM from "react-dom";
import Caroussel from "./components/Caroussel";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Features from "./pages/Features";
import HomePage from "./pages/HomePage";
import { HashRouter, Switch, Route, withRouter } from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
import FeaturesPage from "./pages/FeaturesPage";
import inscriptionCoach from "./pages/inscriptionCoach";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import inscriptionMember from "./pages/inscriptionMember";
import LoginPage from "./pages/LoginPage";
import authAPI from "./services/authAPI";
import ProfilPage from "./pages/ProfilPage";
import ProgrammerSeance from "./pages/ProgrammerSeance";
import VoirSonPlanning from "./pages/VoirSonPlanning";
import VoirProgression from "./pages/VoirProgression";
import ExercicePage from "./pages/ExercicePage";
import Modal from "./Modal";
import ExerciseDetail from "./pages/ExerciseDetail";

// any CSS you import will output into a single css file (app.css in this case)
require("../styles/app.css");

authAPI.setup();

console.log("Hello Adrien");

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const NavbarWithRouter = withRouter(Navbar);
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Le HashRouter permet de faire des routes avec un #
    <HashRouter>
      <NavbarWithRouter
        isAuthenticated={isAuthenticated}
        onLogout={setIsAuthenticated}
      />
      {/* <button className="primaryBtn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button> */}

      <main className="pt-3">
        {/* {isOpen && <Modal setIsOpen={setIsOpen} />} */}
        <Switch>
          <Route path="/exercise/:id" component={ExerciseDetail} />
          <Route
            path="/login"
            render={(props) => (
              <LoginPage onLogin={setIsAuthenticated} {...props} />
            )}
          />
          <Route exact path="/customers/:id" component={CustomersPage} />
          <Route
            path="/customers"
            render={(props) => (
              <CustomersPage onLogin={setIsAuthenticated} {...props} />
            )}
          />
          <Route path="/profil/:id" component={ProfilPage} />
          <Route
            path="/profil"
            render={(props) => (
              <ProfilPage onLogin={setIsAuthenticated} {...props} />
            )}
          />

          <Route path="/exercise" component={ExercicePage} />
          <Route path="/features" component={FeaturesPage} />
          <Route path="/about" component={About} />

          <Route path="/VoirSonPlanning" component={VoirSonPlanning} />
          <Route path="/ProgrammerSeance" component={ProgrammerSeance} />
          <Route path="/inscriptionCoach" component={inscriptionCoach} />
          <Route path="/inscriptionMember" component={inscriptionMember} />
          <Route path="/customers" component={CustomersPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>

      <ToastContainer position="bottom-right" theme="colored" />
    </HashRouter>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
