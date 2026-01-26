import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, MapPin, Upload } from 'lucide-react';
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
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Shared Jobs</h1>
            </div>
            <div className="grid gap-4">
                {jobs.map((job) => (
                    <Card key={job._id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold text-primary">{job.jobTitle}</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1"><Briefcase size={14}/> {job.jobType}</span>
                                    <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                                    <span className="flex items-center gap-1"><Calendar size={14}/> {new Date(job.sharedAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                            <Button onClick={() => navigate(`/jobs/${job._id}/upload`)} className="gap-2">
                                <Upload size={16} /> Upload Candidate
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default Jobs;