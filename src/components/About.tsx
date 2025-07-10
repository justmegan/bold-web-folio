
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
            <div className="w-80 h-80 bg-gradient-to-br from-portfolio-blue to-blue-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center relative">
                {/* Anime Girl Character */}
                <div className="relative w-48 h-48">
                  {/* Computer Screen */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gray-800 rounded-t-lg border-2 border-gray-700">
                    <div className="w-full h-14 bg-blue-400 rounded-t-md relative overflow-hidden">
                      <div className="absolute inset-2 bg-blue-300 rounded opacity-50"></div>
                      <div className="absolute top-2 left-2 w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="absolute top-2 left-6 w-8 h-1 bg-white opacity-60 rounded"></div>
                      <div className="absolute top-5 left-2 w-12 h-1 bg-white opacity-40 rounded"></div>
                    </div>
                    <div className="w-full h-4 bg-gray-600"></div>
                  </div>
                  
                  {/* Girl Character */}
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                    {/* Body */}
                    <div className="w-16 h-20 bg-purple-400 rounded-t-full relative">
                      {/* Arms */}
                      <div className="absolute -left-3 top-4 w-6 h-12 bg-purple-400 rounded-full transform rotate-12"></div>
                      <div className="absolute -right-3 top-4 w-6 h-12 bg-purple-400 rounded-full transform -rotate-12"></div>
                      
                      {/* Head */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-pink-200 rounded-full">
                        {/* Hair */}
                        <div className="absolute -top-2 -left-1 w-14 h-10 bg-brown-600 rounded-full" style={{backgroundColor: '#8B4513'}}></div>
                        <div className="absolute -top-1 left-2 w-8 h-6 bg-brown-600 rounded-full" style={{backgroundColor: '#8B4513'}}></div>
                        
                        {/* Glasses */}
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-4 border-2 border-gray-800 rounded-full bg-white bg-opacity-20">
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border border-gray-800 rounded-full bg-white bg-opacity-30"></div>
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border border-gray-800 rounded-full bg-white bg-opacity-30"></div>
                        </div>
                        
                        {/* Eyes */}
                        <div className="absolute top-4 left-2 w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                        <div className="absolute top-4 right-2 w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                        
                        {/* Mouth */}
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Code lines floating around */}
                  <div className="absolute top-4 left-4 text-xs text-portfolio-blue opacity-60 font-mono">{'<div>'}</div>
                  <div className="absolute top-8 right-6 text-xs text-green-500 opacity-60 font-mono">{'}'}</div>
                  <div className="absolute bottom-32 right-4 text-xs text-purple-500 opacity-60 font-mono">{'React'}</div>
                  <div className="absolute top-12 left-8 text-xs text-orange-500 opacity-60 font-mono">{'JS'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
