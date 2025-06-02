import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        // Fetch products (e.g., 8 featured products)
        const productsResponse = await fetch('https://dummyjson.com/products?limit=8')
        if (!productsResponse.ok) {
          throw new Error(`HTTP error! status: ${productsResponse.status}`)
        }
        const productsData = await productsResponse.json()
        setProducts(productsData.products)

        // Fetch categories
        const categoriesResponse = await fetch('https://dummyjson.com/products/categories')
        if (!categoriesResponse.ok) {
          throw new Error(`HTTP error! status: ${categoriesResponse.status}`)
        }
        const categoriesData = await categoriesResponse.json()
        setCategories(categoriesData)

      } catch (error) {
        setError(error)
        console.error("Error fetching home data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchHomeData()
  }, [])

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        Error: {error.message}. Please try again later.
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Welcome to E-Shop!</h2>

      {/* Featured Products */}
      <section className="mb-5">
        <h3 className="mb-3">Featured Products</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {products.map(product => (
            <div className="col" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/products" className="btn btn-primary">View All Products</Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="mb-5">
        <h3 className="mb-3">Browse Categories</h3>
        <div className="list-group">
          {categories.map(category => (
            <Link 
              key={category.slug}
              to={`/products?category=${category.slug}`}
              className="list-group-item list-group-item-action text-capitalize"
            >
              {category.name?.replace(/-/g, ' ')}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home