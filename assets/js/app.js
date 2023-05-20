import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Features from "./pages/Features";
import HomePage from "./pages/HomePage";
import {
  HashRouter,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
import FeaturesPage from "./pages/FeaturesPage";
import inscriptionCoach from "./pages/inscriptionCoach";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import inscriptionMember from "./pages/inscriptionMember";
import LoginPage from "./pages/LoginPage";
import authAPI from "./services/authAPI";
import ProfilPage from "./pages/ProfilPage";
import ProgrammerSeance from "./components/workout/ProgrammerSeance";
import VoirSonPlanning from "./pages/VoirSonPlanning";
import VoirProgression from "./pages/VoirProgression";
import ExercicePage from "./pages/ExercicePage";
import Modal from "./Modal";
import ExerciseDetail from "./pages/ExerciseDetail";
import { createRoot } from "react-dom/client";
import planningWorkout from "./pages/PlanningWorkout";
import PlanningWorkout from "./pages/PlanningWorkout";
import ModalMembers from "./ModalMembers";
import jwtDecode from "jwt-decode";
import Booking from "./pages/BookingPage";
import PlanningCoach from "./components/PlanningCoach";
import BookingComponent from "./components/coach/BookingComponent";
import ProfilCoachComponent from "./components/coach/ProfilCoachComponent";
import TokenVerificationPage from "./pages/TokenVerificationPage";
import EmailConfirmationPage from "./pages/EmailConfirmationPage";
import ConfirmMember from "./pages/ConfirmMember";
import Parameters from "./components/Parameters";
import AccountMenu from "./components/ui/button/AccountMenu";


// any CSS you import will output into a single css file (app.css in this case)
require("../styles/app.css");


authAPI.setup();

console.log("Hello Adrien");
const getUser = () => {
  const token = window.localStorage.getItem("authToken");
  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken.roles;
  }
  return null;
};
console.log(getUser());
if (getUser() && getUser().includes("ROLE_COACH")) {
  console.log("je suis un coach");
} else {
  console.log("je suis un utilisateur");
}
const PrivateRoute = ({ path, isAuthenticated, component }) =>
  getUser() && getUser().includes("ROLE_COACH") ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to="/login" />
  );

const App = () => {
  const [isAuthenticated, setIsAuthenticated, history] = useState(
    authAPI.isAuthenticated()
  );
  const NavbarWithRouter = withRouter(Navbar);
 
  
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }, []);

  return (
    // Le HashRouter permet de faire des routes avec un #
    <HashRouter>
      <div
        style={{ opacity: opacity }}
        className={`app ${isMounted ? "fade-in" : ""}`}
      >
        <NavbarWithRouter
          isAuthenticated={isAuthenticated}
          onLogout={setIsAuthenticated}
          getUser={getUser}
        />
        
        {/* <button className="primaryBtn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button> */}

        <main className="pt-3">
          {/* {isOpen && <Modal setIsOpen={setIsOpen} />} */}
          <Switch>
            <Route path="/api/confirm-member/:email" component={ConfirmMember} />
            <Route
              path="/exercise/bodyPart/:partie"
              component={ExerciseDetail}
            />
            <Route
              path="/login"
              render={(props) => (
                <LoginPage onLogin={setIsAuthenticated} {...props} />
              )}
            />

            <Route
              exact
              path="/listbooking/:id"
              component={BookingComponent}
            />
            <Route
              exact
              path="/booking"
              component={Booking}
            />
            <Route
              exact
              path="/planningCoach"
              component={PlanningCoach}
            />

            <Route
              exact
              path="/PlanningWorkout/:id"
              component={PlanningWorkout}
            />
            <Route
              path="/PlanningWorkout"
              render={(props) => (
                <PlanningWorkout onLogin={setIsAuthenticated} {...props} />
              )}
            />

            <PrivateRoute exact path="/customers/" component={CustomersPage} />
            <Route
              path="/customers"
              render={(props) => (
                <CustomersPage onLogin={setIsAuthenticated} {...props} />
              )}
            />
            {/* <Route path="/profil/:id" component={ProfilPage} /> */}
            <Route
              path="/profil"
              render={(props) => (
                <ProfilPage
                  isAuthenticated={isAuthenticated}
                  onLogin={setIsAuthenticated}
                  getUser={getUser}
                  {...props}
                />
              )}
            />
            <Route path="/email-confirmation" component={EmailConfirmationPage} />
            <Route
              exact
              path="/verify-token/:token"
              component={TokenVerificationPage}
            />
            <Route
              path="/profilCoach"
              render={(props) => (
                <ProfilCoachComponent
                  getUser={getUser}
                  {...props}

                />
              )}
            />

            <Route path="/parameters" component={Parameters} />
            <Route path="/profilCoach" component={ProfilCoachComponent} />
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
      </div>
    </HashRouter>
  );
};

const rootElement = document.querySelector("#app");
createRoot(rootElement).render(<App />);
