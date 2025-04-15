// src/components/MenuSection.js
import React from 'react';
import MenuItem from './MenuItem';

function MenuSection({ title, items }) {
  return (
    <>
      <h2>{title}</h2>
      <section id={title.toLowerCase().replace(' ', '-')}>
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </section>
    </>
  );
}

export default MenuSection;