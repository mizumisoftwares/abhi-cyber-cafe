import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
    </motion.div>
  );
};

export default Home;
