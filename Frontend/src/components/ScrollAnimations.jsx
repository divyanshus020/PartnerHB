import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollRevealWrapper - Wraps content with scroll-triggered animations
 */
export const ScrollRevealWrapper = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}) => {
  const getInitialValues = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -40 };
      case 'right':
        return { opacity: 0, x: 40 };
      case 'down':
        return { opacity: 0, y: -40 };
      case 'up':
      default:
        return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      initial={getInitialValues()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: 'easeOut',
      }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerContainer - Container for staggered animations
 */
export const StaggerContainer = ({ children, staggerDelay = 0.1 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          variants: itemVariants,
          initial: 'hidden',
          whileInView: 'visible',
          viewport: { once: true },
        })
      )}
    </motion.div>
  );
};

/**
 * CountupAnimation - Animates numbers counting up
 */
export const CountupAnimation = ({ end = 100, duration = 2, prefix = '', suffix = '' }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress === 1) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

/**
 * GradientText - Text with gradient animation
 */
export const GradientText = ({ children, className = '' }) => {
  return (
    <span
      className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x ${className}`}
    >
      {children}
    </span>
  );
};
