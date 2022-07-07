import React from 'react';
import { ReactDOM } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './LoginPage'
import SignUp from './SignUp'

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <div className="App">
          <Route path="/" element={<App />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </div>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
