// src/components/InfoSection.tsx
export default function InfoSection() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Skills & Expertise
        </h2>
        <div className="space-y-12">
          {[
            { skill: 'Python', desc: 'Data analysis, scripting, and AI model development.' },
            { skill: 'Java', desc: 'Object-oriented programming and software engineering.' },
            { skill: 'C', desc: 'Systems programming and performance-critical applications.' },
            { skill: 'Django', desc: 'Full-stack web development and REST APIs.' },
            { skill: 'Next.js', desc: 'Modern React applications with SSR and SSG.' },
          ].map(({ skill, desc }) => (
            <div key={skill} className="flex flex-col md:flex-row md:justify-between items-start">
              <h3 className="text-2xl font-semibold text-gray-900">{skill}</h3>
              <p className="text-gray-500 mt-2 md:mt-0 md:w-2/3">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}