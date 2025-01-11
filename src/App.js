import React, { useState } from 'react';
import './App.css';

const ItemListManager = () => {
  // State to store the list of items
  const [items, setItems] = useState([]);
  // State to store the current input value
  const [input, setInput] = useState('');

  // Function to handle the input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Function to handle adding a new item to the list
  const handleAddItem = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput(''); // Clear the input field
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
