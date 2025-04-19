
// src/components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-white text-xl font-semibold">
          Rafan Ahmed
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#contact" className="text-white uppercase border border-white px-4 py-2 font-semibold">
            Contact Me
          </Link>
          <button className="text-white" aria-label="Search">
            🔍
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="text-white">
            ☰
          </button>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '×' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-black bg-opacity-90">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="#contact" className="text-white uppercase border border-white px-4 py-2 font-semibold">
              Contact Me
            </Link>
            <button className="text-white">Search 🔍</button>
          </div>
        </nav>
      )}
    </header>
  );
}

