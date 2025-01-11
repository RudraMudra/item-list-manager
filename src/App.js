import React, { useState } from 'react';
import './App.css';

const ItemListManager = () => {

  const [items, setItems] = useState([]);

  const [input, setInput] = useState('');


  const handleInputChange = (e) => {
    setInput(e.target.value);
  };


  const handleAddItem = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div className="app-container">
      <h1>Item List Manager</h1>
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;
