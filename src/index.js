import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CartItem from './CartItem';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CartItem/>
  </React.StrictMode>,
  document.getElementById('root')
);
