import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/Structure/Header';
import Footer from './Components/Structure/Footer';
import reportWebVitals from './reportWebVitals';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

ReactDOM.render(
  <React.StrictMode >
    <Grid >
      <Header />
      <App />
      <Footer />
    </Grid>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
