import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/UserContext';
import InterviewCategory from './InterviewCategory';

const InterviewCategories = () => {
    const {interviewCategories} = useContext(AuthContext);
    return (
        <div>
            {
                interviewCategories.map(category => <InterviewCategory
                    key={category._id}
                    category={category}
                ></InterviewCategory>)
            }
        </div>
    );
};

export default InterviewCategories;