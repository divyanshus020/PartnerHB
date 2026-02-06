import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Briefcase,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Clock,
} from 'lucide-react';

/**
 * FeaturesSection - Showcase platform key features with scroll animations
 */
export const FeaturesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    {
      icon: Briefcase,
      title: 'Smart Job Matching',
      desc: 'AI-powered algorithm matches candidates with perfect job fits automatically',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Candidate Tracking',
      desc: 'Real-time status updates and recruitment pipeline management in one place',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      desc: 'Track hiring metrics, performance data, and ROI at a glance',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Zap,
      title: 'Quick Onboarding',
      desc: 'Set up your recruitment pipeline in minutes, not weeks',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      desc: 'Enterprise-grade security with full GDPR and data privacy compliance',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      desc: 'Dedicated support team ready to help you succeed',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
            Powerful Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Everything You Need to Hire Better
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive recruitment tools designed to save time, reduce costs, and find the best talent
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl soft-shadow hover:shadow-xl transition-all duration-300 hover:translate-y--2"
            >
              {/* Icon background */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
