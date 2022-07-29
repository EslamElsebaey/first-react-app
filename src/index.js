import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./fonts/Montserrat-VariableFont_wght.ttf"
import "@fortawesome/fontawesome-free/js/all.min.js"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/css/bootstrap.min.css"
import "@popperjs/core/dist/cjs/popper";
import "./index.css";
import "react-router-dom/";
import { BrowserRouter, HashRouter } from 'react-router-dom';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
 

<HashRouter>
    <App />

</HashRouter>


  
);

