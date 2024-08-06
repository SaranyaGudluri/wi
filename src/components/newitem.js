import React, { useState } from 'react';

function NewItemForm({ onAddItem }) {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [shipping_method, setShippingMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { 
      id: Date.now().toString(), 
      item, 
      price, 
      image_url, 
      shipping_method,
      createdAt: new Date().toISOString()
    };
    onAddItem(newItem);
    setItem('');
    setPrice('');
    setImageUrl('');
    setShippingMethod('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={item} 
        onChange={(e) => setItem(e.target.value)} 
        placeholder="Item name" 
        required 
      />
      <input 
        type="number" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        placeholder="Item price" 
        required 
      />
      <input 
        type="text" 
        value={image_url} 
        onChange={(e) => setImageUrl(e.target.value)} 
        placeholder="Image URL" 
        required 
      />
      <input 
        type="text" 
        value={shipping_method} 
        onChange={(e) => setShippingMethod(e.target.value)} 
        placeholder="Shipping Method" 
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default NewItemForm;
