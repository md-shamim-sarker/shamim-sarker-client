import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/UserContext';
import InterviewCategory from './InterviewCategory';

const InterviewCategories = () => {
    // const {interviewCategories} = useContext(AuthContext);
    const {allCategories} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        allCategories('interview')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));
    }, [allCategories]);

    return (
        <div>
            {
                categories.map(category => <InterviewCategory
                    key={category._id}
                    category={category}
                ></InterviewCategory>)
            }
        </div>
    );
};

export default InterviewCategories;