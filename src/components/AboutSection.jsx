import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Award, Users, Star, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    { icon: CheckCircle, text: '5+ Years of Experience' },
    { icon: Users, text: '1000+ Happy Customers' },
    { icon: Award, text: 'Certified Services' },
    { icon: Star, text: '4.9/5 Customer Rating' },
  ];

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
            >
              <span className="text-cyan-400 text-sm font-medium">About Us</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Your Trusted{' '}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Digital Partner
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Abhi Cyber Cafe is a modern cyber cafe located in Chiraigaon Block, Varanasi. 
              We provide high-speed internet access, comfortable gaming stations, printing, 
              scanning, and all government document services under one roof.
            </p>

            <p className="text-gray-500 mb-8 leading-relaxed">
              Our cafe is equipped with the latest computers and a relaxing environment to 
              meet all your online needs. Whether you&apos;re a student, professional, or gamer, 
              we have something for everyone. We specialize in AAY, Jati Niwas, and other 
              government document services.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Owner Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold text-white">
                  AY
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Abhishek Yadav</h4>
                  <p className="text-cyan-400 text-sm">Owner & Full Stack Developer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="relative"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              {/* Main Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-gray-400">Near Chiraigaon Block, Varanasi - 221112, Uttar Pradesh</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-gray-400">+91 63939 43455</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-400">cybercafeabhi65@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Working Hours</h4>
                      <p className="text-gray-400">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                    </div>
                  </motion.div>
                </div>

                {/* CTA */}
                <motion.a
                  href="https://wa.me/+916393943455?text=Hello%20Abhi%20Cyber%20Cafe%20Team!"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-center block hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow"
                >
                  Get Directions
                </motion.a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
