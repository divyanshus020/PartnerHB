import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CheckCircle2 } from 'lucide-react';

/**
 * HowItWorksSection - 3-step process visualization with animations
 */
export const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const steps = [
    {
      number: '1',
      title: 'Connect',
      description: 'Sign up and create your recruitment profile. Add your organization details, preferences, and hiring criteria.',
      icon: '🤝',
      color: 'bg-blue-500',
    },
    {
      number: '2',
      title: 'Post & Match',
      description: 'Post job listings and let our AI match you with the perfect candidates based on skills and experience.',
      icon: '⚡',
      color: 'bg-purple-500',
    },
    {
      number: '3',
      title: 'Hire & Succeed',
      description: 'Review candidates, conduct interviews, and hire the right talent. Track onboarding and performance.',
      icon: '🎉',
      color: 'bg-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-semibold text-sm tracking-wide uppercase">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Simple 3-Step Hiring Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From posting a job to welcoming your new team member, we make it simple and efficient
          </p>
        </motion.div>

        {/* Steps visualization */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connection lines - desktop only */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Step card */}
              <div className="bg-white rounded-2xl p-8 soft-shadow text-center relative z-10 group hover:shadow-xl transition-all duration-300">
                {/* Number circle */}
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 ${step.color} rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  animate={isVisible ? { y: [0, -10, 0] } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Checkmark animation */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto" />
                </motion.div>
              </div>

              {/* Arrow indicator for next step */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-2xl text-blue-400"
                  >
                    →
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
