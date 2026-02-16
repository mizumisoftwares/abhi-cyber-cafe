import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award, 
  Users, 
  Star, 
  CheckCircle,
  Target,
  Heart,
  Zap,
  Shield
} from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '5+', label: 'Years of Experience', icon: Award },
    { value: '1000+', label: 'Happy Customers', icon: Users },
    { value: '50+', label: 'Services Offered', icon: Star },
    { value: '99%', label: 'Customer Satisfaction', icon: Heart },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide accessible, affordable, and high-quality digital services to everyone in our community.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the most trusted cyber cafe in Varanasi, known for excellence and customer satisfaction.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Our Values',
      description: 'Integrity, customer-first approach, innovation, and commitment to quality in everything we do.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const milestones = [
    { year: '2020', event: 'Abhi Cyber Cafe Founded' },
    { year: '2021', event: 'Expanded Services to 25+' },
    { year: '2022', event: 'Reached 500+ Customers' },
    { year: '2023', event: 'Upgraded to High-Speed Internet' },
    { year: '2024', event: 'Launched Government Document Services' },
    { year: '2025', event: '1000+ Happy Customers' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
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
              <span className="text-cyan-400 text-sm font-medium">About Us</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Know More About{' '}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Abhi Cyber Cafe
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Your trusted digital partner in Chiraigaon Block, Varanasi. We&apos;ve been serving 
              our community with dedication and excellence since 2020.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Our{' '}
                </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>

              <div className="space-y-4 text-gray-400">
                <p>
                  Abhi Cyber Cafe was founded in 2020 by Abhishek Yadav, a passionate Full Stack Web Developer 
                  with a vision to bridge the digital divide in his community. What started as a small internet 
                  cafe has now grown into a comprehensive digital service center.
                </p>
                <p>
                  Located in Chiraigaon Block, Varanasi, we understand the needs of our local community. 
                  We&apos;ve helped thousands of customers with their digital needs, from simple internet browsing 
                  to complex government document applications.
                </p>
                <p>
                  Our commitment to quality service, affordable pricing, and customer satisfaction has made us 
                  one of the most trusted cyber cafes in the region. We continuously upgrade our infrastructure 
                  and expand our services to meet the evolving needs of our customers.
                </p>
              </div>

              {/* Owner Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold text-white">
                    AY
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Abhishek Yadav</h4>
                    <p className="text-cyan-400 text-sm">Founder & Full Stack Developer</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Our Journey</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-20 text-cyan-400 font-bold">{milestone.year}</div>
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
                    <div className="flex-1 text-gray-400">{milestone.event}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Our{' '}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 hover:border-cyan-500/30 transition-all"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/30"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: MapPin, label: 'Address', value: 'Chiraigaon Block, Varanasi - 221112' },
                { icon: Phone, label: 'Phone', value: '+91 63939 43455' },
                { icon: Mail, label: 'Email', value: 'cybercafeabhi65@gmail.com' },
                { icon: Clock, label: 'Hours', value: 'Mon-Sun: 8AM - 8PM' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

// Eye icon component
function Eye({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

export default About;
