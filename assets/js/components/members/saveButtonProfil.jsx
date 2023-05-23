import React, {useState} from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SaveButtonProfil = ({onSave, age, sizeUser, weightUser, imc}) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
        setIsLoading(true);
        onSave(age, sizeUser, weightUser, imc)
            .then(() => {
                toast.success('Les informations ont été enregistrées avec succès !');
            })
            .catch(error => {
                toast.error('Une erreur est survenue lors de l\'enregistrement des informations.');
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
  return (
      <div className="container mt-5" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button type="button" className="btn btn-primary" onClick={handleClick} disabled={isLoading}>
              {isLoading ? <FaSpinner className="spin" /> : 'Enregistrer'}
          </button>
      </div>
  );
};

export default SaveButtonProfil;