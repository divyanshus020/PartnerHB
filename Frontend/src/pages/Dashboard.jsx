import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import api from '../services/api';
import { Briefcase, Users, CheckCircle } from 'lucide-react';

const Dashboard = () => {
    const [stats, setStats] = useState({ jobs: 0, uploads: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            // Check local storage first for instant UI
            const cached = localStorage.getItem('partner_stats');
            if (cached) setStats(JSON.parse(cached));

            try {
                const [jobsRes, uploadsRes] = await Promise.all([
                    api.get('/partner/jobs'),
                    api.get('/partner/uploads')
                ]);
                const newStats = { jobs: jobsRes.data.count, uploads: uploadsRes.data.count };
                setStats(newStats);
                localStorage.setItem('partner_stats', JSON.stringify(newStats));
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    // Helper component for the ghost card
    const SkeletonCard = () => (
        <div className="h-[160px] w-full rounded-xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
    );

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-8">Performance Overview</h1>
            
            <div className="grid md:grid-cols-3 gap-6">
                {loading && !stats.jobs ? (
                    // Show 3 skeletons while loading if no cache exists
                    <>
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </>
                ) : (
                    <>
                        {/* Card 1: Assigned Jobs */}
                        <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-none shadow-lg">
                            <CardHeader className="pb-2 flex flex-row items-center justify-between">
                                <CardTitle className="text-lg font-medium">Assigned Jobs</CardTitle>
                                <Briefcase size={20} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">{stats.jobs}</div>
                                <p className="text-indigo-100 text-xs mt-2">Active roles to fill</p>
                            </CardContent>
                        </Card>

                        {/* Card 2: Total Uploads */}
                        <Card className="shadow-sm border-border">
                            <CardHeader className="pb-2 flex flex-row items-center justify-between">
                                <CardTitle className="text-lg font-medium">Total Uploads</CardTitle>
                                <Users size={20} className="text-primary" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">{stats.uploads}</div>
                                <p className="text-muted-foreground text-xs mt-2">Candidates submitted</p>
                            </CardContent>
                        </Card>

                        {/* Card 3: Approval Status */}
                        <Card className="shadow-sm border-border">
                            <CardHeader className="pb-2 flex flex-row items-center justify-between">
                                <CardTitle className="text-lg font-medium">Approval Status</CardTitle>
                                <CheckCircle size={20} className="text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-xl font-bold text-green-600">Active</div>
                                <p className="text-muted-foreground text-xs mt-2">Verified Partner</p>
                            </CardContent>
                        </Card>
                    </>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;