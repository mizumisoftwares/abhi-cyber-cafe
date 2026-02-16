import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Send, 
  User, 
  Mail, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 63939 43455', href: 'tel:+916393943455' },
    { icon: Mail, label: 'Email', value: 'cybercafeabhi65@gmail.com', href: 'mailto:cybercafeabhi65@gmail.com' },
    { icon: MapPin, label: 'Address', value: 'Near Chiraigaon Block, Varanasi - 221112, Uttar Pradesh', href: '#' },
    { icon: Clock, label: 'Working Hours', value: 'Monday - Sunday: 8:00 AM - 8:00 PM', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'from-blue-600 to-blue-700' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'from-pink-500 to-purple-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'from-blue-400 to-blue-500' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'from-red-500 to-red-600' },
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
              <span className="text-cyan-400 text-sm font-medium">Get in Touch</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Contact{' '}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Us
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Have questions or need assistance? We&apos;re here to help! Reach out to us through 
              any of the channels below or fill out the contact form.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-2">Send us a Message</h2>
                <p className="text-gray-400 mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-12 h-12 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Name *</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                            placeholder="Your name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Message *</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500 group-hover:to-blue-600 transition-all">
                        <Icon className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">{info.label}</p>
                        <p className="text-white font-semibold text-lg">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-white font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg`}
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/+916393943455?text=Hello%20Abhi%20Cyber%20Cafe%20Team!"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-shadow"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Find Us on{' '}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Map
              </span>
            </h2>
            <p className="text-gray-400">Visit us at our location in Chiraigaon Block, Varanasi</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.789123456789!2d83.12345678901234!3d25.34567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIwJzQ0LjQiTiA4M8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
