import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Profile/Profile";
import s from './Office.module.scss'
import { Route, Routes } from "react-router-dom";
import Reference from "../../components/Reference/Reference";
import News from "../../components/News/News";
import Documents from "../../components/Documents/Documents";
import Payments from "../../components/Payments/Payments";
import Lessons from "../../components/lessons/Lessons";

const Office = ({ isOpen }) => {
    return (
        <div className={s.office}>
            <Navbar isOpen={isOpen} />
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