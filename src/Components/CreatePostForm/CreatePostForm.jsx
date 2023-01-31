import React, { useState } from 'react';

const CreatePostForm = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    const handleCreate = e => {
        e.preventDefault();
        alert(`${name} 
        Post Created!`)
        let newEntry = {
            name: name,
            post: post
        };
        props.addNewPostProp(newEntry);
    }

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
            <textarea type="text" value={post} onChange = {handlePost} />
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Create</button>
        </div>
        
    </form> 
    );
}
 
export default CreatePostForm;