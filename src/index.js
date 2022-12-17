import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import birdApp from './store/birds/birds';

//After importing the birdApp from birds.js
//We initialize the store using birdApp:
const store = createStore(birdApp);

//PROVIDER: 
//We need to wrap your root components with a Provider to ensure that the store 
//is available to all child components in the tree
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

