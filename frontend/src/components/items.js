import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Items() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  // Fetch items from the backend when the component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  // Fetch all items from the backend
  const fetchItems = async () => {
    try {
      const response = await axios.get('/api/items');
      setItems(response.data);
    } catch (err) {
      console.error('Failed to fetch items:', err);
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  // Handle form submission to create a new item
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/items', newItem);
      setItems([...items, response.data]); // Add the new item to the state
      setNewItem({ name: '', price: '' }); // Clear the form
    } catch (err) {
      console.error('Failed to add item:', err);
    }
  };

  return (
    <div>
      <h1>Item List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Item Price"
          value={newItem.price}
          onChange={handleChange}
        />
        <button type="submit">Add Item</button>
      </form>
      
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Items;
