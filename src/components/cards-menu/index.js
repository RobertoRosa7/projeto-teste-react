import React from 'react'

export default function CardsMenu(props) {
  const { categories } = props
  return (
    <h1>{categories.name}</h1>
  );
}