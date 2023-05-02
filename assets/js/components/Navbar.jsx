import React, { useEffect, useRef, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import authAPI from "../services/authAPI";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SearchExercises from "./SearchExercises";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import AccountMenu from "./ui/button/AccountMenu";

function strUcFirst(a) { return (a + '').charAt(0).toUpperCase() + a.substr(1); }




const Navbar = ({ isAuthenticated, onLogout, history,getUser }) => {
  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const bodyPart = authAPI.getBodyPart();
  
  // console.log(bodyPart);

  const handleBodyPartSelect = (item) => {

    setSelectedBodyPart(item);
  };
  console.log(selectedBodyPart);



  const handleLogout = () => {
    authAPI.logout();
    onLogout(false);
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          GymFit ! 
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/exercise">
                Exercises
              </NavLink>
            </li> */}
            <li className="nav-item" >

              {[''].map(
                (variant) => (
                  <DropdownButton
                    as={ButtonGroup}
                    key={variant}
                    id={`dropdown-variants-${variant}`}
                    variant={variant.toLowerCase()}

                    title='Exercises'
                  >
                    <div className="sub-menu">
                      {['end'].map(
                        (direction) => (
                          <DropdownButton className="sub-menu"
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="danger"

                            title='Toutes les parties du corps'
                          >
                            <div className="sub-menu2" >
                              {bodyPart.map((item) => (
                                <Dropdown.Item eventKey="1"
                                  m="0 40px" className="subMenu2" onClick={() => handleBodyPartSelect(item)}>
                                  <NavLink className="nav-link"
                                    to={{
                                      //pathname: "/exercise/:{item}",
                                      pathname: `/exercise/bodyPart/${item}`,
                                      // search: `?partie=${item}`
                                    }}>
                                    {strUcFirst(item)}
                                  </NavLink>
                                </Dropdown.Item>
                                // <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                // <Dropdown.Item id="dropdown-custom-1" eventKey="3">Something else here</Dropdown.Item>
                                // <Dropdown.Divider />
                                // <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                              ))}
                            </div>
                          </DropdownButton>
                        ),
                      )}
                    </div>
                    <Dropdown.Divider />
                    <div className="sub-menu">
                      {['end'].map(
                        (direction) => (
                          <DropdownButton className="sub-menu"
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="danger"

                            title='Tous les équipements'
                          >
                            <div className="sub-menu2" >
                              {bodyPart.map((item) => (
                                <Dropdown.Item eventKey="1"
                                  m="0 40px" className="subMenu2" onClick={() => handleBodyPartSelect(item)}>
                                  <NavLink className="nav-link"
                                    to={{
                                      //pathname: "/exercise/:{item}",
                                      pathname: `/exercise/bodyPart/${item}`,
                                      // search: `?partie=${item}`
                                    }}>
                                    {strUcFirst(item)}
                                  </NavLink>
                                </Dropdown.Item>
                                // <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                // <Dropdown.Item id="dropdown-custom-1" eventKey="3">Something else here</Dropdown.Item>
                                // <Dropdown.Divider />
                                // <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                              ))}
                            </div>
                          </DropdownButton>
                        ),
                      )}
                    </div>


                    <Dropdown.Divider />

                    <Dropdown.Item className="menu" eventKey="4" href="#/exercise">Tous les exercises</Dropdown.Item>
                  </DropdownButton>
                ),

              )}

            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/ProgrammerSeance">
                Création d'une séance
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                A propos
              </NavLink>
            </li>

          </ul>
          <ul className="navbar-nav ml-auto">
            {(!isAuthenticated && (
              <>
                <li className="nav-item btn btn-secondary first-button">
                  <NavLink className="nav-link" to="/inscriptionMember">
                    Inscription
                  </NavLink>
                </li>
                <li className="nav-item btn btn-info second-button">
                  <NavLink className="nav-link" to="/login">
                    Connexion
                  </NavLink>
                </li>
              </>
            )) || (
                // <li className="nav-item ">
                //   <button  className="btn btn-secondary">
                //     Déconnexion
                //   </button>
                // </li>
                <AccountMenu getUser={getUser} onLogout={handleLogout} />
              )}
            <></>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;