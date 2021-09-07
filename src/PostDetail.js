import React, { useEffect, useState } from 'react';

export default function PostDetail({post}) {

    const [comments, setCommments] = useState([]);
    const [display, setDisplay] = useState(false);
    const url = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`;
    const toggleDisplay = () => setDisplay(!display);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then(setCommments)
        .catch((err) => {
            console.log(err);
        })
    }, [url])

    const listComments = () => {
        if (comments && comments.length > 0) {
            return comments.map((comment, index) => (
                <div>
                    <li key={index} >
                        {comment.email} - {comment.name}
                    </li>
                </div>
            ))
        }
        return "Loading..."
    }

    return (
        <div>
           <h3>Post # {post.id}: {post.body}</h3>
           <button onClick={toggleDisplay}>Show Comments for Post #{post.id}</button>
           
           {display ? <div><h4>Post Comments: </h4><ul style={{border: "1px solid red"}}>{listComments()}</ul></div> : null}
        </div>
    )
}