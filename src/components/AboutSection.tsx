// src/components/AboutSection.tsx
export default function AboutSection() {
    return (
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-900 mb-16">
            About me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a computer science student and machine learning enthusiast dedicated to transforming technical expertise into meaningful, real-world impact. My journey in tech has been fueled by a profound curiosity—a personal mantra centered on the continuous stream of gnosis: always learning, iterating, and refining with each project.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I explored the intersection of AI and finance by developing my first algorithmic trading strategy—a SimpleRNN-based model to trade SPY using QuantConnect. Initially thrilled by promising backtests (15% CAR, Sharpe ratio of 0.87), I soon uncovered critical issues like overfitting and look-ahead bias. Rather than viewing these as setbacks, I embraced them as learning milestones. I shared these insights at UNC Charlotte, presenting my project as a cautionary case study to help peers avoid similar pitfalls.
              </p>
              <p className="text-lg text-gray-600">
                Beyond trading, I've also built full-stack web applications. My AI Study Assistant project—developed with Django's REST Framework and Google's Gemini API—demonstrates my ability to integrate robust backend systems and collaborate within a software engineering environment. This tool enhances how users learn and retain information, reflecting my commitment to building technology that supports human development and clarity.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Outside the technical realm, I hold a deep passion for teaching, public speaking, and mentorship—spaces where my commitment to gnosis truly shines. I see knowledge not just as information but as illumination, and this belief shapes how I engage with others. Whether explaining a model or leading a session on mindful productivity, I strive to create dialogue that uplifts and enlightens.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As an Eagle Scout, I led a team of 20+ volunteers to plan and construct a cemetery for a mosque community in Charlotte. This project demonstrated my leadership abilities and commitment to community service, bringing together diverse groups for a meaningful cause.
              </p>
              <p className="text-lg text-gray-600">
                I seek internship opportunities in machine learning, algorithmic trading, generative AI, or transformative FinTech spaces. My goal is to develop systems that empower users—delivering smarter decisions, measurable value, and open, transparent AI tools that respect both logic and intuition. As an Eagle Scout, I've also carried forward the leadership values that continue to shape my work ethic and service mindset.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }