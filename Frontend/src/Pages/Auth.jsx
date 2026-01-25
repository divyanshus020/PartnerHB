import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, Building, MapPin, FileText, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '../Components/Navbar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen w-full flex bg-background text-foreground overflow-hidden">

            {/* Left Panel: Aesthetic Background */}
            <div className="hidden lg:flex w-1/2 bg-neutral-900 relative items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 bg-dot-white/[0.2] z-0"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-900/50 to-neutral-950/90 z-10"></div>

                {/* Animated Orbs */}
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -30, 0], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px] z-0"
                />
                <motion.div
                    animate={{ x: [0, -40, 0], y: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] z-0"
                />

                <div className="relative z-20 max-w-lg text-white space-y-8">
                    <h1 className="text-6xl font-bold tracking-tight">
                        {isLogin ? "Welcome Back." : "Join the Future."}
                    </h1>
                    <p className="text-xl text-neutral-300 leading-relaxed">
                        {isLogin
                            ? "Access your dashboard to track revenue, manage placements, and connect with top agencies."
                            : "Coordinate with the best agencies and employers. Build relationships that drive revenue."}
                    </p>

                    <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            <span className="font-semibold">Live System Status</span>
                        </div>
                        <p className="text-sm text-neutral-300">All AI matching systems operational. 98% Placement success rate today.</p>
                    </div>
                </div>
            </div>

            {/* Right Panel: Form */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 lg:p-12 relative bg-white dark:bg-neutral-950">
                <div className="absolute top-6 left-6 lg:hidden">
                    <Button variant="ghost" asChild>
                        <a href="/" className="flex items-center gap-2"><ArrowLeft size={16} /> Home</a>
                    </Button>
                </div>

                <div className="w-full max-w-md space-y-8">
                    <div className="text-center space-y-2 lg:text-left">
                        <h2 className="text-3xl font-bold">{isLogin ? "Sign in to account" : "Create an account"}</h2>
                        <p className="text-muted-foreground">
                            {isLogin ? "Enter your email below to access your account" : "Enter your details below to create your account"}
                        </p>
                    </div>

                    <Card className="border-none shadow-none lg:shadow-xl lg:border lg:bg-card">
                        <CardContent className="pt-6">
                            <AnimatePresence mode="wait">
                                <motion.form
                                    key={isLogin ? 'login' : 'register'}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-4"
                                >
                                    {!isLogin && (
                                        <>
                                            <div className="space-y-2">
                                                <Label htmlFor="hrName">HR Name</Label>
                                                <Input id="hrName" placeholder="John Doe" />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone</Label>
                                                    <Input id="phone" placeholder="+91..." type="tel" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="company">Company</Label>
                                                    <Input id="company" placeholder="Acme Inc" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="address">Company Address</Label>
                                                <Input id="address" placeholder="123 Business St, Jaipur" />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="cv">Upload CV of HR</Label>
                                                <Input id="cv" type="file" className="cursor-pointer" />
                                            </div>
                                        </>
                                    )}

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="m@example.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="password">Password</Label>
                                            {isLogin && <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>}
                                        </div>
                                        <Input id="password" type="password" />
                                    </div>

                                    <Button className="w-full h-11 text-base shadow-lg shadow-indigo-500/20" type="submit">
                                        {isLogin ? "Sign In" : "Create Account"}
                                    </Button>
                                </motion.form>
                            </AnimatePresence>

                            <div className="mt-6 text-center text-sm">
                                <span className="text-muted-foreground">
                                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                                </span>
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="font-medium text-primary hover:underline underline-offset-4"
                                >
                                    {isLogin ? "Sign up" : "Sign in"}
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Auth;
