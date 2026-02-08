import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.png';

export const HeroSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24">

      {/* Background base color */}
      <div className="absolute inset-0 bg-[#FFF8E8]" />

      {/* Right side background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right bg-contain"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      />

      {/* Left side readable overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8E8] via-[#FFF8E8]/90 to-transparent" />

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="flex items-center justify-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 lg:space-y-8 text-center max-w-3xl"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Become a Hiring Bazaar Partner
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Place more candidates, get new clients , and earn more — without increasing team size.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center pt-2"
            >
              <Link to="/auth">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group px-10"
                >
                  Apply as a Partner
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>

    </div>
  );
};
