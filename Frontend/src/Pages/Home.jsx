import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Users, MessageSquare } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Navbar from '../Components/Navbar';
import { Button } from "@/components/ui/button";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { AnimatedSphere } from '@/components/AnimatedSphere';

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />

            {/* Hero Section with Aceternity Highlight & 3D Element */}
            <HeroHighlight className="min-h-screen pt-20">
                <div className="container relative z-10 px-4 grid lg:grid-cols-2 gap-12 items-center h-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col gap-6"
                    >
                        <span className="inline-block w-fit px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-wide">
                            PartnersHB Agency Network
                        </span>
                        <h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
                            Boost Your Placements, <br />
                            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                                Revenue Effortlessly.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                            Unlock the power of our AI-driven network to scale your agency. Connect, evaluate, and grow with the future of hiring infrastructure.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="rounded-full px-8 text-base shadow-lg shadow-indigo-500/20">
                                Find out more <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-8 text-base">
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-[400px] w-full relative"
                    >
                        {/* 3D Sphere Canvas */}
                        <div className="absolute inset-0 z-0">
                            <Canvas camera={{ position: [0, 0, 4] }}>
                                <ambientLight intensity={0.5} />
                                <pointLight position={[10, 10, 10]} />
                                <AnimatedSphere />
                                <Environment preset="city" />
                            </Canvas>
                        </div>

                        {/* Floating Stats Card Overlay */}
                        <div className="absolute bottom-10 -left-10 z-10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl max-w-xs animate-in slide-in-from-bottom-10 fade-in duration-1000">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Revenue Spike</h4>
                                    <p className="text-sm text-green-600 font-medium">+127% Growth</p>
                                </div>
                            </div>
                            <div className="h-24 flex items-end justify-between gap-1">
                                {[35, 55, 40, 70, 55, 85, 75].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                        className="w-full bg-indigo-500 rounded-t-sm opacity-80"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </HeroHighlight>

            {/* Workflow Section */}
            <section id="workflow" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
                <div className="container px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">How It Works</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Streamline your agency operations with our three-step success framework.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Connect', desc: 'Join our extensive network of agencies and employers.', icon: Users },
                            { title: 'Evaluate', desc: 'Complimentary evaluation of your agency requirements.', icon: CheckCircle },
                            { title: 'Grow', desc: 'Placement support to boost your revenue per recruiter.', icon: TrendingUp }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="group p-8 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 relative overflow-hidden bg-neutral-900 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-neutral-900 to-neutral-900"></div>
                <div className="container relative z-10 px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Client Testimonials</h2>
                        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
                    </div>
                    <motion.div
                        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl text-center shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <MessageSquare className="w-12 h-12 text-indigo-400 mx-auto mb-8 opacity-80" />
                        <blockquote className="text-2xl lg:text-4xl font-medium leading-tight mb-8">
                            "PartnersHB has been instrumental in scaling our operations. The automated workflow and support are unmatched."
                        </blockquote>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 mb-3"></div>
                            <h4 className="font-bold text-xl">Deepak</h4>
                            <p className="text-indigo-300">CEO of Kritcure</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-white dark:bg-neutral-950">
                <div className="container px-4">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 rounded-[2.5rem] p-10 lg:p-20 shadow-sm border border-indigo-100 dark:border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">Ready to boost your Revenue?</h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                Take the first step towards boosting your placements. Contact us today for a complimentary evaluation of your agency requirements.
                            </p>

                            <div className="space-y-6 pt-4 text-neutral-700 dark:text-neutral-300">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-neutral-100 dark:border-neutral-700">
                                    <div className="font-semibold min-w-[80px]">Address:</div>
                                    <div>Sector 26, Pratap Nagar, Jaipur, Rajasthan</div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-neutral-100 dark:border-neutral-700">
                                    <div className="font-semibold min-w-[80px]">Tel:</div>
                                    <div>9145938795</div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-neutral-100 dark:border-neutral-700">
                                    <div className="font-semibold min-w-[80px]">Email:</div>
                                    <div className="text-indigo-600 dark:text-indigo-400">contact@hiringbazaar.in</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3 w-full">
                            <div className="bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-xl border border-neutral-100 dark:border-neutral-800 text-center">
                                <h3 className="text-xl font-bold mb-6">Get Started Now</h3>
                                <Button size="lg" className="w-full py-6 text-lg shadow-lg shadow-indigo-500/20">
                                    Request Evaluation
                                </Button>
                                <p className="mt-4 text-xs text-muted-foreground">No credit card required. Free initial consultation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16 text-muted-foreground text-sm">
                        © 2025 by Vertex Hiring Bazaar Connects pvt. ltd.
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
