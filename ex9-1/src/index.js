import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";
import reportWebVitals from './reportWebVitals';
import DisplayInfor from './components/DisplayInformation';
import CardFPT from './components/CardFPT';
import AboutMe from './components/AboutMe';
import CounterApp
 from './components/Counter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutMe />
    <DisplayInfor />
    <CounterApp />
    <CardFPT />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
