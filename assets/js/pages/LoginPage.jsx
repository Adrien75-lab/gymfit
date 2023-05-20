import React, {useState, useEffect} from "react";
import {toast} from "react-toastify";
import authAPI from "../services/authAPI";
import {FaSpinner} from 'react-icons/fa';
import OpenAi from "../components/OpenAi";
import Chatbot from "../components/OpenAi";

const LoginPage = ({onLogin, history}) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [userRole, setUserRole] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget;
        setCredentials({...credentials, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true);
            const tokenPayload = await authAPI.authenticate(credentials);
            const userRole = tokenPayload.roles;
            setError("");
            setUserRole(userRole);
            onLogin(true);
            toast.success("Vous êtes maintenant connecté !");
        } catch (error) {
            setError("Aucun compte ne possède cette adresse e-mail ou les informations ne correspondent pas");
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (userRole) {
            if (userRole.includes("ROLE_COACH")) {
                history.replace("/profilCoach");
            } else {
                history.replace("/profil");
            }
        }
    }, [userRole, history]);

    return (
        <>
            <Chatbot/>
            <h2 className="text-center my-3">Connexion</h2>
            <form onSubmit={handleSubmit}>
                <div className="container w-50">
                    <div className="form-group mt-2">
                        <label htmlFor="username">Adresse e-mail</label>
                        <input
                            value={credentials.username}
                            onChange={handleChange}
                            type="email"
                            placeholder="Adresse e-mail de connexion"
                            name="username"
                            id="username"
                            className="form-control mt-2"
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            value={credentials.password}
                            onChange={handleChange}
                            type="password"
                            placeholder="Mot de passe"
                            name="password"
                            id="password"
                            className={"form-control mt-2" + (error && " is-invalid")}
                        />
                        {error && <p className="invalid-feedback">{error}</p>}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mt-2" disabled={isLoading}>
                            {isLoading ? (
                                <FaSpinner className="spin"/>
                            ) : (
                                "Connexion"
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default LoginPage;