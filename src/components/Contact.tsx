
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's work together
              </h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're a fellow developer 
                wanting to collaborate, I'd love to hear from you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="text-primary mr-4" size={20} />
                  <span className="text-foreground">alex@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary mr-4" size={20} />
                  <span className="text-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary mr-4" size={20} />
                  <span className="text-foreground">San Francisco, CA</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  className="bg-card border border-border p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="bg-card border border-border p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  className="bg-card border border-border p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-card-foreground font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-card-foreground font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-card-foreground font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 Alex Developer. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
