import React, {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';
import LoadingSpinner from '../pages/LoadingSpinner/LoadingSpinner';

const WriterRouter = ({children}) => {
    const {userDb, loading, logOut} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    if(userDb?.isAdmin === true || userDb?.role === 'super-admin' || userDb?.role === 'writer') {
        return children;
    } else {
        logOut()
            .then(() => {
                <Navigate to={"/login"} state={{from: location}} replace></Navigate>;
            })
            .catch(err => console.log(err));
    }
};

export default WriterRouter;