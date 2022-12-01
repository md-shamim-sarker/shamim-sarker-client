import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quill = () => {
    const [value, setValue] = useState('');
    return <>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        <div>{JSON.stringify(value)}</div>
    </>;
};

export default Quill;