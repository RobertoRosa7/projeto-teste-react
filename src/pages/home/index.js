import React, { useEffect, useState } from 'react'
import CardsMenus from '../../components/cards-menu'
import api from '../../services/api'

export default function Home() {
  const [getCategories, setCategories] = useState([])

  useEffect(() => {
    api.get('/categories')
      .then(response => setCategories(response.data))
      .catch((e) => console.error(e));
  })

  return (
    <div>
      {getCategories.map((cat, i) => (
        <div key={cat.i}>
          <CardsMenus categories={cat}/>
        </div>
      ))}
    </div>
  );
}