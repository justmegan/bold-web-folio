
import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-portfolio-navy mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Open to internships & collaborations—let's chat!
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:megaputriauliaindo@gmail.com"
              className="flex items-center space-x-2 px-6 py-3 border-2 border-portfolio-blue text-portfolio-blue rounded-lg hover:bg-portfolio-blue hover:text-white transition-all duration-300 font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            
            <a
              href="https://github.com/justmegan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 border-2 border-portfolio-blue text-portfolio-blue rounded-lg hover:bg-portfolio-blue hover:text-white transition-all duration-300 font-medium"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://linkedin.com/in/megapaulia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 border-2 border-portfolio-blue text-portfolio-blue rounded-lg hover:bg-portfolio-blue hover:text-white transition-all duration-300 font-medium"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto animate-fade-in">
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-portfolio-navy text-center">
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-portfolio-navy font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-portfolio-navy font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 border-gray-300 focus:border-portfolio-blue focus:ring-portfolio-blue"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-portfolio-navy font-medium">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-portfolio-blue"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-portfolio-blue hover:bg-blue-700 text-white py-3 text-lg font-medium"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
