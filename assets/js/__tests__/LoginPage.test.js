import React from 'react';
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../components/LoginPage';
import '@testing-library/jest-dom/extend-expect';


test('renders error message on invalid submission', async () => {
    render(<LoginPage />);

    const submitButton = screen.getByRole('button', { name: /Connexion/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(screen.getByText(/Aucun compte ne possède cette adresse mail/i)).toBeInTheDocument();
    });
});