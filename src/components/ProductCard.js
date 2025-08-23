"use client";
import Link from "next/link";
import { useCart } from "./CartContext";
import { StarIcon } from "lucide-react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const isSmartphone = product.title === "Smartphone";

  return (
    <div
      className={`bg-white border rounded-lg p-4 shadow-2xl hover:shadow-xl transition-shadow duration-300 ${isSmartphone ? "col-span-1 md:col-span-2" : ""}`}
    >
      <div className={`flex ${isSmartphone ? "flex-col md:flex-row gap-4" : "flex-col"}`}>
        <Link href={`/product/${product.id}`} className={isSmartphone ? "w-full md:w-1/2" : ""}>
          <img
            src={product.image}
            alt={product.title}
            className={`w-full ${isSmartphone ? "h-64 object-contain" : "h-40 object-contain"} rounded-md filter drop-shadow-lg`}
          />
        </Link>

        <div className={isSmartphone ? "w-full md:w-1/2 flex flex-col justify-between" : ""}>
          <Link href={`/product/${product.id}`} className="block">
            <h2 className="mt-4 font-semibold text-lg">{product.title}</h2>
            <p className="text-gray-600 text-base">${product.price}</p>

            {isSmartphone && (
              <div className="mt-2">
                <div className="flex items-center text-sm text-yellow-500">
                  <StarIcon size={16} />
                  <StarIcon size={16} />
                  <StarIcon size={16} />
                  <StarIcon size={16} />
                  <StarIcon size={16} className="text-gray-300" />
                </div>
                <p className="text-gray-700 text-sm mt-1">{product.description}</p>
                <p className="text-gray-500 text-xs mt-1">Category</p>
                <p className="text-gray-700 text-sm">{product.category}</p>
              </div>
            )}
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}