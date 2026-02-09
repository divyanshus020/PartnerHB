import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, Building, Lock, ArrowLeft, Loader2, Home } from 'lucide-react';
import { toast } from 'sonner';
import { authService } from '../services/auth.service';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // State for all form fields
    const [formData, setFormData] = useState({
        partnerName: '',
        organizationName: '',
        email: '',
        password: '',
        phone: '',
    });

    // Separate state for the file
    const [resumeFile, setResumeFile] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            setResumeFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        if (isLogin) {
            // LOGIN FLOW
            const response = await authService.login({
                email: formData.email,
                password: formData.password
            });

            if (response.success) {
                localStorage.setItem('token', response.token);
                toast.success(`Welcome back, ${response.partner.partnerName}!`);
                navigate('/dashboard');
            }
        } else {
            // REGISTRATION FLOW
            if (!resumeFile) {
                toast.error("Please upload your resume to complete registration.");
                setIsLoading(false);
                return;
            }

            const signupData = { ...formData, resume: resumeFile };
            const response = await authService.register(signupData);

            if (response.success) {
                // Backend Message: "Registration submitted successfully. We will review..."
                toast.success(response.message, {
                    duration: 6000,
                });
                setIsLogin(true); // Move them to login view
            }
        }
    } catch (error) {
        const status = error.response?.status;
        const serverMessage = error.response?.data?.message;

        switch (status) {
            case 401: // Invalid Credentials
                toast.error("Invalid email or password. Please try again.");
                break;
            
            case 403: // Pending or Rejected (Approval Logic)
                // This captures your "Your account is pending approval" message
                toast.warning(serverMessage || "Access Denied", {
                    duration: 8000,
                    description: "Our admins are currently reviewing your profile.",
                });
                break;

            case 400: // Bad Request (e.g., Email already exists)
                toast.error(serverMessage || "Registration failed. Please check your details.");
                break;

            case 500: // Server Error
                toast.error("Server is currently down. Please try again later.");
                break;

            default:
                toast.error("An unexpected error occurred. Please check your connection.");
        }
    } finally {
        setIsLoading(false);
    }
};

    return (
        <div className="min-h-screen w-full flex bg-background text-foreground overflow-hidden relative">
            {/* Home Button - Top Left */}
            <Link 
                to="/" 
                className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
                <Home className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700" />
                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Home</span>
            </Link>

            {/* Left Panel: Aesthetic Background */}
            <div className="hidden lg:flex w-1/2 bg-neutral-900 relative items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 bg-dot-white/[0.2] z-0"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-900/50 to-neutral-950/90 z-10"></div>
                
                <div className="relative z-20 max-w-lg text-white space-y-8">
                    <h1 className="text-6xl font-bold tracking-tight">
                        {isLogin ? "Welcome Back." : "Partner with Us."}
                    </h1>
                    <p className="text-xl text-neutral-300 leading-relaxed">
                        {isLogin
                            ? "Access your dashboard to manage placements and track your performance."
                            : "Join our network of elite partners. Submit your profile for admin review."}
                    </p>
                </div>
            </div>

            {/* Right Panel: Form */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 lg:p-12 bg-white dark:bg-neutral-950">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold">{isLogin ? "Sign In" : "Partner Registration"}</h2>
                        <p className="text-muted-foreground mt-2">
                            {isLogin ? "Enter your credentials to access your account" : "Provide your details to apply for a partner account"}
                        </p>
                    </div>

                    <Card className="border-none shadow-none lg:shadow-xl lg:border">
                        <CardContent className="pt-6">
                            <AnimatePresence mode="wait">
                                <motion.form
                                    key={isLogin ? 'login' : 'register'}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    {!isLogin && (
                                        <>
                                            <div className="space-y-2">
                                                <Label htmlFor="partnerName">Partner Name</Label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                    <Input id="partnerName" placeholder="Full Name" className="pl-10" onChange={handleChange} required />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone</Label>
                                                    <div className="relative">
                                                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                        <Input id="phone" placeholder="+91..." className="pl-10" onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="organizationName">Organization</Label>
                                                    <div className="relative">
                                                        <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                        <Input id="organizationName" placeholder="Company" className="pl-10" onChange={handleChange} required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="resume">Partner Resume (Required)</Label>
                                                <Input id="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="cursor-pointer" required />
                                            </div>
                                        </>
                                    )}

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input id="email" type="email" placeholder="name@company.com" className="pl-10" onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input id="password" type="password" className="pl-10" onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <Button disabled={isLoading} className="w-full h-11" type="submit">
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Please wait
                                            </>
                                        ) : (
                                            isLogin ? "Sign In" : "Submit Registration"
                                        )}
                                    </Button>
                                </motion.form>
                            </AnimatePresence>

                            <div className="mt-6 text-center text-sm">
                                <span className="text-muted-foreground">
                                    {isLogin ? "Interested in partnering? " : "Already registered? "}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="font-medium text-primary hover:underline"
                                >
                                    {isLogin ? "Register here" : "Sign in instead"}
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