"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-gray-300">
          Ossome Hacks 3.0
        </Link>
        <nav className="hidden md:flex gap-6 text-lg">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          <Link href="/schedule" className="hover:text-gray-300 transition">Schedule</Link>
          <Link href="/faq" className="hover:text-gray-300 transition">FAQ</Link>
          <Link href="/team" className="hover:text-gray-300 transition">Team</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </nav>
        <button className="md:hidden flex flex-col gap-1">
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </header>
  );
}
