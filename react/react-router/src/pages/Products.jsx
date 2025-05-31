import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'

function Products() {
  const [products,setProducts] = useState([])
  let navigate = useNavigate()
  useEffect(()=>{
     async function getData() {
      let res = await axios.get('https://dummyjson.com/products')
      setProducts(res.data.products)
     }
     getData()

  },[])
  return (
    <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              width: '200px',
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: '100%', height: '120px', objectFit: 'cover' }}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={()=>navigate(`/product/${product.id}`)}>
              Show Product
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products





