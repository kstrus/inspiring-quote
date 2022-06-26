import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';

import './index.css';
import App from './App';

const URL = 'https://hidden-fortress-46243.herokuapp.com/';
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: URL }),
    queryDeduplication: false
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);
