import React, { useEffect, useState } from 'react';
import API from './api';
import PostList from './components/PostList';
import PostFormModal from './components/PostFormModal';
import EditModal from './components/EditModal';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [newHeading, setNewHeading] = useState('');
  const [newContent, setNewContent] = useState('');
  const [editId, setEditId] = useState(null);
  const [editHeading, setEditHeading] = useState('');
  const [editContent, setEditContent] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    API.get('posts/').then(res => setPosts(res.data));
  }, []);

  const createPost = async () => {
    await API.post('posts/', { heading: newHeading, content: newContent });
    setShowCreate(false);
    setNewHeading('');
    setNewContent('');
    API.get('posts/').then(res => setPosts(res.data));
  };

  const updatePost = async () => {
    await API.put(`posts/${editId}/`, { heading: editHeading, content: editContent });
    setShowEdit(false);
    setEditId(null);
    setEditHeading('');
    setEditContent('');
    API.get('posts/').then(res => setPosts(res.data));
  };

  const deletePost = async id => {
    await API.delete(`posts/${id}/`);
    API.get('posts/').then(res => setPosts(res.data));
  };

  return (
    <div className="App">
      <h2>Public Post Hub</h2>
      <button onClick={() => setShowCreate(true)}>+ Create Post</button>
      <PostList posts={posts} onEdit={(p) => { setEditId(p.id); setEditHeading(p.heading); setEditContent(p.content); setShowEdit(true); }} onDelete={deletePost} />
      {showCreate && <PostFormModal heading={newHeading} content={newContent} onChangeHeading={e => setNewHeading(e.target.value)} onChangeContent={e => setNewContent(e.target.value)} onSubmit={createPost} onClose={() => setShowCreate(false)} />}
      {showEdit && <EditModal heading={editHeading} content={editContent} onChangeHeading={e => setEditHeading(e.target.value)} onChangeContent={e => setEditContent(e.target.value)} onUpdate={updatePost} onClose={() => setShowEdit(false)} />}
    </div>
  );
}

export default App;