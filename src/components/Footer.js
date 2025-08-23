import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-8 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 px-14">

        <div className="flex-1">
          <h3 className="font-bold mb-2">Filters</h3>
          <ul className="space-y-1">
            <li>All Electronics</li>
          </ul>

          <div className="mt-6 text-sm">© 2024 American</div>
        </div>

        <div className="flex-1">
          <h3 className="font-bold mb-2">About Us</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex gap-3">
            <a href="#" className="p-2 rounded-full bg-blue-600">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-blue-600">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-blue-600">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}