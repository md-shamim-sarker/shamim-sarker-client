import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [storedCategories, setStoredCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currectLocation, setCurrentLocation] = useState("/");

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setStoredCategories(data))
            .catch(console.dir);
    }, [loading]);

    const authInfo = {
        storedCategories,
        loading,
        setLoading,
        currectLocation,
        setCurrentLocation
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;