
import { useAuth } from '../hooks/useAuth';
import { routes } from './routes.data';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NotFound from './../components/screens/not-found/NotFound';


const Router = () => {
    const { isAuth } = useAuth()
    // console.log(useAuth)
    return (
        <Routes>
            {routes.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                />
            ))}
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default Router;