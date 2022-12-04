import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';

const Quill = () => {
    const [text, setText] = useState('<h2>Hello Bangladesh.</h2>');

    return <>
        {/* <ReactQuill theme="snow" value={text} onChange={setText} /> */}
        <ReactQuill theme="snow" value={text} onChange={setText} />

        <div className='my-10'>{parse(text)}</div>
    </>;
};

export default Quill;