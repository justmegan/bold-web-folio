
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-portfolio-light">
      <div className="container-max section-padding text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-portfolio-navy mb-6">
            Hi, I'm <span className="text-portfolio-blue">Mega Putri Aulia</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            CS undergrad building smart web apps & data-driven insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              className="bg-portfolio-blue hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </Button>
            
            <div className="flex space-x-4">
              <a
                href="mailto:megaputriauliaindo@gmail.com"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-portfolio-blue" />
              </a>
              
              <a
                href="https://github.com/justmegan"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-portfolio-blue" />
              </a>
              
              <a
                href="https://linkedin.com/in/megapaulia"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-portfolio-blue" />
              </a>
            </div>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-portfolio-blue mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
