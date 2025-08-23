import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:flex md:gap-8 max-w-6xl">
      <div className="md:w-1/2 flex justify-center">
        <div className="w-full max-w-md h-96 relative">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="rounded-lg shadow-md object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-2xl text-blue-800 font-semibold mt-4">${product.price}</p>
          
          <div className="mt-6">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {product.category}
            </span>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">{product.description}</p>
          <div className="mt-8 border-t pt-6">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}