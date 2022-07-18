import React from 'react';
import { useState } from 'react';

export default function CreatePage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();
    
  }


  return (
    <div>
      <h2>Create a book </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input onChange={e => setTitle(e.target.value)} value={title}/>
        </label>
        <label>
          Author
          <input onChange={e => setAuthor(e.target.value)} value={author}/>
        </label>
        <button  >Create Movie</button>
      </form>
    </div>
  );
}
