import React from 'react';

function PostFormModal({ heading, content, onChangeHeading, onChangeContent, onSubmit, onClose }) {
  return (
    <div>
      <h3>Create Post</h3>
      <input placeholder="Heading" value={heading} onChange={onChangeHeading} /><br />
      <textarea placeholder="Content" value={content} onChange={onChangeContent} rows="4" cols="50" /><br />
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default PostFormModal;