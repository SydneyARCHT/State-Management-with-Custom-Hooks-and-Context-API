import React from 'react';
import usePosts from '../hooks/usePosts'; 

const PostList = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts: {error.message}</div>;

  return (
    <div>
      <h3>Posts List</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;