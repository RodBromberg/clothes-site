import React, { useState } from 'react';
import './SearchBar.css';

export const SearchBar = () => {
  const [text, setText] = useState('');

  return (
    <form className="SearchBar">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="SearchBar-input"
        placeholder="Search items"
      />
      <button className="SearchBar-button">Search</button>
    </form>
  );
};