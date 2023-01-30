import React, { useState } from 'react';

const CreatePost = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    const handleCreate = e => {
        e.preventDefault();
        alert(`${name} 
        Post Created!`)
    };

    const handleName = e=> {
        setName(e.target.value);
    }

    const handlePost = e => {
        setPost(e.target.value);
    }

    return ( 
    <form onSubmit={handleCreate}>
        <div>
            <label>Name</label>
            <input type="text" value={name} onChange = {handleName}/>
        </div>
        <div>
            <label htmlFor="">Post</label>
            <input type="text" value={post} onChange = {handlePost} />
            <button type='submit'>Create</button>
        </div>
        
    </form> 
    );
}
 
export default CreatePost;