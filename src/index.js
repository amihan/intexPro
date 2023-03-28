import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css'
import Router from './routes/Router';
import authStore from './store/authStore';



const store = new authStore();
console.log('store', store.isAuth)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);

