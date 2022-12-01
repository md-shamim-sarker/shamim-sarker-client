import React, {useContext, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';
import Quill from '../Test/Quill/Quill';

const Home = () => {
    const {currectLocation, setCurrentLocation} = useContext(AuthContext);
    const location = useLocation();

    console.log("Location = ", currectLocation);

    useEffect(() => {
        setCurrentLocation(location.pathname);
    }, [setCurrentLocation, location.pathname]);

    return (
        <div className='w-4/5 mx-auto'>
            <Quill></Quill>
        </div>
    );
};

export default Home;