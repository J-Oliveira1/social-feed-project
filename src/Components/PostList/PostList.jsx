import React, { useState } from 'react';
import Post from '../Post/Post';

const PostList = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>SocialFeed</th>
                </tr>
            </thead>
            <tbody>
                {props.post.map((post, index) => {
                    return (
                        <tr key={index}>
                            <Post post={post} />
                        </tr>
                    );
                })}
            </tbody>
        </table>
     );
}
 
export default PostList;