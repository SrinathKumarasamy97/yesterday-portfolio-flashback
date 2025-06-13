
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Precision Solutions for
              <span className="text-primary block">Modern Industry</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
          >
            Accurite Systems delivers cutting-edge technology solutions that drive efficiency, 
            accuracy, and innovation across industries worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/products">
                Explore Products <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link to="/about">Learn More</Link>
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Reliable & Secure</h3>
              <p className="text-muted-foreground">Industry-leading security and reliability standards</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">High Performance</h3>
              <p className="text-muted-foreground">Optimized for maximum efficiency and speed</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Precision Focused</h3>
              <p className="text-muted-foreground">Accurate solutions tailored to your needs</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
