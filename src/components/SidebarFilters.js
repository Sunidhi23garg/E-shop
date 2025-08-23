"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SidebarFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentCategory = searchParams.get('category') || "All";
  const currentPrice = searchParams.get('price') || "1000";
  const currentCategory2 = searchParams.get('category2') || "All";
  const currentPrice2 = searchParams.get('price2') || "5000";

  const [category, setCategory] = useState(currentCategory);
  const [price, setPrice] = useState(Number(currentPrice));
  const [category2, setCategory2] = useState(currentCategory2);
  const [price2, setPrice2] = useState(Number(currentPrice2));

useEffect(() => {
  const params = new URLSearchParams(searchParams.toString());
  
  if (category !== "All") {
    params.set('category', category);
  } else {
    params.delete('category');
  }
  
  if (price !== 1000) {
    params.set('price', price.toString());
  } else {
    params.delete('price');
  }
  
  if (category2 !== "All") {
    params.set('category2', category2);
  } else {
    params.delete('category2');
  }
  
  if (price2 !== 5000) {
    params.set('price2', price2.toString());
  } else {
    params.delete('price2');
  }
  
  router.replace(`/?${params.toString()}`);
}, [category, price, category2, price2, router, searchParams]);

  useEffect(() => {
    setCategory(currentCategory);
    setPrice(Number(currentPrice));
    setCategory2(currentCategory2);
    setPrice2(Number(currentPrice2));
  }, [currentCategory, currentPrice, currentCategory2, currentPrice2]);

  return (
    <>
      <div className="bg-blue-700 text-white p-4 rounded-lg min-w-[160px] shadow-lg">
        <h3 className="text-lg font-bold mb-3">Filters</h3>

        <div className="mb-4">
          <p className="font-semibold mb-2">Category</p>
          {["All", "Electronics", "Clothing", "Home"].map((cat) => (
            <div key={cat} className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                id={cat}
                name="category"
                value={cat}
                checked={category === cat}
                onChange={() => setCategory(cat)}
                className="
                  appearance-none h-4 w-4 rounded-full border border-white 
                  checked:bg-white checked:border-transparent cursor-pointer
                "
              />
              <label htmlFor={cat}>{cat}</label>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className="font-semibold mb-2">Price: ${price}</p>
          <input
            type="range"
            min="0"
            max="1000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="
              w-full h-2 bg-white rounded-lg appearance-none cursor-pointer 
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:h-4 
              [&::-webkit-slider-thumb]:w-4 
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:bg-white
            "
          />
          <div className="flex justify-between text-sm mt-1">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>

      <div className="bg-white text-black p-4 rounded-lg mt-4 shadow-md">
        <h3 className="text-lg font-bold mb-3">Additional Filters</h3>

        <div className="mb-4">
          <p className="font-semibold mb-2">Category</p>
          {["All", "Electronics", "Clothing", "Home"].map((cat) => (
            <div key={cat + "-2"} className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                id={cat + "-2"}
                name="category2"
                value={cat}
                checked={category2 === cat}
                onChange={() => setCategory2(cat)}
                className="
                  appearance-none h-4 w-4 rounded-full border border-gray-400 
                  checked:bg-blue-700 checked:border-transparent cursor-pointer
                "
              />
              <label htmlFor={cat + "-2"}>{cat}</label>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className="font-semibold mb-2">Price: ${price2}</p>
          <div className="flex items-center justify-between border border-gray-300 rounded-lg px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="number"
              min="0"
              max="5000"
              value={price2}
              onChange={(e) => setPrice2(Number(e.target.value))}
              className="w-full outline-none bg-transparent"
            />
            <ChevronDown size={18} className="text-gray-500" />
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          setCategory("All");
          setPrice(1000);
          setCategory2("All");
          setPrice2(5000);
          router.push('/');
        }}
        className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 w-full"
      >
        Clear All Filters
      </button>
    </>
  );
}