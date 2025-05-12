// src/components/Testimonials.tsx
export default function Testimonials() {
    return (
      <section className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            What my partners say about me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "UNC Charlotte CCI",
                role: "Presentation Audience",
                quote: "Rafan's presentation on quantitative trading models turned a complex topic into an accessible learning experience. His ability to explain overfitting risks and validation procedures showed exceptional communication skills."
              },
              {
                name: "Software Engineering Team",
                role: "ITSC 3155 Project",
                quote: "Working with Rafan on our AI Study Assistant was invaluable. His implementation of the Google Gemini integration elevated our project, demonstrating his ability to combine theoretical knowledge with practical solutions."
              },
              {
                name: "Local Mosque Community",
                role: "Eagle Scout Project Beneficiary",
                quote: "Rafan's leadership in planning and constructing our cemetery demonstrated exceptional project management skills. His ability to coordinate volunteers and resources while respecting cultural considerations was remarkable."
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200">
                <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }