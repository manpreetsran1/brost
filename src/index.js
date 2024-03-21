import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import "./AppStyles/css/style.css";
import "./AppStyles/css/bootstrap.css";
import "./AppStyles/css/responsive.css";
import "./AppStyles/css/font-awesome.css";
import "./AppStyles/css/font-awesome.min.css";
// import "./AppStyles/css/owl.carousel.css";
// import "./AppStyles/css/owl.carousel.min.css";
import configureStore from "./Redux/Store/Store";

const store = configureStore();

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}><App /></Provider> ,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
