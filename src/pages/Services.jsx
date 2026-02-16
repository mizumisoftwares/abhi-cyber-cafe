import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FileText, 
  Printer, 
  Scan, 
  Coffee, 
  Monitor, 
  Video,
  FolderOpen,
  Globe,
  GraduationCap,
  CreditCard,
  Building2,
  PenTool,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'AAY / Ration Card Services',
    description: 'Complete assistance for Antyodaya Anna Yojana and ration card applications, renewals, and corrections. We handle all the paperwork and online submissions.',
    price: 'Starting from ₹50',
    icon: CreditCard,
    features: ['New Application', 'Renewal', 'Correction', 'Status Check'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 2,
    title: 'Jati Niwas / Caste Certificate',
    description: 'Hassle-free caste certificate application and verification services. Get your certificate processed quickly with our expert assistance.',
    price: 'Starting from ₹100',
    icon: FileText,
    features: ['New Certificate', 'Verification', 'Correction', 'Digital Copy'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Printing & Photocopy',
    description: 'High-quality color and black & white printing services. From documents to photos, we deliver crisp and clear prints every time.',
    price: '₹5 per page',
    icon: Printer,
    features: ['Color Printing', 'B&W Printing', 'Photo Printing', 'Bulk Orders'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Document Scanning',
    description: 'Digital scanning of all types of documents with high resolution. Get your documents in PDF, JPG, or any format you need.',
    price: '₹10 per document',
    icon: Scan,
    features: ['High Resolution', 'Multiple Formats', 'OCR Available', 'Bulk Scanning'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 5,
    title: 'High-Speed Internet',
    description: 'Experience lightning-fast internet speeds for browsing, downloading, streaming, and all your online needs.',
    price: '₹20 per hour',
    icon: Globe,
    features: ['100+ Mbps Speed', 'Unlimited Data', 'Private Booths', 'Secure Connection'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 6,
    title: 'Gaming Stations',
    description: 'High-performance gaming PCs equipped with the latest hardware and popular games for the ultimate gaming experience.',
    price: '₹30 per hour',
    icon: Monitor,
    features: ['RTX Graphics', 'Latest Games', 'Gaming Peripherals', 'Multiplayer Setup'],
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 7,
    title: 'Custom Project Files',
    description: 'Professional project file creation with custom design, binding, and printing. Perfect for students and professionals.',
    price: 'Starting from ₹200',
    icon: FolderOpen,
    features: ['Custom Design', 'Spiral Binding', 'Hard Binding', 'Lamination'],
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 8,
    title: 'Government Form Services',
    description: 'Expert help with all types of government online forms including PAN, Aadhaar, Passport, and more.',
    price: 'Starting from ₹50',
    icon: Building2,
    features: ['PAN Card', 'Aadhaar Update', 'Passport', 'Voter ID'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 9,
    title: 'Video Conferencing',
    description: 'Private booths equipped with high-quality cameras and microphones for online meetings and interviews.',
    price: '₹40 per hour',
    icon: Video,
    features: ['Private Booth', 'HD Camera', 'Noise Cancellation', 'Technical Support'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 10,
    title: 'Typing Services',
    description: 'Professional typing services in both Hindi and English. Fast, accurate, and affordable.',
    price: '₹20 per page',
    icon: PenTool,
    features: ['Hindi Typing', 'English Typing', 'Data Entry', 'Format Conversion'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 11,
    title: 'Study Materials',
    description: 'Print and bind study notes, question papers, and reference materials for students.',
    price: 'Starting from ₹100',
    icon: GraduationCap,
    features: ['Notes Printing', 'Question Papers', 'Reference Books', 'Spiral Binding'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 12,
    title: 'Refreshments',
    description: 'Enjoy tea, coffee, cold drinks, and snacks while you work or browse.',
    price: 'Starting from ₹20',
    icon: Coffee,
    features: ['Tea & Coffee', 'Cold Drinks', 'Snacks', 'Beverages'],
    color: 'from-amber-500 to-yellow-500',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Header Section */}
      <section ref={ref} className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
            >
              <span className="text-cyan-400 text-sm font-medium">What We Offer</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Our{' '}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We offer a comprehensive range of digital services to meet all your needs. 
              From government documents to gaming, we&apos;ve got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {service.price}
                      </span>
                      <motion.a
                        href="https://wa.me/+916393943455?text=Hello%20Abhi%20Cyber%20Cafe%20Team!"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Need a Custom Service?{' '}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Let&apos;s Talk!
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Contact us and we&apos;ll help you with your specific requirements.
            </p>
            <motion.a
              href="https://wa.me/+916393943455?text=Hello%20Abhi%20Cyber%20Cafe%20Team!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
