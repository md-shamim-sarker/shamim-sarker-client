import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quill = () => {
    const [value, setValue] = useState('');

    // Fetching all categories
    /* useEffect(() => {
        fetch('http://localhost:5000/notes/id/6389a633aac6095d97ddc454')
            .then(res => res.json())
            .then(data => setNote(data))
            .catch(console.dir);
    }, []); */

    return <>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        <div>{JSON.stringify(value)}</div>
    </>;
};

export default Quill;