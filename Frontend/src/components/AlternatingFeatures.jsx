import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Part2 from '@/assets/Part2.png';
import Part3 from '@/assets/Part3.png';
import Part4 from '@/assets/Part4.png';
import Workflow from '@/assets/Workflow.png';

// Container for staggering all children
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

// Individual item animation (for headings, paragraphs, etc.)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// List container with tighter stagger
const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

// List item animation
const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

/**
 * AlternatingFeatureSections - Feature sections with left-right alternating layouts
 */
export const EarningsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-8 left-8 grid grid-cols-5 gap-3 opacity-50">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-emerald-400" />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Content - Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="space-y-6 lg:pl-16 xl:pl-32"
          >
            <motion.div variants={itemVariants}>
              <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Workflow
              </motion.h2>
            </motion.div>

            <div className="space-y-8">
              <div>
                <motion.h3 variants={itemVariants} className="text-xl font-bold text-emerald-600 mb-3 uppercase tracking-wide">
                  How It Works
                </motion.h3>
                <div className="space-y-6">
                  <motion.div variants={itemVariants} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Get Hiring Requirements</h4>
                      <p className="text-gray-600">We assign verified job openings from companies.</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Source Candidates</h4>
                      <p className="text-gray-600">Use your network or database to find suitable candidates.</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Submit Through Platform</h4>
                      <p className="text-gray-600">Upload candidates securely with contact protection.</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Earn on Placement</h4>
                      <p className="text-gray-600">Get paid when your candidate is successfully hired.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image - Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white rounded-3xl soft-shadow flex items-center justify-center overflow-hidden border border-emerald-100">
              <img src={Workflow} alt="Workflow Dashboard" className="w-full h-full object-contain p-4 md:p-8" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/**
 * ProfessionalToolsSection - Right-aligned content with image on left
 */
export const ProfessionalToolsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-8 left-8 grid grid-cols-5 gap-3 opacity-50">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-emerald-400" />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image - Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white rounded-3xl soft-shadow flex items-center justify-center overflow-hidden border border-emerald-100">
              <img src={Part2} alt="Professional Tools" className="w-full h-full object-contain p-4 md:p-8" />
            </div>
          </motion.div>

          {/* Content - Right */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="order-1 lg:order-2 space-y-6 lg:pl-16 xl:pl-32"
          >
            <motion.div variants={itemVariants}>
              <motion.p variants={itemVariants} className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">
                PROFESSIONAL TOOLS
              </motion.p>
              <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Manage all your work<br />
                with our technology.
              </motion.h2>
            </motion.div>

            <div className="space-y-6">
              <div>
                <motion.h3 variants={itemVariants} className="text-xl font-bold text-emerald-600 mb-3">
                  Candidate Tracking
                </motion.h3>
                <motion.ul
                  className="space-y-3"
                  variants={listVariants}
                  initial="hidden"
                  animate={isVisible ? 'visible' : 'hidden'}
                >
                  <motion.li className="flex items-start gap-3" variants={listItemVariants}>
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Track the entire recruitment process
                    </span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={listItemVariants}>
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Candidate status updates in near real-time
                    </span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={listItemVariants}>
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Performance and Payout Dashboards to track earnings.
                    </span>
                  </motion.li>
                </motion.ul>
              </div>

              <div>
                <motion.h3 variants={itemVariants} className="text-xl font-bold text-emerald-600 mb-3">
                  Automation
                </motion.h3>
                <motion.ul
                  className="space-y-3"
                  variants={listVariants}
                  initial="hidden"
                  animate={isVisible ? 'visible' : 'hidden'}
                >
                  <motion.li className="flex items-start gap-3" variants={listItemVariants}>
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      With features like telephony integration, bulk referrals and more
                    </span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={listItemVariants}>
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Already integrated with the top employers
                    </span>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/**
 * ScaleUpSupportSection - Growth and support section
 */
export const ScaleUpSupportSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-8 left-8 grid grid-cols-5 gap-3 opacity-50">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-emerald-400" />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Content - Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="space-y-6 lg:pl-16 xl:pl-32"
          >
            <motion.div variants={itemVariants}>
              <motion.p variants={itemVariants} className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">
                SCALE-UP SUPPORT
              </motion.p>
              <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Growth and<br />
                support built-in
              </motion.h2>
            </motion.div>

            <motion.div className="space-y-6">
              <motion.p variants={itemVariants} className="text-lg text-gray-700">
                Work with the <strong>top employers</strong>,<br />
                big companies, and high-tech startups.
              </motion.p>

              {/* <motion.p variants={itemVariants} className="text-lg text-gray-700">
                Dedicated Account managers to support you.
              </motion.p> */}

              <motion.p variants={itemVariants} className="text-lg text-gray-700">
                <strong>Partner with Hiring Bazaar</strong> to help you grow<br />
                your team.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-6">
                <a
                  href="#"
                  className="inline-flex items-center text-lg font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group"
                >
                  Get Started
                  <span className="ml-2 text-2xl group-hover:translate-x-1 transition-transform">›</span>
                </a>
                <div className="h-0.5 w-32 bg-emerald-600 mt-1" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image - Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white rounded-3xl soft-shadow flex items-center justify-center overflow-hidden border border-emerald-100">
              <img src={Part3} alt="Scale-up Support" className="w-full h-full object-contain p-4 md:p-8" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/**
 * EntrepreneurSection - Build from zero section
 */
export const EntrepreneurSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-8 left-8 grid grid-cols-5 gap-3 opacity-50">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-emerald-400" />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image - Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white rounded-3xl soft-shadow flex items-center justify-center overflow-hidden border border-emerald-100">
              <img src={Part4} alt="Partner Growth" className="w-full h-full object-contain p-4 md:p-8" />
            </div>
          </motion.div>

          {/* Content - Right */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="order-1 lg:order-2 space-y-6 pl-8 lg:pl-32"
          >
            <motion.div variants={itemVariants}>
              <motion.p variants={itemVariants} className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">
                Become a
              </motion.p>
              <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Hiring Partner
              </motion.h2>
            </motion.div>

            <motion.div className="space-y-6">
              <motion.div>
                <motion.h3 variants={itemVariants} className="text-xl font-bold text-emerald-600 mb-3">
                  Let&apos;s get growing
                </motion.h3>
                <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
                  As a Hiring Bazaar Partner, you can work from anywhere<br />
                  and leverage your network of contacts.
                </motion.p>
              </motion.div>

              <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
                Easily submit candidates, earn commissions, and track placements<br />
                with our intuitive PartnerHB platform.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-6">
                <a
                  href="#"
                  className="inline-flex items-center text-lg font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group"
                >
                  Get Started Now
                  <span className="ml-2 text-2xl group-hover:translate-x-1 transition-transform">›</span>
                </a>
                <div className="h-0.5 w-40 bg-emerald-600 mt-1" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
