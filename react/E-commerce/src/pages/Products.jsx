import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

function Products() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(10) // Number of products per page

  const location = useLocation()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const category = queryParams.get('category')
    if (category) {
      setSelectedCategory(category)
      }
  }, [location.search])

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      setLoading(true)
      setError(null)
      try {
        // Fetch products
        let productsUrl = 'https://dummyjson.com/products'
        if (selectedCategory) {
          productsUrl = `https://dummyjson.com/products/category/${selectedCategory}`
        }
        const productsResponse = await fetch(productsUrl)
        if (!productsResponse.ok) {
          throw new Error(`HTTP error! status: ${productsResponse.status}`)
        }
        const productsData = await productsResponse.json()
        setProducts(productsData.products)

        // Fetch categories (only once)
        if (categories.length === 0) {
          const categoriesResponse = await fetch('https://dummyjson.com/products/categories')
          if (!categoriesResponse.ok) {
            throw new Error(`HTTP error! status: ${categoriesResponse.status}`)
          }
          const categoriesData = await categoriesResponse.json()
          setCategories(categoriesData)
        }

      } catch (error) {
        setError(error)
        console.error("Error fetching products or categories:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProductsAndCategories()
  }, [selectedCategory, categories.length])

  // Filter products based on search term and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
      <h2 className="text-center mb-4">Our Products</h2>

      {/* Search and Filter */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value)
              setCurrentPage(1) // Reset to first page on category change
            }}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {typeof category =='string' && category.replace(/-/g, ' ')}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product List */}
      {currentProducts.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          No products found matching your criteria.
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {currentProducts.map(product => (
            <div className="col" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {filteredProducts.length > productsPerPage && (
        <nav aria-label="Page navigation" className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => paginate(currentPage - 1)}>&laquo;</button>
            </li>
            {[...Array(totalPages).keys()].map(number => (
              <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(number + 1)} className="page-link">
                  {number + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => paginate(currentPage + 1)}>&raquo;</button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Products