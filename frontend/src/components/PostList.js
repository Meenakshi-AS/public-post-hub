import React from 'react';

function PostList({ posts, onEdit, onDelete }) {
  return posts.map(post => (
    <div key={post.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
      <h4>{post.heading}</h4>
      <p>{post.content}</p>
      <button onClick={() => onEdit(post)}>Edit</button>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  ));
}

export default PostList;