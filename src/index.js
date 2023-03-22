import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react';
import { ThmeContext } from './Context/ThmeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThmeContext>
      <App />
    </ThmeContext>
  </BrowserRouter>
);