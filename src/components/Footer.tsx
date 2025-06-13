
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Accurite Systems</h3>
            <p className="text-primary-foreground/80 mb-6">
              Leading provider of precision technology solutions for modern industry.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-6 h-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
              <Github className="w-6 h-6 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Products</Link></li>
              <li><Link to="/customers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Customers</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><span className="text-primary-foreground/80">AccuFlow Pro</span></li>
              <li><span className="text-primary-foreground/80">DataSync Enterprise</span></li>
              <li><span className="text-primary-foreground/80">SafeGuard Monitor</span></li>
              <li><span className="text-primary-foreground/80">Process Optimizer</span></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span className="text-primary-foreground/80">info@accuritesystems.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span className="text-primary-foreground/80">123 Innovation Drive, Tech Valley, CA 94043</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Accurite Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
