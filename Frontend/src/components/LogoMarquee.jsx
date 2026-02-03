import React from 'react';
import { motion } from 'framer-motion';

const LogoMarquee = () => {
    const companies = [
        "Kritcure",
        "HiringBazar",
        "TechPartner",
        "GlobalTalent",
        "RecruitHub",
        "FutureHire",
        "EliteStaffing"
    ];

    // Double the array for seamless loop
    const upperCompanies = [...companies, ...companies];

    return (
        <div className="w-full overflow-hidden py-10 bg-transparent select-none">
            <div className="flex flex-col gap-8">
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex whitespace-nowrap gap-12 items-center"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {upperCompanies.map((company, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <div className="w-2 h-2 rounded-full bg-indigo-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                                <span className="text-2xl md:text-3xl font-black text-neutral-300 dark:text-neutral-700 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300 cursor-default tracking-tighter uppercase italic">
                                    {company}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LogoMarquee;
