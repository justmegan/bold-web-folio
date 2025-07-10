
const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-portfolio-navy mb-6">
              About Me
            </h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                I'm a passionate computer science student with a love for creating 
                innovative web applications and extracting meaningful insights from data. 
                My journey in tech started with curiosity about how digital solutions 
                can solve real-world problems.
              </p>
              <p>
                As a problem solver at heart, I thrive on challenges that require both 
                analytical thinking and creative solutions. I believe in the power of 
                collaboration and continuous learning to build impactful technology that 
                makes a difference.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new frameworks, 
                analyzing interesting datasets, or contributing to open-source projects 
                that align with my passion for web development and data analytics.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-portfolio-blue to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <div className="text-6xl">👩‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
