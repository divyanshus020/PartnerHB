import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Part5 from '@/assets/Part5.png';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * MeetLeaderSection - Testimonial section with leader quote
 */
export const MeetLeaderSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-emerald-50/50 relative overflow-hidden">
      {/* Decorative dots pattern - Hidden on mobile */}
      <div className="absolute top-0 left-0 hidden md:grid grid-cols-5 gap-3 p-8 opacity-60">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-emerald-400" />
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
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white rounded-3xl soft-shadow flex items-center justify-center overflow-hidden border border-emerald-100">
                <img src={Part5} alt="Success Stories" className="w-full h-full object-contain p-4 md:p-8" />
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
              Success Stories
            </h2>

            <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic border-l-4 border-emerald-500 pl-6">
              &quot;Campus hiring became very much easier for us. The platform streamlined our entire recruitment process and improved candidate quality significantly.&quot;
            </blockquote>

            <div className="pt-4">
              <p className="text-lg font-semibold text-gray-900">OA</p>
              <p className="text-base text-gray-600">Oqlous AI</p>
              <p className="text-sm text-gray-500">Technology Sector</p>
            </div>
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
      title: 'Placed 500+ candidates in Technology sector within 3 months',
      date: 'Dec 2025',
      source: 'TechStaff Solutions',
    },
    {
      title: '2x revenue growth by partnering with Hiring Bazaar',
      date: 'July 2025',
      source: 'Elite Recruiters',
    },
    {
      title: 'Streamlined hiring process reduced time-to-hire by 60%',
      date: 'May 2025',
      source: 'Global Talent Partners',
    },
    {
      title: 'Expanded client base from 10 to 50+ companies in 6 months',
      date: 'Feb 2025',
      source: 'NextGen Staffing',
    },
  ];

  // return (
  //   <div ref={ref} className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
  //     <div className="container mx-auto px-4">
  //       {/* Section header */}
  //       <motion.div
  //         initial={{ opacity: 0, y: 40 }}
  //         animate={isVisible ? { opacity: 1, y: 0 } : {}}
  //         transition={{ duration: 0.6 }}
  //         className="text-center mb-16"
  //       >
  //         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
  //           Our Partner Success Stories
  //         </h2>
  //       </motion.div>

  //       {/* Press cards grid */}
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  //         {pressItems.map((item, index) => (
  //           <motion.div
  //             key={index}
  //             initial={{ opacity: 0, y: 40 }}
  //             animate={isVisible ? { opacity: 1, y: 0 } : {}}
  //             transition={{ duration: 0.6, delay: 0.1 * index }}
  //             className="bg-gray-900 rounded-2xl p-6 soft-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
  //           >
  //             {/* Image placeholder */}
  //             <div className="w-full h-40 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-4 flex items-center justify-center">
  //               <div className="text-white text-center">
  //                 <div className="text-4xl mb-2">📰</div>
  //                 <p className="text-sm opacity-70">Press Image</p>
  //               </div>
  //             </div>

  //             {/* Content */}
  //             <h3 className="text-white font-semibold text-base mb-3 leading-tight group-hover:text-amber-400 transition-colors">
  //               {item.title}
  //             </h3>

  //             <div className="flex items-center justify-between text-sm">
  //               <span className="text-gray-400">{item.date}</span>
  //               <span className="text-amber-400 font-medium">{item.source}</span>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
};

/**
 * FinalCTAWithFooter - Large CTA with footer links
 */
export const FinalCTAWithFooter = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="bg-emerald-950 relative overflow-hidden">
      {/* CTA Section */}
      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Join the Hiring Bazaar<br className="hidden sm:block" />
              Partner Network and<br className="hidden sm:block" />
              scale your recruitment business<br className="hidden sm:block" />
              without increasing overhead.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Contact Details */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-bold">Call us</p>
                    <a href="tel:+919145938795" className="text-gray-200 hover:text-emerald-400 font-semibold transition-colors">
                      +91 91459 38795
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-bold">Email us</p>
                    <a href="mailto:contact@hiringbazaar.in" className="text-gray-200 hover:text-emerald-400 font-semibold transition-colors">
                      contact@hiringbazaar.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-bold">Visit us</p>
                    <p className="text-gray-200 font-semibold leading-relaxed">
                      Sector 26, Pratap Nagar,<br />
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Logo or Brand */}
            <div className="flex items-center justify-center md:justify-end">
              <div className="flex items-center gap-2 text-white">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white text-sm font-bold">
                  HB
                </div>
                <div className="text-lg font-bold">
                  <div className="text-xs uppercase tracking-wider opacity-70">Hiring Bazaar</div>
                  <div>Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
