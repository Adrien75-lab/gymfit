import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
import { green } from '@material-ui/core/colors';
import { red } from '@mui/material/colors';
import styles from './ComingSoonBanner.module.css'; // Assurez-vous que le chemin est correct
import { makeStyles } from '@material-ui/core/styles';
import appStoreGooglePlayImage from '../../img/app-store-and-google-play.jpg';
import appStore from '../../img/appStore.png';
import googlePlay from '../../img/GooglePlay.png';
import axios from 'axios';
const useStyles = makeStyles({
  comingSoonBanner: {
    padding: '30px 0',
    textAlign: 'center',
    backgroundColor: '#C1A19B'
    // Ajoutez le reste de vos styles ici
  },
  // ...
});

const ComingSoonBanner = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // État pour suivre l'état de chargement

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Activer le loader de chargement

    try {
      const response = await axios.post('http://localhost:8000/api/newsletter_subscribers', { email });

      if (response.status === 201) {
        setMessage('Inscription réussie ! Vérifiez votre e-mail pour confirmer votre abonnement.');
      } else {
        setMessage('Une erreur s\'est produite lors de votre inscription test. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'inscription à la newsletter', error);
      setMessage('Une erreur s\'est produite lors de votre inscription. Veuillez réessayer.');
    } finally {
      setIsLoading(false); // Désactiver le loader de chargement
    }
  };
  const classes = useStyles();
  const styles = {

    container: {
      maxWidth: '960px',
      margin: '0 auto'
    },
    h2: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    p: {
      fontSize: '16px',
      marginBottom: '20px'
    },
    appStoreIcons: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px'
    },
    appStoreIcon: {
      display: 'inline-block',
      margin: '0 10px',
      opacity: 0.7,
      transition: 'opacity 0.3s',
      color: '#0A5FE1', // Couleur de l'App Store
      '&:hover': {
        opacity: 1
      }
    },
    googlePlayIcon: {
      display: 'inline-block',
      margin: '0 10px',
      opacity: 0.7,
      transition: 'opacity 0.3s',
      color: '#3c79e6 !important', // Couleur de Google Play
    },
    emailInput: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px'
    },
    submitButton: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className={classes.comingSoonBanner}>
            <div style={styles.container}>
              <h2 style={styles.h2}>Notre application arrive bientôt !</h2>
              <p style={styles.p}>Téléchargez notre application sur l'App Store et Google Play prochainement.</p>
              <div style={styles.appStoreIcons}>
                <img src={appStore} alt="App Store" style={{ width: '150px', marginRight: '20px' }} />
                <img src={googlePlay} alt="Google Play" style={{ width: '150px' }} />
              </div>
              <p style={styles.p}>Inscrivez-vous pour être informé de la sortie :</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Entrez votre adresse e-mail"
                  style={styles.emailInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
                <div className="text-center mt-3">
                  <button type="submit" style={styles.submitButton} disabled={isLoading}>
                    {isLoading ? (
                      <div className="spinner-border spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      'Inscription'
                    )}
                  </button>
                </div>
                {message && <p>{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonBanner;