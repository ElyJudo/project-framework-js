import { useState } from 'react'

const initialProducts = [
  { id: 1, name: 'Laptop Pro', price: 1200, category: 'Electronique' },
  { id: 2, name: 'Souris Gamer', price: 50, category: 'Electronique' },
  { id: 3, name: 'T-shirt Coton', price: 20, category: 'Vetements' },
]

function App() {
  const [products] = useState(initialProducts)
  const [cartCount, setCartCount] = useState(0)

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Catalogue de Produits</h1>
      <p>Panier : {cartCount} articles</p>
      
      <div style={{ display: 'grid', gap: '10px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{product.name}</h3>
            <p>Prix : {product.price}€</p>
            <button onClick={() => setCartCount(cartCount + 1)}>
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
