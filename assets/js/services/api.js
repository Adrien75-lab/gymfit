import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// API SIRET 
const BASE_URL_SIRET = 'https://entreprise.data.gouv.fr/api/sirene/v3/etablissements';

export const checkSiretValidity = async (siret, apiKey) => {
  const url = `${BASE_URL_SIRET}/${siret}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// API SIRET TEST

export const checkSiretValidityTest = async (siret) => {
    // Simule la réponse API pour les tests
    const mockResponse = {
      status: 200
    };
  
    // Vérifie si le siret est valide
    const isValidSiret = siret === "68300704000002";
  
    // Retourne le résultat
    return isValidSiret ? mockResponse.status === 200 : false;
  };
