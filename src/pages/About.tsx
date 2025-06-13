
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, Globe, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver solutions with unmatched accuracy and reliability, ensuring optimal performance in every implementation."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously pushing the boundaries of technology to create cutting-edge solutions for tomorrow's challenges."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships with our clients through exceptional service and collaborative problem-solving."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining the highest standards of ethics, transparency, and accountability in all our business practices."
    }
  ];

  const team = [
    {
      name: "Dr. Alex Johnson",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "15+ years in industrial automation with PhD in Control Systems Engineering."
    },
    {
      name: "Sarah Martinez",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b3fd?w=300&h=300&fit=crop&crop=face",
      bio: "Former software architect at Fortune 500 companies, expert in enterprise solutions."
    },
    {
      name: "Michael Chen",
      position: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "20+ years developing precision control systems for aerospace and manufacturing."
    },
    {
      name: "Emily Rodriguez",
      position: "VP of Sales",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Global sales leader with extensive experience in B2B technology solutions."
    }
  ];

  const milestones = [
    { year: "2009", event: "Company Founded", description: "Started with a vision to revolutionize industrial automation" },
    { year: "2012", event: "First Major Contract", description: "Secured partnership with leading manufacturing company" },
    { year: "2015", event: "International Expansion", description: "Opened offices in Europe and Asia" },
    { year: "2018", event: "500+ Clients Milestone", description: "Reached 500 satisfied customers worldwide" },
    { year: "2021", event: "AI Integration", description: "Launched AI-powered solutions and predictive analytics" },
    { year: "2024", event: "Sustainability Focus", description: "Committed to carbon-neutral operations and green technology" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Accurite Systems
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over 15 years, we've been at the forefront of precision technology, delivering innovative solutions that transform industries and drive success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-primary mb-6" />
                  <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To empower industries worldwide with precision technology solutions that enhance efficiency, 
                    ensure reliability, and drive innovation. We are committed to delivering excellence in every 
                    product and service we provide.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <Globe className="w-12 h-12 text-primary mb-6" />
                  <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To be the global leader in precision technology solutions, recognized for our innovation, 
                    reliability, and commitment to customer success. We envision a future where our 
                    solutions enable seamless, efficient, and sustainable operations across all industries.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the visionaries and experts who drive our company's success and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-primary mb-2">{milestone.year}</h3>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{milestone.event}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
