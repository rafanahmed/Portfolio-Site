// src/components/CTASection.tsx
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/resume.pdf" className="bg-gray-100 p-12 flex flex-col items-start transition-transform hover:translate-y-[-4px]">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Request a Demo
            </h3>
            <p className="text-gray-600 mb-8">
              Interested in seeing my algorithmic trading models or AI applications in action? Request a personalized demonstration.
            </p>
            <span className="flex items-center text-black">
              View Resume →
            </span>
          </Link>
          
          <Link href="mailto:rafan.ahmed@uncc.edu" className="bg-gray-900 text-white p-12 flex flex-col items-start transition-transform hover:translate-y-[-4px]">
            <h3 className="text-3xl font-bold mb-4">
              Start Building
            </h3>
            <p className="text-gray-300 mb-8">
              Looking for internship opportunities in machine learning, algorithmic trading, or generative AI? Let's connect and explore possibilities.
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