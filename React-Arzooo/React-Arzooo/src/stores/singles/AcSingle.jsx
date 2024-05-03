import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInr } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";

const AcSingle = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.163:8093/getProducts');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="body1">
        <div className="ind-section">
          <div className="ind-image">
          <img className="image2" src={`data:image/jpeg;base64,${product.image_url}`} alt={product.productName} />
          </div>
          <div className="ind-details space">
            <div className="ind-company">
              <h2>{product.productName}</h2>
            </div>
            <div className="ind-model space">
              <h3>{product.description}</h3>
            </div>
            <div className="ind-price space">
              <h2>
                <FontAwesomeIcon icon={faInr} />
                {product.price}
              </h2>
            </div>
            <div className="ind-desc space">
              <p>{product.description}</p>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <br />
            <Link to="/acnow">
              <button>Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcSingle;