import { products } from "@/data/products";
import SidebarFilters from "@/components/SidebarFilters";
import ProductGrid from "@/components/ProductGrid";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  
  const categoryFilter = params?.category || null;
  const priceFilter = params?.price || null;
  const categoryFilter2 = params?.category2 || null;
  const priceFilter2 = params?.price2 || null;
  const searchQuery = params?.q?.toLowerCase() || null;

  const filteredProducts = products.filter((product) => {

    const isCategoryMatch =
      !categoryFilter || categoryFilter === "All" ||
      product.category.toLowerCase() === categoryFilter.toLowerCase();

    const isPriceMatch =
      !priceFilter || product.price <= parseInt(priceFilter);

    const isCategoryMatch2 =
      !categoryFilter2 || categoryFilter2 === "All" ||
      product.category.toLowerCase() === categoryFilter2.toLowerCase();

    const isPriceMatch2 =
      !priceFilter2 || product.price <= parseInt(priceFilter2);

    const isSearchMatch =
      !searchQuery ||
      product.title.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery);

    return isCategoryMatch && isPriceMatch && 
           isCategoryMatch2 && isPriceMatch2 && 
           isSearchMatch;
  });

  return (
    <div className="flex container mx-auto px-4 py-6">
      <aside className="w-1/4 pr-4 hidden md:block">
        <SidebarFilters />
      </aside>

      <section className="flex-1">
        <h1 className="text-2xl font-bold mb-4 text-blue-950">
          Product Listing
          {searchQuery && ` - Search: "${searchQuery}"`}
          {categoryFilter && categoryFilter !== "All" && ` - Category: ${categoryFilter}`}
          {priceFilter && ` - Max Price: $${priceFilter}`}
          {categoryFilter2 && categoryFilter2 !== "All" && ` - Category: ${categoryFilter2}`}
          {priceFilter2 && ` - Max Price: $${priceFilter2}`}
        </h1>
        <p className="mb-4 text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
        <ProductGrid products={filteredProducts} />
      </section>
    </div>
  );
}