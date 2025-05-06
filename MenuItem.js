import React from 'react';

function MenuItem({ item }) {
  return (
    <article>
      <img
  src={item.image}
  alt={item.name}
  loading="lazy"
/>

      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p><strong>{item.price}</strong></p>
    </article>
  );
}

export default MenuItem;