// src/components/SkillsGrid.tsx
export default function SkillsGrid() {
    const skills = [
      {
        category: "Programming & ML",
        items: [
          "Python",
          "TensorFlow",
          "scikit-learn",
          "Pandas/NumPy",
          "Django",
          "REST APIs"
        ]
      },
      {
        category: "Financial Technology",
        items: [
          "Algorithmic Trading",
          "Quantitative Finance",
          "Backtesting",
          "QuantConnect",
          "Time Series Analysis",
          "Risk Management"
        ]
      },
      {
        category: "AI Integration",
        items: [
          "Google Gemini",
          "Generative AI",
          "AI-Assisted Education",
          "Large Language Models",
          "ML Model Deployment",
          "AI Ethics"
        ]
      },
      {
        category: "Professional Skills",
        items: [
          "Project Management",
          "Team Leadership",
          "Public Speaking",
          "Technical Writing",
          "Community Engagement",
          "Problem Solving"
        ]
      }
    ];
  
    return (
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Technical Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-gray-50 border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }