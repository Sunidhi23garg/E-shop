// app/layout.js (original version will work)
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "E-Shop",
  description: "Simple e-commerce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1 bg-gray-50">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}



// import "./globals.css";
// import { CartProvider } from "@/components/CartContext";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// export const metadata = {
//   title: "E-Shop",
//   description: "Simple e-commerce app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen flex flex-col">
//         <CartProvider>
//           <Header />
//           <main className="flex-1 bg-gray-50">{children}</main>
//           <Footer />
//         </CartProvider>
//       </body>
//     </html>
//   );
// }
