import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
    ArrowRight,
    TrendingUp,
    MessageSquare,
    Briefcase,
    FileText,
    Upload,
    BarChart3,
    Zap,
    ShieldCheck,
    Cpu,
    Eye,
    Rocket,
    Globe,
    Layers,
    Sparkles
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera } from '@react-three/drei';
import { Button } from "@/components/ui/button";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { AnimatedSphere } from '@/components/AnimatedSphere';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import LogoMarquee from '../components/LogoMarquee';
import { ThreeDBackground } from '../components/ThreeDBackground';

const Home = () => {
    const workflowRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: workflowRef,
        offset: ["start end", "end start"]
    });

    const scaleLine = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const howItWorks = [
        {
            title: "Get Job Assignments",
            desc: "View jobs assigned specifically to your agency based on your specializations and track record",
            icon: Briefcase,
            color: "indigo",
            details: "Our AI matches jobs to your agency's performance data and category expertise automatically."
        },
        {
            title: "Access Complete Details",
            desc: "See full job descriptions, requirements, client information, and compensation terms upfront",
            icon: FileText,
            color: "purple",
            details: "No hidden filters. Get all the information you need to find the perfect candidate from day one."
        },
        {
            title: "Submit Top Candidates",
            desc: "Upload qualified candidates through our streamlined platform",
            icon: Upload,
            color: "pink",
            details: "Our platform supports bulk uploads and parsing to make your submission process lightning fast."
        },
        {
            title: "Track Your Progress",
            desc: "Monitor submission status, client feedback, and placement success in real-time",
            icon: BarChart3,
            color: "blue",
            details: "Instant notifications and a centralized dashboard keep you updated on every single move."
        },
        {
            title: "Earn More Revenue",
            desc: "Get paid promptly for successful placements with transparent commission structures",
            icon: TrendingUp,
            color: "green",
            details: "Automated invoicing and predictable payment cycles ensure your agency's cash flow stays healthy."
        }
    ];

    const whyPartner = [
        {
            title: "Steady Job Flow",
            desc: "No more hunting for clients. We bring opportunities directly to your dashboard.",
            icon: Zap,
            gradient: "from-yellow-400 to-orange-500"
        },
        {
            title: "Quality Assignments",
            desc: "Every job is pre-vetted and matched to your recruiting strengths.",
            icon: ShieldCheck,
            gradient: "from-blue-400 to-indigo-600"
        },
        {
            title: "AI-Powered Tools",
            desc: "Leverage advanced AI for sourcing, screening, and matching.",
            icon: Cpu,
            gradient: "from-purple-400 to-pink-600"
        },
        {
            title: "Transparent Process",
            desc: "Clear expectations, defined timelines, and upfront terms for assignments.",
            icon: Eye,
            gradient: "from-teal-400 to-emerald-600"
        },
        {
            title: "Grow Your Business",
            desc: "Scale your agency without spending on client acquisition.",
            icon: Rocket,
            gradient: "from-indigo-400 to-cyan-600"
        },
        {
            title: "Global Reach",
            desc: "Work with clients across various sectors and geographies.",
            icon: Globe,
            gradient: "from-red-400 to-pink-600"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30 overflow-x-hidden uppercase-none font-outfit">
            <Navbar />

            {/* Hero Section */}
            <HeroHighlight className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
                {/* 3D Background Canvas */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <Canvas>
                        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                        <ThreeDBackground />
                    </Canvas>
                </div>

                <div className="container relative z-10 px-4 pt-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col gap-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-semibold w-fit backdrop-blur-sm">
                                <Sparkles size={16} className="animate-pulse" />
                                <span>Hiring Bazaar Partner Network</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-neutral-900 dark:text-white">
                                Become a Hiring Bazaar Partner
                            </h1>

                            <div className="space-y-4">
                                <p className="text-xl lg:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl">
                                    Place more candidates, get new clients , and earn more — without increasing team size.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-5 pt-4">
                                <Button size="lg" className="rounded-full px-10 text-lg h-16 bg-indigo-600 hover:bg-indigo-700 shadow-2xl shadow-indigo-500/40 group transition-all duration-300 hover:scale-105 active:scale-95" asChild>
                                    <Link to="/auth">
                                        Apply as a Partner <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full px-10 text-lg h-16 border-2 backdrop-blur-sm hover:bg-white/10 transition-all duration-300" asChild>
                                    <a href="https://hiringbazaar.in" target="_blank" rel="noreferrer">Visit hiringbazaar.in</a>
                                </Button>
                            </div>
                        </motion.div>

                        <div className="relative h-[450px] lg:h-[650px] hidden lg:block">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="absolute inset-0"
                            >
                                <Canvas camera={{ position: [0, 0, 5] }}>
                                    <ambientLight intensity={0.5} />
                                    <pointLight position={[10, 10, 10]} intensity={1} />
                                    <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
                                        <AnimatedSphere scale={3} color="#6366f1" />
                                    </Float>
                                    <Environment preset="city" />
                                </Canvas>
                            </motion.div>

                            {/* Floating Stats - Enhanced */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/4 right-0 bg-white/10 dark:bg-neutral-900/40 backdrop-blur-xl shadow-2xl rounded-3xl p-6 border border-white/20 z-20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-2xl">
                                        <Layers size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Active Jobs</p>
                                        <p className="text-3xl font-black italic tracking-tighter">1,200+</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-1/4 left-0 bg-white/10 dark:bg-neutral-900/40 backdrop-blur-xl shadow-2xl rounded-3xl p-6 border border-white/20 z-20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-green-500/20 text-green-400 rounded-2xl">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Revenue Growth</p>
                                        <p className="text-3xl font-black italic tracking-tighter">+240%</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Marquee Section */}
                <div className="mt-20 border-y border-neutral-200 dark:border-white/5 bg-white/5 backdrop-blur-sm">
                    <div className="container py-4">
                        <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-neutral-400 mb-2">Trusted by the industry giants</p>
                        <LogoMarquee />
                    </div>
                </div>
            </HeroHighlight>

            {/* Vertical Workflow Section */}
            <section id="workflow" className="py-40 bg-white dark:bg-neutral-950 relative" ref={workflowRef}>
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto space-y-32">
                        <div className="text-center mb-40">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-indigo-500 font-black uppercase tracking-widest mb-4 inline-block"
                            >
                                The Roadmap
                            </motion.span>
                            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase italic">
                                How It Works
                            </h2>
                        </div>

                        <div className="relative">
                            {/* The Progress Line */}
                            <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-1 bg-neutral-100 dark:bg-neutral-900 -translate-x-1/2 rounded-full overflow-hidden">
                                <motion.div
                                    className="w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 origin-top"
                                    style={{ scaleY: scaleLine }}
                                />
                            </div>

                            <div className="space-y-40">
                                {howItWorks.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className={`relative flex flex-col md:flex-row items-center gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                    >
                                        {/* Content */}
                                        <div className={`flex-1 w-full md:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                                            <div className="p-8 rounded-[2.5rem] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-500 group">
                                                <h3 className="text-2xl font-black uppercase italic mb-4 group-hover:text-indigo-500 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-2 normal-case">
                                                    {item.desc}
                                                </p>
                                                <p className="text-sm text-neutral-400 normal-case">
                                                    {item.details}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Icon Node */}
                                        <div className="relative z-10 w-16 h-16 rounded-3xl bg-white dark:bg-neutral-900 border-4 border-white dark:border-neutral-950 shadow-xl flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform shrink-0">
                                            <item.icon size={28} />
                                            <div className="absolute -inset-4 bg-indigo-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>

                                        {/* Spacing for layout */}
                                        <div className="flex-1 hidden md:block" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner Section - Enhanced Grid */}
            <section id="partners" className="py-40 bg-neutral-50 dark:bg-neutral-900 relative">
                <div className="container px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
                        <div className="space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] uppercase italic"
                            >
                                Why Partner with <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                                    Hiringbazaar?
                                </span>
                            </motion.h2>
                            <p className="text-xl text-muted-foreground max-lg normal-case">
                                We've built the most advanced recruitment infrastructure. Here's why the best agencies choose us.
                            </p>
                        </div>
                        <div className="flex justify-end pb-4">
                            <Button size="lg" className="rounded-full px-10 h-16 text-lg bg-indigo-600 shadow-2xl" asChild>
                                <Link to="/auth">Join Network <Rocket size={20} className="ml-2" /></Link>
                            </Button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyPartner.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative p-10 rounded-[3rem] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/5 hover:border-indigo-500/30 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />

                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-2xl font-black uppercase italic mb-4">{item.title}</h4>
                                <p className="text-muted-foreground text-lg leading-relaxed normal-case">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories / Testimonial - High Impact */}
            <section className="py-40 bg-neutral-950 text-white overflow-hidden relative">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Canvas>
                        <ThreeDBackground />
                    </Canvas>
                </div>

                <div className="container relative z-10 px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="relative"
                        >
                            <MessageSquare className="absolute -top-20 -left-10 w-64 h-64 text-indigo-500/10 -rotate-12" />
                            <div className="relative z-10 px-10 md:px-20 py-24 rounded-[4rem] border border-white/10 backdrop-blur-3xl bg-white/5 overflow-hidden">
                                <div className="absolute top-0 right-10 w-40 h-40 bg-indigo-500 blur-[100px] opacity-20" />

                                <blockquote className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight mb-16 normal-case">
                                    "PartnersHB has been instrumental in scaling our operations. The automated workflow and support are unmatched."
                                </blockquote>

                                <div className="flex items-center gap-8">
                                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-1">
                                        <div className="w-full h-full rounded-[1.4rem] bg-neutral-900 flex items-center justify-center text-3xl font-bold italic">D</div>
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-black uppercase italic">Deepak</h4>
                                        <p className="text-indigo-400 text-xl font-bold">CEO of Kritcure</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA - Brutalist Style */}
            <section className="py-40 bg-white dark:bg-neutral-950 text-white">
                <div className="container px-4">
                    <div className="bg-indigo-600 rounded-[4rem] p-12 lg:p-32 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-white/[0.1] [mask-image:radial-gradient(white,transparent_80%)]" />
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-500 rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity" />

                        <div className="relative z-10 space-y-12">
                            <h2 className="text-6xl lg:text-9xl font-black tracking-tighter uppercase italic leading-[0.8]">
                                Ready to <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white animate-gradient-x">
                                    Boost Revenue?
                                </span>
                            </h2>
                            <p className="text-2xl text-indigo-100 max-w-3xl mx-auto font-medium normal-case">
                                Take the first step towards boosting your placements. Join our network today and focus purely on recruitment excellence.
                            </p>
                            <div className="flex flex-wrap justify-center gap-8">
                                <Button size="lg" className="bg-white text-indigo-700 hover:bg-neutral-100 rounded-full px-16 h-20 text-2xl font-black uppercase italic shadow-2xl transition-all hover:scale-105 active:scale-95" asChild>
                                    <Link to="/auth">Join as Partner</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-4 border-white rounded-full px-16 h-20 text-2xl font-black uppercase italic transition-all hover:bg-white/10" asChild>
                                    <a href="mailto:contact@hiringbazaar.in">Contact Us</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-20 border-t border-neutral-100 dark:border-white/5 bg-neutral-50 dark:bg-neutral-950">
                <div className="container px-4 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-4xl font-black uppercase italic tracking-tighter text-indigo-600">PartnersHB</div>
                    <div className="text-neutral-500 font-bold text-center">
                        © 2025 Vertex Hiring Bazaar Connects Pvt. Ltd.
                    </div>
                    <div className="flex gap-10 font-black uppercase italic text-sm text-neutral-400">
                        <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
