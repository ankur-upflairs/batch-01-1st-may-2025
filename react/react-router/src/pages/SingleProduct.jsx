import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
function SingleProduct() {
  const [product, setproduct] = useState({});
  let { id } = useParams();
  useEffect(() => {
    async function getData() {
      let res = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(res.data);
      setproduct(res.data);
    }
    getData();
  }, []);
  return (
    <div>      
      <div style={{ padding: "1.5rem", maxWidth: "800px", margin: "auto" }}>
        <h1>{product.title}</h1>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }}
        />
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>SKU:</strong> {product.sku}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Discount:</strong> {product.discountPercentage}%
        </p>
        <p>
          <strong>Rating:</strong> {product.rating} / 5
        </p>
        <p>
          <strong>Stock:</strong> {product.stock}
        </p>
        <p>
          <strong>Availability:</strong> {product.availabilityStatus}
        </p>
        <p>
          <strong>Minimum Order Quantity:</strong>{" "}
          {product.minimumOrderQuantity}
        </p>
        <p>
          <strong>Warranty:</strong> {product.warrantyInformation}
        </p>
        <p>
          <strong>Shipping Info:</strong> {product.shippingInformation}
        </p>
        <p>
          <strong>Return Policy:</strong> {product.returnPolicy}
        </p>
        <p>
          <strong>Tags:</strong> {product.tags?.join(", ")}
        </p>

        <h3>Dimensions (cm)</h3>
        <ul>
          <li>Width: {product.dimensions?.width}</li>
          <li>Height: {product.dimensions?.height}</li>
          <li>Depth: {product.dimensions?.depth}</li>
        </ul>

        <h3>Meta Information</h3>
        <ul>
          <li>
            Created At: {new Date(product.meta?.createdAt).toLocaleString()}
          </li>
          <li>
            Updated At: {new Date(product.meta?.updatedAt).toLocaleString()}
          </li>
          <li>Barcode: {product.meta?.barcode}</li>
          <li>QR Code: {product.meta?.qrCode}</li>
        </ul>

        <h3>Images</h3>
        <div style={{ display: "flex", gap: "1rem", overflowX: "auto" }}>
          {product.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`product-${i}`}
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
          ))}
        </div>

        <h3 style={{ marginTop: "2rem" }}>Reviews</h3>
        {product.reviews?.length > 0 ? (
          product.reviews.map((review, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            >
              <p>
                <strong>{review.reviewerName}</strong> ({review.reviewerEmail})
              </p>
              <p>Rating: {review.rating} / 5</p>
              <p>{review.comment}</p>
              <p>
                <small>{new Date(review.date).toLocaleString()}</small>
              </p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
