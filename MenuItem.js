import React from 'react';

function MenuItem({ item }) {
  const altText = item.descricaoBreveDaImagem 
    ? `Foto apetitosa de ${item.name}, mostrando ${item.descricaoBreveDaImagem}`
    : `Foto apetitosa de ${item.name}: ${item.description}`;

  // Assumindo que a imagem principal (item.image) é a versão maior
  // e que item.imageSmall e item.imageMedium contêm as URLs das versões menores.
  const hasMultipleImageSizes = item.imageSmall && item.imageMedium;

  // Defina o srcset apenas se houver versões menores
  const srcset = hasMultipleImageSizes 
    ? `${item.imageSmall} 300w, ${item.imageMedium} 600w, ${item.image} 900w`
    : ''; // Se não houver, srcset fica vazio

  // Defina o sizes se você quiser um controle mais preciso (opcional para este bloco)
  // sizes="(max-width: 600px) 100vw, 50vw" // Exemplo: até 600px, 100% da largura da viewport, senão 50%
  const sizes = hasMultipleImageSizes ? "(max-width: 600px) 100vw, 300px" : ""; // Assumindo 300px de largura final para os cards

  return (
    <article>
      <img
        src={item.image} // Fallback e a imagem de maior resolução
        alt={altText}
        className="menu-item-imagem"
        loading="lazy"
        width="300"  // Manter width e height para evitar CLS
        height="225" // Ajuste conforme suas dimensões reais
        {...(hasMultipleImageSizes && { srcSet: srcset, sizes: sizes })} // Aplica srcset e sizes condicionalmente
      />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p><strong>{item.price}</strong></p>
    </article>
  );
}

export default MenuItem;