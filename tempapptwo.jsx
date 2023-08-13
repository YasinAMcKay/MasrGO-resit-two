import React from 'react'
import {useState, useEffects} from 'react';
import axios from 'axios';

function App() {

  const [post, setPosts] = useState([]);

  const fetchPosts = async() =>{
    const responsePosts = await axios.get('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
    setPosts(responsePosts.data);
    //fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata').then(response => response.json().then((json) => setPosts(json)));
  }

  useEffects(() => {
    fetchPosts
  }, [])

  return (
    <MainLayout>
      {
        posts.map((post, index) => 
        <div key={index}>
          {post.strArea}
        </div>
        )
      }
    </MainLayout>
  )
}

export default App