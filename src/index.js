import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css'
import Router from './routes/Router';
import authStore from './store/authStore';
import childrenStore from './store/childrenStore';
import lessonsStore from './store/lessonStore'
import newsStore from './store/newsStore';


const storeAuth = new authStore();
const storeСhildren = new childrenStore();
const storeLesson = new lessonsStore();
const storeNews = new newsStore();

const store = {
    storeAuth,
    storeСhildren,
    storeLesson,
    storeNews
}


export const Context = createContext({
    store,
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Context.Provider value={store}>
            <Router />
        </Context.Provider>
    </BrowserRouter>
);

