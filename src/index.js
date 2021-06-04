import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Components/Structure/Footer';
import reportWebVitals from './reportWebVitals';
import About from './Components/Structure/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode >
    <Router>
      <Route path='/' exact render={() => (
        <App />
      )} />
      <Route path='/about' component={About} />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
