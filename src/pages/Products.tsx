
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Flow Control', 'Data Management', 'Security', 'Automation', 'Monitoring'];

  const products = [
    {
      id: 1,
      title: "AccuFlow Pro",
      description: "Advanced flow control system with real-time monitoring and precision adjustment capabilities for industrial applications.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Flow Control",
      price: "Starting at $15,000",
      features: ["Real-time monitoring", "Precision control", "IoT enabled"]
    },
    {
      id: 2,
      title: "DataSync Enterprise",
      description: "Comprehensive data synchronization platform for large-scale enterprise operations with advanced analytics.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: "Data Management",
      price: "Starting at $25,000",
      features: ["Real-time sync", "Advanced analytics", "Cloud integration"]
    },
    {
      id: 3,
      title: "SafeGuard Monitor",
      description: "24/7 security monitoring system with AI-powered threat detection and automated response capabilities.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "Security",
      price: "Starting at $12,000",
      features: ["AI threat detection", "24/7 monitoring", "Automated response"]
    },
    {
      id: 4,
      title: "AutoFlow Controller",
      description: "Intelligent automation system for process optimization and workflow management in manufacturing.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      category: "Automation",
      price: "Starting at $20,000",
      features: ["Process automation", "Workflow optimization", "Predictive maintenance"]
    },
    {
      id: 5,
      title: "Process Optimizer",
      description: "Advanced process optimization suite with machine learning capabilities for maximum efficiency.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Automation",
      price: "Starting at $30,000",
      features: ["ML optimization", "Efficiency analysis", "Performance tracking"]
    },
    {
      id: 6,
      title: "SensorNet Hub",
      description: "Comprehensive sensor network management system for industrial IoT monitoring and control.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop",
      category: "Monitoring",
      price: "Starting at $8,000",
      features: ["IoT integration", "Sensor management", "Data visualization"]
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of precision solutions designed to transform your operations and drive innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="default">{product.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                    <div className="text-lg font-semibold text-primary">
                      {product.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link to={`/products/${product.id}`}>
                        View Details <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
