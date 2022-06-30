import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache()
// });

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThirdwebProvider desiredChainId={activeChainId}>
        <App />
      </ThirdwebProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
