import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  PenTool
} from 'lucide-react';
import DraggableServiceCard from './DraggableServiceCard';

const services = [
  {
    id: 1,
    title: 'AAY / Ration Card',
    description: 'Apply for Antyodaya Anna Yojana and ration card services.',
    price: '₹50',
    icon: CreditCard,
  },
  {
    id: 2,
    title: 'Jati Niwas / Caste',
    description: 'Caste certificate application and verification services.',
    price: '₹100',
    icon: FileText,
  },
  {
    id: 3,
    title: 'Printing & Scanning',
    description: 'High-quality color and black & white printing services.',
    price: '₹5/page',
    icon: Printer,
  },
  {
    id: 4,
    title: 'Document Scanning',
    description: 'Digital scanning of all types of documents.',
    price: '₹10/doc',
    icon: Scan,
  },
  {
    id: 5,
    title: 'High-Speed Internet',
    description: 'Fast and reliable internet browsing and downloads.',
    price: '₹20/hr',
    icon: Globe,
  },
  {
    id: 6,
    title: 'Gaming Stations',
    description: 'High-performance gaming PCs with latest games.',
    price: '₹30/hr',
    icon: Monitor,
  },
  {
    id: 7,
    title: 'Project Files',
    description: 'Custom project file creation and binding.',
    price: '₹200+',
    icon: FolderOpen,
  },
  {
    id: 8,
    title: 'Online Forms',
    description: 'Help with all types of government online forms.',
    price: '₹50+',
    icon: Building2,
  },
  {
    id: 9,
    title: 'Video Conferencing',
    description: 'Private booths for online meetings and interviews.',
    price: '₹40/hr',
    icon: Video,
  },
  {
    id: 10,
    title: 'Typing Services',
    description: 'Professional typing in Hindi and English.',
    price: '₹20/page',
    icon: PenTool,
  },
  {
    id: 11,
    title: 'Study Materials',
    description: 'Print and bind study notes and materials.',
    price: '₹100+',
    icon: GraduationCap,
  },
  {
    id: 12,
    title: 'Refreshments',
    description: 'Tea, coffee, and snacks available.',
    price: '₹20+',
    icon: Coffee,
  },
];

const ServicesSection = () => {
  const containerRef = useRef(null);
  const [cardPositions, setCardPositions] = useState({});
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setContainerSize({ width, height });
      
      // Initialize positions in a grid layout
      const cols = Math.floor(width / 280);
      const initialPositions = {};
      services.forEach((_, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        initialPositions[index] = {
          x: col * 280 + 20,
          y: row * 220 + 20,
        };
      });
      setCardPositions(initialPositions);
    }
  }, []);

  const handlePositionChange = (index, newPosition) => {
    setCardPositions(prev => ({
      ...prev,
      [index]: newPosition,
    }));
  };

  const resetPositions = () => {
    if (containerRef.current) {
      const { width } = containerRef.current.getBoundingClientRect();
      const cols = Math.floor(width / 280) || 3;
      const initialPositions = {};
      services.forEach((_, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        initialPositions[index] = {
          x: col * 280 + 20,
          y: row * 220 + 20,
        };
      });
      setCardPositions(initialPositions);
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
          >
            <span className="text-cyan-400 text-sm font-medium">Drag to Rearrange</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Drag and rearrange the cards to customize your view. All services available at Abhi Cyber Cafe.
          </p>

          <motion.button
            onClick={resetPositions}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-cyan-500/30 transition-all"
          >
            Reset Layout
          </motion.button>
        </motion.div>

        {/* Draggable Cards Container */}
        <div 
          ref={containerRef}
          className="relative min-h-[900px] bg-gradient-to-br from-gray-900/30 to-black/30 rounded-3xl border border-white/5 p-8 overflow-hidden"
        >
          {/* Grid Background */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Cards */}
          {services.map((service, index) => (
            <DraggableServiceCard
              key={service.id}
              service={service}
              index={index}
              initialPosition={cardPositions[index] || { x: 20 + (index % 4) * 280, y: 20 + Math.floor(index / 4) * 220 }}
              onPositionChange={handlePositionChange}
              containerRef={containerRef}
            />
          ))}

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
            Drag cards to rearrange your view
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
