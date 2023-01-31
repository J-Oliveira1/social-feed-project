import React, { useState } from 'react';

const Post = (props) => {
    return ( 
        <td>
            <div>
                <h3>{props.post.name}</h3>
                <p>{props.post.post}</p>
                <div>
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
            </div>
        </td>
     );
}
 
export default Post;