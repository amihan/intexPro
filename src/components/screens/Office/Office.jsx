import React from 'react';
import Navbar from "../../layout/Navbar/Navbar";
import Profile from "../Profile/Profile";
import s from './Office.module.scss'
import { Route, Routes } from "react-router-dom";
import Reference from "../Reference/Reference";
import News from "../News/News";
import Documents from "../Documents/Documents";
import Payments from "../Payments/Payments";
import Lessons from "../lessons/Lessons";

const Office = () => {
    return (
        <div>
            <Routes>
                <Route path='/profile' element={<Profile />} />
                <Route path='/reference' element={<Reference />} />
                <Route path='/news' element={<News />} />
                <Route path='/documents' element={<Documents />} />
                <Route path='/payments' element={<Payments />} />
                <Route path='/lessons' element={<Lessons />} />
                <Route path='/exit' element={<div>Выход</div>} />
            </Routes>
        </div>
    );
};

export default Office;