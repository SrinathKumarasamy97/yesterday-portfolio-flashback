
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate frontend developer with over 5 years of experience creating
                digital experiences that are not only beautiful but also functional and accessible.
                My journey started with a curiosity about how things work on the web, and it has
                evolved into a deep love for crafting user interfaces that people enjoy using.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, contributing to
                open-source projects, or enjoying a good cup of coffee while brainstorming the
                next big idea. I believe in continuous learning and staying updated with the
                latest technologies and best practices.
              </p>
              <div className="flex space-x-4 pt-4">
                <a 
                  href="#contact" 
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
                >
                  Let's Talk
                </a>
                <a 
                  href="/resume.pdf" 
                  className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Code className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-card-foreground">Development</h3>
                </div>
                <p className="text-muted-foreground">
                  Crafting clean, efficient, and scalable code using modern frameworks and best practices.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Palette className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-card-foreground">Design</h3>
                </div>
                <p className="text-muted-foreground">
                  Creating intuitive and visually appealing interfaces that enhance user experience.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Zap className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-card-foreground">Performance</h3>
                </div>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, accessibility, and seamless user interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
