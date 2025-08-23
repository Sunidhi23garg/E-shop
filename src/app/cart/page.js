"use client";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border p-4 rounded-md">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              <div className="flex-1">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 bg-blue-600 text-white p-2 rounded-md">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}