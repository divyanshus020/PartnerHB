import { motion } from 'framer-motion';

/**
 * LoadingSpinner - Animated loading component with smooth rotation
 * Shows a spinning icon during data loading
 */
export const LoadingSpinner = ({ size = 'md', message = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`${sizeClasses[size]} relative`}>
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 border-3 border-transparent border-t-amber-500 border-r-amber-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        {/* Inner ring */}
        <motion.div
          className="absolute inset-2 border-2 border-transparent border-b-amber-400 rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
      {message && (
        <p className="text-sm text-gray-600 animate-pulse-subtle">{message}</p>
      )}
    </div>
  );
};

/**
 * AnimatedIcon - Icon with loading/bounce animation
 */
export const AnimatedIcon = ({ icon: Icon, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className={className}
    >
      <Icon className="w-full h-full" />
    </motion.div>
  );
};
