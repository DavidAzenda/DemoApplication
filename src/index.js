import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter as Router, Route, Routes } from 'react-router-dom';
import {Navigation,App,ToDoApp,Calculator} from './components';

// ReactDOM.render(
//   <Router>
//     <Navigation/>
//     <Routes>
//       <Route path = "/" element = {<App />} />
//       <Route path = "/todo" element = {<ToDo />} />
//     </Routes>
//   </Router>,
//   document.getElementById("root")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Router basename='/'>
      <Navigation/>
      <Routes>
       <Route path = "/" element = {<App />} />
        <Route path = "/todo" element = {<ToDoApp />} />
        <Route path = "/calculator" element = {<Calculator />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
