import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const DraggableServiceCard = ({ 
  service, 
  index, 
  initialPosition, 
  onPositionChange,
  containerRef 
}) => {
  const cardRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  
  const x = useMotionValue(initialPosition.x);
  const y = useMotionValue(initialPosition.y);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  // 3D tilt effect based on mouse position
  const rotateX = useTransform(ySpring, [-150, 150], [10, -10]);
  const rotateY = useTransform(xSpring, [-150, 150], [-10, 10]);

  useEffect(() => {
    setPosition(initialPosition);
    x.set(initialPosition.x);
    y.set(initialPosition.y);
  }, [initialPosition]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const newPosition = {
      x: position.x + info.offset.x,
      y: position.y + info.offset.y,
    };
    setPosition(newPosition);
    onPositionChange(index, newPosition);
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      drag
      dragMomentum={false}
      dragConstraints={containerRef}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        x: xSpring,
        y: ySpring,
        rotateX,
        rotateY,
        zIndex: isDragging ? 100 : 10,
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.4)',
      }}
      whileDrag={{ 
        scale: 1.1,
        cursor: 'grabbing',
        boxShadow: '0 35px 60px -12px rgba(6, 182, 212, 0.6)',
      }}
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      }}
      className="absolute cursor-grab active:cursor-grabbing"
    >
      <div 
        className={`
          w-64 p-6 rounded-2xl backdrop-blur-xl
          bg-gradient-to-br from-gray-900/90 to-black/90
          border border-cyan-500/30
          shadow-xl shadow-cyan-500/10
          transition-all duration-300
          ${isDragging ? 'border-cyan-400 shadow-cyan-500/40' : ''}
        `}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Icon */}
        <motion.div 
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{service.description}</p>

        {/* Price Tag */}
        <div className="flex items-center justify-between">
          <span className="text-cyan-400 font-semibold">{service.price}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-500/30 transition-colors"
          >
            Explore
          </motion.button>
        </div>

        {/* Drag Handle Indicator */}
        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
          <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </div>

        {/* 3D Shine Effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)',
          }}
        />
      </div>
    </motion.div>
  );
};

export default DraggableServiceCard;
