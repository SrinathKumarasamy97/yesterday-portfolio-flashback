
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Star, Download, Phone } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();

  // Mock product data - in a real app, this would come from an API
  const products = {
    1: {
      title: "AccuFlow Pro",
      description: "Advanced flow control system with real-time monitoring and precision adjustment capabilities for industrial applications.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      category: "Flow Control",
      price: "Starting at $15,000",
      rating: 4.8,
      reviews: 127,
      features: [
        "Real-time flow monitoring with precision sensors",
        "Advanced control algorithms for optimal performance",
        "IoT connectivity for remote monitoring",
        "Predictive maintenance capabilities",
        "Energy efficiency optimization",
        "24/7 technical support included"
      ],
      specifications: {
        "Flow Range": "0.1 - 1000 GPM",
        "Accuracy": "±0.1%",
        "Pressure Rating": "Up to 1500 PSI",
        "Temperature Range": "-40°C to +120°C",
        "Communication": "Modbus, Ethernet/IP, HART",
        "Power Supply": "24V DC, 85-264V AC"
      },
      applications: [
        "Chemical Processing",
        "Oil & Gas",
        "Water Treatment",
        "Food & Beverage",
        "Pharmaceutical"
      ]
    },
    2: {
      title: "DataSync Enterprise",
      description: "Comprehensive data synchronization platform for large-scale enterprise operations with advanced analytics.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      category: "Data Management",
      price: "Starting at $25,000",
      rating: 4.9,
      reviews: 89,
      features: [
        "Real-time data synchronization across systems",
        "Advanced analytics and reporting",
        "Cloud and on-premise deployment options",
        "API integration capabilities",
        "Data transformation and cleansing",
        "Enterprise-grade security"
      ],
      specifications: {
        "Data Throughput": "Up to 1TB/hour",
        "Supported Formats": "JSON, XML, CSV, Parquet",
        "Databases": "SQL Server, Oracle, MySQL, PostgreSQL",
        "Cloud Platforms": "AWS, Azure, Google Cloud",
        "Security": "AES-256 encryption, OAuth 2.0",
        "SLA": "99.9% uptime guarantee"
      },
      applications: [
        "Enterprise Resource Planning",
        "Customer Relationship Management",
        "Business Intelligence",
        "Data Warehousing",
        "Analytics Platforms"
      ]
    },
    3: {
      title: "SafeGuard Monitor",
      description: "24/7 security monitoring system with AI-powered threat detection and automated response capabilities.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      category: "Security",
      price: "Starting at $12,000",
      rating: 4.7,
      reviews: 203,
      features: [
        "AI-powered threat detection and analysis",
        "24/7 automated monitoring",
        "Instant alert notifications",
        "Automated response protocols",
        "Comprehensive audit logging",
        "Integration with existing security systems"
      ],
      specifications: {
        "Detection Rate": "99.7% accuracy",
        "Response Time": "< 30 seconds",
        "Supported Protocols": "SNMP, Syslog, REST API",
        "Storage": "Up to 10TB log retention",
        "Alerts": "Email, SMS, Webhook",
        "Compliance": "SOC 2, ISO 27001"
      },
      applications: [
        "Network Security",
        "Perimeter Protection",
        "Incident Response",
        "Compliance Monitoring",
        "Threat Intelligence"
      ]
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2" size={16} />
              Back to Products
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" size="sm">
              <Link to="/products">
                <ArrowLeft className="mr-2" size={16} />
                Back to Products
              </Link>
            </Button>
          </motion.div>

          {/* Product Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            <div>
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">{product.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {product.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="text-3xl font-bold text-primary">
                {product.price}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  <Phone className="mr-2" size={20} />
                  Request Quote
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Download className="mr-2" size={20} />
                  Download Brochure
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Product Details Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                    <CardDescription>
                      Comprehensive features designed for optimal performance and reliability.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="specifications" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Specifications</CardTitle>
                    <CardDescription>
                      Detailed technical specifications and performance parameters.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="border-b border-border pb-3 last:border-b-0">
                          <dt className="font-semibold text-foreground">{key}</dt>
                          <dd className="text-muted-foreground mt-1">{value}</dd>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="applications" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Applications & Industries</CardTitle>
                    <CardDescription>
                      Perfect for a wide range of industries and applications.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {product.applications.map((application, index) => (
                        <div key={index} className="bg-secondary/20 rounded-lg p-4 text-center">
                          <span className="font-medium text-foreground">{application}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
