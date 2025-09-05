"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          © 2025 OssomeHacks 3.0. All rights reserved.
        </p>
        <nav className="flex gap-4 mt-4 md:mt-0 text-sm">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/faq" className="hover:text-white transition">FAQ</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <a 
            href="" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition"
          >
            MLH
          </a>
        </nav>
      </div>
    </footer>
  );
}
