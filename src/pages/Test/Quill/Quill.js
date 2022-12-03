import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';

const Quill = () => {
    const [text, setText] = useState('');
    const [code, setCode] = useState('');
    const arr = [{text, code}];

    return <>
        <ReactQuill theme="snow" value={text} onChange={setText} />
        <ReactQuill theme="snow" value={code} onChange={setCode} />

        <div className='my-10'>{parse(text)}</div>
    </>;
};

export default Quill;