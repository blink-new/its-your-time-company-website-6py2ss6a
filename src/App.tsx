import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Code, 
  Brain, 
  Palette, 
  BarChart3, 
  Users, 
  Award, 
  MessageCircle,
  Star,
  CheckCircle,
  Zap,
  Globe,
  Smartphone,
  Database,
  Shield,
  Clock,
  TrendingUp
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: Brain,
      title: "AI Tools & Solutions",
      description: "Custom AI applications, machine learning models, and intelligent automation systems that transform your business operations.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: Code,
      title: "Agentic Frameworks",
      description: "Advanced autonomous agent systems that can reason, plan, and execute complex tasks with minimal human intervention.",
      features: ["Multi-Agent Systems", "Autonomous Decision Making", "Task Orchestration", "Intelligent Workflows"]
    },
    {
      icon: Palette,
      title: "Web Design & Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies and exceptional user experience.",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimization", "Performance Tuning"]
    },
    {
      icon: BarChart3,
      title: "Dashboard & Analytics",
      description: "Interactive dashboards and data visualization tools that provide actionable insights for data-driven decision making.",
      features: ["Real-time Analytics", "Custom Visualizations", "Business Intelligence", "Data Integration"]
    }
  ];

  const portfolio = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "Intelligent recommendation system increasing sales by 40%",
      tech: ["React", "Python", "TensorFlow", "AWS"],
      category: "AI Tools"
    },
    {
      title: "Multi-Agent Task Management System",
      description: "Autonomous agents coordinating complex project workflows",
      tech: ["Node.js", "LangChain", "PostgreSQL", "Docker"],
      category: "Agentic Frameworks"
    },
    {
      title: "Modern SaaS Dashboard",
      description: "Real-time analytics platform for enterprise clients",
      tech: ["Next.js", "TypeScript", "D3.js", "Tailwind"],
      category: "Dashboard"
    },
    {
      title: "Responsive Corporate Website",
      description: "High-converting website with 95+ PageSpeed score",
      tech: ["React", "Gatsby", "GraphQL", "Netlify"],
      category: "Web Design"
    }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Lead AI Engineer",
      expertise: "Machine Learning, Deep Learning, Computer Vision",
      experience: "8+ years"
    },
    {
      name: "Sarah Chen",
      role: "Full-Stack Developer",
      expertise: "React, Node.js, Cloud Architecture",
      experience: "6+ years"
    },
    {
      name: "Marcus Johnson",
      role: "UX/UI Designer",
      expertise: "User Experience, Interface Design, Prototyping",
      experience: "7+ years"
    },
    {
      name: "Elena Petrov",
      role: "Data Scientist",
      expertise: "Analytics, Visualization, Business Intelligence",
      experience: "5+ years"
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Its Your Time delivered an exceptional AI solution that transformed our customer service. The autonomous agents handle 80% of inquiries with remarkable accuracy.",
      rating: 5
    },
    {
      name: "Maria Santos",
      company: "Digital Innovations Ltd",
      role: "Product Manager",
      content: "The dashboard they built provides incredible insights into our business metrics. The real-time analytics have been game-changing for our decision-making process.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "StartupX",
      role: "Founder",
      content: "From concept to deployment, the team exceeded our expectations. The web application is fast, beautiful, and exactly what we envisioned.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Its Your Time
                </h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">Services</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-primary transition-colors">Portfolio</button>
                <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-primary transition-colors">Team</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors">Contact</button>
              </div>
            </div>

            <div className="hidden md:block">
              <Button 
                onClick={() => window.open('https://wa.me/351933536442', '_blank')}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-primary">Home</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-primary">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="block px-3 py-2 text-gray-700 hover:text-primary">Portfolio</button>
              <button onClick={() => scrollToSection('team')} className="block px-3 py-2 text-gray-700 hover:text-primary">Team</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => window.open('https://wa.me/351933536442', '_blank')}
                  className="w-full bg-gradient-to-r from-primary to-accent"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-accent/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%236366f1%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              🚀 Transforming Ideas into Reality
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              It's{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your Time
              </span>
              <br />
              to Innovate
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Leading software engineering company specializing in AI tools, agentic frameworks, 
              web design, and dashboard development. Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/351933536442', '_blank')}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg px-8 py-6"
              >
                Start Your Project
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full opacity-20"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Expertise</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Software Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered applications to stunning web designs, we deliver end-to-end solutions 
              that drive business growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                    onClick={() => window.open('https://wa.me/351933536442', '_blank')}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Our Work</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Portfolio Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our recent projects that showcase our expertise in delivering 
              innovative solutions across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-700">{project.category}</Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open('https://wa.me/351933536442', '_blank')}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Client Success</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Our Team</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of skilled professionals brings together years of experience 
              in cutting-edge technologies and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n.charAt(0)).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.expertise}</p>
                  <Badge variant="secondary" className="text-xs">
                    {member.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">
            Ready to Start?
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Contact us today and let's discuss 
            how we can help you achieve your business goals with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/351933536442', '_blank')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg px-8 py-6"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start WhatsApp Chat
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('mailto:hello@itsyourtime.dev', '_blank')}
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-gray-900"
            >
              Send Email
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
              <p className="text-gray-300">We respond to all inquiries within 24 hours</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Partner</h3>
              <p className="text-gray-300">Reliable, secure, and professional service</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-300">Track record of successful project delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Its Your Time
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Leading software engineering company specializing in AI tools, agentic frameworks, 
                web design, and dashboard development.
              </p>
              <div className="flex space-x-4">
                <Button 
                  size="sm"
                  onClick={() => window.open('https://wa.me/351933536442', '_blank')}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Tools & Solutions</li>
                <li>Agentic Frameworks</li>
                <li>Web Design & Development</li>
                <li>Dashboard & Analytics</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Its Your Time. All rights reserved. Built with passion for innovation.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          onClick={() => window.open('https://wa.me/351933536442', '_blank')}
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </Button>
      </div>
    </div>
  );
}

export default App;