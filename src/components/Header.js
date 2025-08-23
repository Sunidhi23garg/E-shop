"use client";

import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchQuery = searchParams.get('q');
    if (searchQuery) {
      setQuery(decodeURIComponent(searchQuery));
    } else {
      setQuery("");
    }
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/?q=${encodeURIComponent(query)}`);
    } else {
      router.push(`/`);
    }
  };

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-10 py-3">

        <Link href="/" className="text-4xl font-bold">
          Logo
        </Link>

        <form
          onSubmit={handleSearch}
          className="flex items-center border rounded-md px-4 py-2 w-96 mx-4"
        >
          <Search size={20} className="text-white" />
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="ml-2 outline-none w-full text-white placeholder:text-white bg-transparent"
          />
        </form>

        <Link
          href="/cart"
          className="flex items-center rounded px-6 py-2 font-semibold backdrop-brightness-60"
        >
          <ShoppingCart size={20} className="text-white" />
          <span className="ml-2">Cart</span>
        </Link>
      </div>
    </header>
  );
}