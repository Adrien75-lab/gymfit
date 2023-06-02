import React from 'react';
import { render, screen, act,fireEvent } from '@testing-library/react';
import 'isomorphic-fetch';
import 'intersection-observer';
import { createRoot } from 'react-dom/client';
import App from '../app';
import LoginPage from '../components/LoginPage';
import '@testing-library/jest-dom';
import ComingSoonBanner from '../components/ComingSoonBanner';

test('renders App component', async () => {
    console.log('Running "renders App component" test');

    await act(async () => {
        const credentials = {
            username: '',
            password: '',
        };
        render(
            <App>
                <LoginPage />
            </App>
        );
        console.log(credentials);
    });


    const bannerElement = screen.getByText(/Inscrivez-vous pour être informé de la sortie :/i);
    expect(bannerElement).toBeInTheDocument();
});