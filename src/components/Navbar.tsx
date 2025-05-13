"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-black text-xl font-semibold">
          <span className="inline-flex items-center">
            Rafan Ahmed
          </span>
        </Link>
      </div>
    </header>
  );
}