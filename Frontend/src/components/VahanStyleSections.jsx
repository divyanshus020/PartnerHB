import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * MeetLeaderSection - Testimonial section with leader quote
 */
export const MeetLeaderSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute top-0 left-0 grid grid-cols-5 gap-3 p-8 opacity-60">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-teal-400" />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Image space - user will add their own */}
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-orange-200 to-purple-300 rounded-3xl soft-shadow flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-lg font-semibold">Add Your Image Here</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Meet A Vahan Leader
            </h2>
            
            <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic border-l-4 border-purple-500 pl-6">
              &quot;The Vahan Leader app makes it easy for me to help people in my community get jobs. I don&apos;t have to leave my home to do this!&quot;
            </blockquote>

            <div className="pt-4">
              <p className="text-lg font-semibold text-gray-900">Aamna, Vahan Leader</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/**
 * HowDoesItWorkSection - 3-step numbered process
 */
export const HowDoesItWorkSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
            How Does It Work?
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            About the Vahan Leader Program:
          </h2>
        </motion.div>

        {/* Steps - 3 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {/* Step 1 - Connect */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                1
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with and identify interested job seekers - online or offline.
            </p>
          </motion.div>

          {/* Step 2 - Refer */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                2
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Refer</h3>
            <p className="text-gray-600 leading-relaxed">
              Refer job-seekers to Vahan through our easy-to-use app
            </p>
          </motion.div>

          {/* Step 3 - Earn */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                3
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Earn</h3>
            <p className="text-gray-600 leading-relaxed">
              Earn money fairly whenever your referrals get hired
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/**
 * InThePressSection - Press coverage cards
 */
export const InThePressSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const pressItems = [
    {
      title: 'Vahan.ai expands operations into textile and electronic sectors',
      date: 'Dec 2025',
      source: 'Economic Times',
    },
    {
      title: "Temasek's LemmaTree invests in hiring platform Vahan.ai",
      date: 'July 2025',
      source: 'Fortune India',
    },
    {
      title: 'OpenAI backs Vahan to automate Blue Collar Hiring with AI',
      date: 'May 2025',
      source: 'Economic Times',
    },
    {
      title: "Vahan.ai secures investment from Japan's Persol Group",
      date: 'Feb 2025',
      source: 'Entrepreneur India',
    },
  ];

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            In The Press
          </h2>
        </motion.div>

        {/* Press cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pressItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gray-900 rounded-2xl p-6 soft-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              {/* Image placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📰</div>
                  <p className="text-sm opacity-70">Press Image</p>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-base mb-3 leading-tight group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{item.date}</span>
                <span className="text-amber-400 font-medium">{item.source}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * FinalCTAWithFooter - Large CTA with footer links
 */
export const FinalCTAWithFooter = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 relative overflow-hidden">
      {/* CTA Section */}
      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Become a part of the<br />
              Vahan Leader program to<br />
              earn Rs 25,000/month+<br />
              by helping others find jobs.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Legal */}
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    Careers @ Vahan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    Become A Vahan Leader
                  </a>
                </li>
              </ul>
            </div>

            {/* Logo or Brand */}
            <div className="flex items-center justify-center md:justify-end">
              <div className="text-white text-2xl font-bold">
                🦢 Vahan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
