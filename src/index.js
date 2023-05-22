import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Materi/Router/Task/navigation';
import Company from './Materi/Router/Task/company';
import Artist from './Materi/Router/Task/artist';
import Community from './Materi/Router/Task/community';
import Cominfo from './Materi/Router/Task/cominfo';
import History from './Materi/Router/Task/history';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
      <Route path= "/" element ={<App />} >
        <Route path='company' element={<Company />} />
          <Route path='history' element={<History />} />
          <Route path='cominfo' element={<Cominfo />} />
        <Route path='artist' element={<Artist />} />
        <Route path='community' element={<Community />} />
      </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
