import React from 'react';

function MenuSection({ id, title, items }) {
  return (
    <>
      <h2>{title}</h2>
      <section id={id}>
        {items.map(item => (
          <article key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>{item.price}</strong></p>
          </article>
        ))}
      </section>
    </>
  );
}

export default MenuSection;