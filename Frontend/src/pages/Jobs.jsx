import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, MapPin, Upload, ChevronRight } from 'lucide-react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/partner/jobs').then(res => setJobs(res.data.jobs));
    }, []);

    return (
        <DashboardLayout>
            <div className="flex justify-between items-center mb-8 px-1">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Shared Jobs</h1>
                    <p className="text-muted-foreground mt-1">Browse and manage job postings shared with you.</p>
                </div>
            </div>

            <div className="grid gap-4">
                {jobs.map((job) => (
                    <Card key={job._id} className="group hover:shadow-md transition-all duration-200 border-slate-200">
                        <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center">
                                
                                {/* Linkable Content Area */}
                                <div 
                                    className="p-6 flex-1 cursor-pointer"
                                    onClick={() => navigate(`/jobs/${job._id}`)}
                                >
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-xl font-bold text-primary group-hover:underline decoration-2 underline-offset-4">
                                                {job.jobTitle || "Untitled Position"}
                                            </h3>
                                            <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-primary transition-colors" />
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 mt-2">
                                            <span className="flex items-center gap-1.5">
                                                <Briefcase size={15} className="text-slate-400"/> 
                                                <span className="capitalize">{job.jobType}</span>
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin size={15} className="text-slate-400"/> 
                                                {job.location || "Remote"}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={15} className="text-slate-400"/> 
                                                {new Date(job.createdAt || job.sharedAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Area */}
                                <div className="px-6 pb-6 md:pb-0 md:border-l border-slate-100 flex items-center">
                                    <Button 
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevents navigating to details when clicking button
                                            navigate(`/jobs/${job._id}/upload`);
                                        }} 
                                        className="w-full md:w-auto gap-2 shadow-sm"
                                    >
                                        <Upload size={16} /> 
                                        <span className="hidden lg:inline">Upload Candidate</span>
                                        <span className="lg:hidden">Upload</span>
                                    </Button>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                ))}

                {jobs.length === 0 && (
                    <div className="text-center py-20 border-2 border-dashed rounded-xl bg-slate-50/50">
                        <Briefcase className="mx-auto h-12 w-12 text-slate-300 mb-4" />
                        <h3 className="text-lg font-medium text-slate-900">No jobs found</h3>
                        <p className="text-slate-500">Jobs shared by recruiters will appear here.</p>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Jobs;