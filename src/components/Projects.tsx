
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Analytics Dashboard",
      description: "Built a comprehensive dashboard to track sales performance and customer behavior patterns.",
      tech: ["React", "Python", "PostgreSQL", "Chart.js"],
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      title: "Task Management Web App",
      description: "Developed a collaborative task management platform with real-time updates and team features.",
      tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      title: "Student Performance Predictor",
      description: "Created a machine learning model to predict student academic outcomes using historical data.",
      tech: ["Python", "Pandas", "Scikit-learn", "Flask"],
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      title: "Weather Data Visualization",
      description: "Built an interactive web application to visualize climate patterns and weather trends.",
      tech: ["React", "D3.js", "Express", "Weather API"],
      liveDemo: "#",
      sourceCode: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-portfolio-light">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-portfolio-navy mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my work in web development and data analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="animate-fade-in hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-portfolio-navy">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-portfolio-blue/10 text-portfolio-blue border-portfolio-blue/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
                    asChild
                  >
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="flex-1 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
                    asChild
                  >
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
