
import { useContext } from 'react';
import { Context } from '..';

const useData = () => {
    const store = useContext(Context);
    return store;
}

export { useData };