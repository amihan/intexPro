
import { useAuth } from './../hooks/useAuth';

const Routes = () => {
    const { useAuth } = useAuth();
    console.log(useAuth);
    return (
        <div>
            Hello!!!!
        </div>
    );
};

export default Routes;