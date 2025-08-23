"use client";

import { useCart } from "@/components/CartContext";
import { useState } from "react";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowPopup(true); 
    
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-4 mt-6">
        <div className="flex items-center gap-2">
          <label htmlFor="quantity" className="font-semibold">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min={1}
            className="w-16 p-2 border rounded-md text-center"
          />
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>

      {showPopup && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-md shadow-lg z-50">
          Item(s) added to cart!
        </div>
      )}
    </div>
  );
}