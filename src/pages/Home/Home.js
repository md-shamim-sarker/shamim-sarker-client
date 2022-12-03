import React from 'react';
import CodeSnippet from '../Test/Quill/CodeSnippet';
import Quill from '../Test/Quill/Quill';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Quill></Quill>
            <CodeSnippet></CodeSnippet>
        </div>
    );
};

export default Home;