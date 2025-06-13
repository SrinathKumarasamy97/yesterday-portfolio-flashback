import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Star, Users, Globe, Award } from 'lucide-react';

const Customers = () => {
  const customers = [
    {
      name: "TechFlow Industries",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      industry: "Manufacturing",
      description: "Leading manufacturer implementing our flow control systems across 15 facilities worldwide.",
      testimonial: "Accurite Systems transformed our operations with 40% efficiency improvement.",
      contact: "Sarah Chen, CTO"
    },
    {
      name: "Global Manufacturing Co.",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop",
      industry: "Industrial",
      description: "Fortune 500 company using our enterprise data management solutions.",
      testimonial: "Their support team is exceptional, reducing our downtime by 90%.",
      contact: "Michael Rodriguez, Operations Director"
    },
    {
      name: "Healthcare Solutions Inc.",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop",
      industry: "Healthcare",
      description: "Healthcare provider utilizing our security monitoring systems for patient data protection.",
      testimonial: "Complete peace of mind with their security features and monitoring capabilities.",
      contact: "Emily Johnson, Head of IT"
    },
    {
      name: "Energy Dynamics Corp",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop",
      industry: "Energy",
      description: "Renewable energy company optimizing operations with our automation solutions.",
      testimonial: "Increased productivity by 35% while reducing operational costs significantly.",
      contact: "David Park, Engineering Manager"
    },
    {
      name: "Precision Aerospace",
      logo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=100&fit=crop",
      industry: "Aerospace",
      description: "Aerospace manufacturer ensuring quality with our precision monitoring systems.",
      testimonial: "Critical for maintaining our zero-defect manufacturing standards.",
      contact: "Maria Gonzalez, Quality Director"
    },
    {
      name: "Smart Cities Initiative",
      logo: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&h=100&fit=crop",
      industry: "Government",
      description: "Municipal government implementing smart infrastructure solutions.",
      testimonial: "Enabling our vision of a truly connected and efficient smart city.",
      contact: "Robert Kim, Smart City Coordinator"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Global Clients" },
    { icon: Globe, number: "50+", label: "Countries Served" },
    { icon: Award, number: "99.9%", label: "Client Satisfaction" },
    { icon: Star, number: "4.8/5", label: "Average Rating" }
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
              Our Customers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by industry leaders worldwide. See how our solutions are transforming businesses across various sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how companies across industries are achieving remarkable results with our solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={customer.logo} 
                        alt={customer.name}
                        className="w-16 h-8 object-cover rounded mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">{customer.name}</h3>
                        <p className="text-sm text-muted-foreground">{customer.industry}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm">
                      {customer.description}
                    </p>
                    
                    <blockquote className="border-l-4 border-primary pl-4 mb-4">
                      <p className="italic text-foreground">"{customer.testimonial}"</p>
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">
                        - {customer.contact}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our solutions are trusted across diverse industries worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Manufacturing', 'Healthcare', 'Energy', 'Aerospace', 'Automotive', 'Government'].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="font-semibold text-foreground">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Customers;
