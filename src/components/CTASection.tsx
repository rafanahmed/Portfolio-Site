// src/components/CTASection.tsx
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/Images/RafanAhmedResumeNophonenum.pdf" className="bg-gray-100 p-12 flex flex-col items-start transition-transform hover:translate-y-[-4px]">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              View Resume
            </h3>
            <p className="text-gray-600 mb-8">
              You came this far, I am sure you are interested in seeing my resume? Click here for a PDF view.
            </p>
            <span className="flex items-center text-black">
              View Resume →
            </span>
          </Link>
          
          <Link href="mailto:ahmedrafan235@gmail.com" className="bg-gray-900 text-white p-12 flex flex-col items-start transition-transform hover:translate-y-[-4px]">
            <h3 className="text-3xl font-bold mb-4">
              Contact Me
            </h3>
            <p className="text-gray-300 mb-8">
              Got any questions for me? Click here to send me an email.
            </p>
            <span className="flex items-center text-white">
              Contact Me →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}