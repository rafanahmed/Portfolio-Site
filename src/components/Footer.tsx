// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-16 px-4 space-y-8">
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0">
          <a
            href="/resume.pdf"
            className="bg-black text-white font-semibold py-4 px-8 rounded-lg flex items-center justify-center"
          >
            Download Resume →
          </a>
          <a
            href="mailto:rafan.ahmed@uncc.edu"
            className="bg-gray-100 text-gray-900 font-semibold py-4 px-8 rounded-lg flex items-center justify-center"
          >
            Contact Me →
          </a>
        </div>
        <div className="text-center text-gray-500">
          © 2025 Rafan Ahmed. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
