
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NotFound from './../components/screens/not-found/NotFound';

import { observer } from 'mobx-react-lite';
import Authorization from './../components/screens/Authorization/Authorization';

import Reference from '../components/screens/Reference/Reference';
import News from './../components/screens/News/News';
import Documents from '../components/screens/Documents/Documents';
import Payments from '../components/screens/Payments/Payments';
import Layout from '../components/layout/Layout';

import RequireAuth from '../hoc/RequireAuth'
import Lessons from '../components/screens/lessons/Lessons';
import { useEffect } from 'react';
import { useData } from '../hooks/useData';
import ProfilePage from '../components/screens/Profile/ProfilePage';


const Router = () => {
    const { isAuth, isLoaging, checkAuth } = useData().storeAuth;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth(localStorage.getItem('token'))
        }
    }, [])

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='profile' element={<RequireAuth><ProfilePage /></RequireAuth>} />

                <Route path='reference' element={<RequireAuth><Reference /></RequireAuth>} />
                <Route path='news' element={<RequireAuth><News /></RequireAuth>} />
                <Route path='documents' element={<RequireAuth><Documents /></RequireAuth>} />
                <Route path='payments' element={<RequireAuth><Payments /></RequireAuth>} />
                <Route path='lessons' element={<RequireAuth><Lessons /></RequireAuth>} />
                <Route path='*' element={<NotFound />} />

                <Route path='auth' element={<Authorization />} />
            </Route>

        </Routes>

    );
};

export default observer(Router);

