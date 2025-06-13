
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, CheckCircle, Star } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const products = {
    '1': {
      id: 1,
      title: "IoT Flow Sensors",
      price: "$2,499",
      image: "/placeholder.svg",
      category: "Flow Control",
      description: "Advanced IoT-enabled flow sensors with real-time monitoring capabilities, wireless connectivity, and precision measurement for industrial applications.",
      features: [
        "Real-time wireless data transmission",
        "±0.5% accuracy measurement",
        "Battery life up to 5 years",
        "IP67 waterproof rating",
        "Cloud-based analytics dashboard",
        "Predictive maintenance alerts"
      ],
      specifications: {
        "Flow Range": "0.1 - 1000 L/min",
        "Pressure Rating": "Up to 16 bar",
        "Temperature Range": "-40°C to +85°C",
        "Communication": "LoRaWAN, NB-IoT, WiFi",
        "Power Supply": "3.6V Lithium battery",
        "Material": "Stainless steel 316L"
      },
      applications: [
        "Water distribution networks",
        "Chemical processing",
        "HVAC systems",
        "Industrial automation"
      ]
    },
    '2': {
      id: 2,
      title: "Smart Pressure Monitors",
      price: "$1,899",
      image: "/placeholder.svg",
      category: "Pressure Control",
      description: "Intelligent pressure monitoring systems with IoT connectivity for continuous monitoring and automated control in critical industrial processes.",
      features: [
        "24/7 continuous monitoring",
        "Automatic pressure regulation",
        "Mobile app integration",
        "Multi-point calibration",
        "Emergency shutdown capability",
        "Historical data logging"
      ],
      specifications: {
        "Pressure Range": "0 - 1000 bar",
        "Accuracy": "±0.25% of full scale",
        "Response Time": "< 1ms",
        "Communication": "Ethernet, Modbus, HART",
        "Display": "4.3'' color touchscreen",
        "Certification": "ATEX, SIL2"
      },
      applications: [
        "Oil & gas pipelines",
        "Power generation",
        "Pharmaceutical manufacturing",
        "Food & beverage processing"
      ]
    },
    '3': {
      id: 3,
      title: "Data Analytics Platform",
      price: "$4,999",
      image: "/placeholder.svg",
      category: "Software",
      description: "Comprehensive data analytics platform that aggregates sensor data, provides real-time insights, and enables predictive maintenance for industrial IoT systems.",
      features: [
        "Real-time data visualization",
        "Predictive analytics engine",
        "Custom dashboard creation",
        "API integration support",
        "Machine learning algorithms",
        "Multi-tenant architecture"
      ],
      specifications: {
        "Data Sources": "Unlimited sensor connections",
        "Update Frequency": "Real-time (< 100ms)",
        "Storage": "Cloud-based, scalable",
        "APIs": "RESTful, GraphQL",
        "Security": "AES-256 encryption",
        "Deployment": "Cloud, On-premise, Hybrid"
      },
      applications: [
        "Smart manufacturing",
        "Environmental monitoring",
        "Energy management",
        "Supply chain optimization"
      ]
    }
  };

  const productId = id as keyof typeof products;
  const product = products[productId];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">
            Return to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <Link 
            to="/products" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-4">
                <span className="text-sm text-primary font-semibold">{product.category}</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-xl text-primary font-bold mb-6">{product.price}</p>
              <p className="text-muted-foreground mb-8">{product.description}</p>
              
              <div className="flex items-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">(4.8/5 - 127 reviews)</span>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Request Quote
              </motion.button>
            </motion.div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card p-6 rounded-lg border"
              >
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Specifications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card p-6 rounded-lg border"
              >
                <h3 className="text-xl font-bold mb-4">Specifications</h3>
                <dl className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm font-semibold text-muted-foreground">{key}</dt>
                      <dd className="text-sm">{value}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>

              {/* Applications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-card p-6 rounded-lg border"
              >
                <h3 className="text-xl font-bold mb-4">Applications</h3>
                <ul className="space-y-3">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm">{application}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
