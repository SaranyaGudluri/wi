import React from 'react';
import './items.css';

function ItemList({ items }) {
  return (
    <div className="items-grid">
      {items.map(item => (
        <div key={item.id} className="item-card">
          <img src={item.image_url} alt={item.item} className="item-image" />
          <h2 className="item-name">{item.item}</h2>
          <p className="item-price">Rs.{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
