import React from 'react';
import Navbar from "../../layout/Navbar/Navbar";
import Profile from "../../layout/Profile/Profile";
import s from './Office.module.scss'
import { Route, Routes } from "react-router-dom";
import Reference from "../../layout/Reference/Reference";
import News from "../../layout/News/News";
import Documents from "../../layout/Documents/Documents";
import Payments from "../../layout/Payments/Payments";
import Lessons from "../../layout/lessons/Lessons";

const Office = ({ isOpen, openMenu }) => {
    return (
        <div className={s.office}>
            <Navbar isOpen={isOpen} openMenu={openMenu} />
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