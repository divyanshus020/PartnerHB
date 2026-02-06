import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star, Quote } from 'lucide-react';

/**
 * TestimonialsSection - Social proof with client testimonials
 */
export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'HR Manager, Tech Startup',
      company: 'InnovateTech',
      content: 'PartnerHB reduced our hiring time by 60%. The AI matching is incredibly accurate and saves us hours each week.',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Recruitment Director',
      company: 'Global Solutions',
      content: 'The analytics dashboard gives us insights we never had before. We can now track our hiring efficiency in real-time.',
      avatar: '👨‍💼',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'CEO, Growing Consultancy',
      company: 'Elite Consulting',
      content: 'Best investment for our team. The support is fantastic and the platform just keeps getting better.',
      avatar: '👩‍💻',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl -z-10 transform -translate-x-1/2" />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how organizations are transforming their hiring with PartnerHB
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl soft-shadow hover:shadow-lg transition-all duration-300 group"
            >
              {/* Quote icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                className="mb-4"
              >
                <Quote className="w-8 h-8 text-indigo-400 opacity-60" />
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: index * 0.15 + 0.4 + i * 0.08,
                      duration: 0.3,
                    }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
