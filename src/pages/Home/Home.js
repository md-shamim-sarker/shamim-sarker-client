import React, {useContext} from 'react';
import {useLocation} from 'react-router-dom';
import {AuthContext} from '../../contexts/UserContext';

const Home = () => {
    const {currectLocation, setCurrentLocation} = useContext(AuthContext);
    const location = useLocation();
    setCurrentLocation(location.pathname);
    console.log("Location = ", currectLocation);

    return (
        <div>
            This is home page
        </div>
    );
};

export default Home;