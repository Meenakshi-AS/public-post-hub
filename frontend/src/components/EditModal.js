import React from 'react';

function EditModal({ heading, content, onChangeHeading, onChangeContent, onUpdate, onClose }) {
  return (
    <div>
      <h3>Edit Post</h3>
      <input placeholder="Heading" value={heading} onChange={onChangeHeading} /><br />
      <textarea value={content} onChange={onChangeContent} rows="4" cols="50" /><br />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default EditModal;