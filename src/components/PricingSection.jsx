import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Zap, Star, Crown } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic',
    icon: Zap,
    price: '₹20',
    period: '/hour',
    description: 'Perfect for browsing and basic tasks',
    features: [
      'High-Speed Internet',
      'Basic Browsing',
      'Email Access',
      'Document Viewing',
    ],
    color: 'from-cyan-500 to-blue-500',
    popular: false,
  },
  {
    name: 'Standard',
    icon: Star,
    price: '₹50',
    period: '/hour',
    description: 'Great for work and printing needs',
    features: [
      'Everything in Basic',
      '10 Pages Printing',
      'Document Scanning',
      'Online Forms Help',
      'Typing Services',
    ],
    color: 'from-blue-500 to-purple-500',
    popular: true,
  },
  {
    name: 'Premium',
    icon: Crown,
    price: '₹100',
    period: '/hour',
    description: 'Complete package for all needs',
    features: [
      'Everything in Standard',
      'Unlimited Printing',
      'Gaming Access',
      'Video Conferencing',
      'Project File Creation',
      'Priority Support',
    ],
    color: 'from-purple-500 to-pink-500',
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            <span className="text-cyan-400 text-sm font-medium">Pricing Plans</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Choose Your{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Plan
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Affordable pricing for all your digital needs. Select the plan that works best for you.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative rounded-3xl overflow-hidden ${
                  plan.popular ? 'md:-mt-4 md:mb-4' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 text-sm font-semibold z-10">
                    Most Popular
                  </div>
                )}

                <div
                  className={`h-full p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 border ${
                    plan.popular
                      ? 'border-cyan-500/50 shadow-xl shadow-cyan-500/20'
                      : 'border-white/10'
                  }`}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + featureIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.a
                    href="https://wa.me/+916393943455?text=Hello%20Abhi%20Cyber%20Cafe%20Team!"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl bg-gradient-to-r ${plan.color} text-white font-semibold text-center block hover:shadow-lg transition-shadow`}
                  >
                    Get Started
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          * Prices may vary based on additional services. Contact us for custom packages.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
