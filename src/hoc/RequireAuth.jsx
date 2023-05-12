import { useLocation, Navigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { useData } from "../hooks/useData";

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const store = useData().storeAuth;
    const { isAuth } = store;

    if (!isAuth) {
        return <Navigate to='/auth' state={{ from: location }} />
    }

    return children;
};

export default observer(RequireAuth);