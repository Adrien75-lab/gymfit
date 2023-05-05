import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ConfirmMember = () => {
  const { email } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const confirmMember = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/confirm-member/${email}`,
          { method: 'POST' }
        );

        if (response.ok) {
          setMessage('Votre compte a été confirmé avec succès!');
        } else {
          setMessage(
            'Une erreur est survenue lors de la confirmation de votre compte. Veuillez réessayer plus tard ou contacter le support.'
          );
        }
      } catch (error) {
        setMessage(
          'Une erreur est survenue lors de la confirmation de votre compte. Veuillez réessayer plus tard ou contacter le support.'
        );
      }
    };

    confirmMember();
  }, [email]);

  return (
    <div>
      <h1>Confirmer votre compte</h1>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ConfirmMember;