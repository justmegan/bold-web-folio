
const Experience = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "LimeLight Renhold AS",
      period: "May 2025 - Present",
      achievement: "Built a responsive website for a cleaning service company using React + Vite"
    },
   
    {
      role: "Web Development Freelancer",
      company: "Self-Employed",
      period: "2023 - Present", 
      achievement: "Created responsive websites for 5+ local businesses using React and modern web technologies"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-portfolio-light">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-portfolio-navy mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey in web development and data analytics
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="relative animate-fade-in">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-portfolio-blue/30"></div>
              )}
              
              <div className="flex items-start space-x-6 mb-12">
                {/* Timeline dot */}
                <div className="w-12 h-12 bg-portfolio-blue rounded-full flex items-center justify-center shadow-lg flex-shrink-0 mt-2">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex-grow hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-portfolio-navy">
                      {experience.role}
                    </h3>
                    <span className="text-portfolio-blue font-medium">
                      {experience.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">
                    {experience.company}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {experience.achievement}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
