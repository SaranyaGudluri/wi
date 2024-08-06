import React, { useState, useEffect } from 'react';
import { fetchItems, addItem } from './api/mockapi.js';
import Header from './components/header.js';
import ItemList from './components/items';
import NewItemForm from './components/newitem';
import SearchBar from './components/search';

function App() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchItems().then(data => setItems(data));
  }, []);

  const handleAddItem = (item) => {
    addItem(item).then(newItem => setItems([...items, newItem]));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <NewItemForm onAddItem={handleAddItem} />
      <ItemList items={filteredItems} />
      {filteredItems.length === 0 && <p>No items match your search</p>}
    </div>
  );
}

export default App;
