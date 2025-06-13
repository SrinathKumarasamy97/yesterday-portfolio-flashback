
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: "AccuFlow Pro",
      description: "Advanced flow control system with real-time monitoring and precision adjustment capabilities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Flow Control"
    },
    {
      id: 2,
      title: "DataSync Enterprise",
      description: "Comprehensive data synchronization platform for large-scale enterprise operations.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: "Data Management"
    },
    {
      id: 3,
      title: "SafeGuard Monitor",
      description: "24/7 security monitoring system with AI-powered threat detection and response.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "Security"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our flagship solutions designed to transform your operations and drive success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/products/${product.id}`}>
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Button asChild size="lg">
            <Link to="/products">
              View All Products <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
