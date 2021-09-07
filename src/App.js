import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

export default function App() {

  const [posts, setPosts] = useState([]);
 
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts/?userId=1')
    .then((res) => res.json())
    .then(setPosts)
    .catch((err) => {
      console.log(err);
    })
  }, [])

  const listAllPosts = posts.map((post, index) => {
    return (
      <div style ={{border: '1px solid black', margin: 10, padding: 10}}>
        <ul key={index}>
          <PostDetail post={post} />
        </ul>
      </div>
    )
  })

  return (
    <div>
      {listAllPosts}
    </div>
  )
}