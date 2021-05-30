import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/Structure/Header';
import Footer from './Components/Structure/Footer';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode >
    
      <Header />
      <App />
      <Footer />
    
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
