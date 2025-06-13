
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'CSS/SCSS', level: 92 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'Next.js', level: 87 },
    { name: 'Git', level: 90 },
  ];

  const tools = [
    'Figma', 'Adobe XD', 'VS Code', 'Webpack', 'Vite', 'Docker', 'AWS', 'Firebase'
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Skills & Technologies
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools & Platforms */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">Tools & Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={tool}
                    className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-card-foreground font-medium">{tool}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-card border border-border rounded-xl">
                <h4 className="text-lg font-semibold text-card-foreground mb-3">What I Bring</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 5+ years of frontend development experience</li>
                  <li>• Strong focus on user experience and accessibility</li>
                  <li>• Agile development and team collaboration</li>
                  <li>• Continuous learning and adaptation to new technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
