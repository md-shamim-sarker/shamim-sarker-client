import React, {useEffect, useState} from 'react';

const MyFavorite = ({fav, index}) => {
    const [note, setNote] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/notes/id/${fav?.noteId}`)
            .then(res => res.json())
            .then(data => setNote(data))
            .catch(err => console.log(err));
    }, [fav?.noteId, setNote]);

    return (
        <div>
            {index + 1}
            {note?.heading}
        </div>
    );
};

export default MyFavorite;