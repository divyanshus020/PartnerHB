import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, MapPin, Calendar, DollarSign, 
  Users, ChevronLeft, Upload, Mail, User, 
  CheckCircle2, Building2
} from 'lucide-react';
import api from '../services/api';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual endpoint
    api.get(`/partner/jobs/${id}`)
      .then(res => {
        setJob(res.data.job);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <DashboardLayout>
      <div className="flex items-center justify-center h-64 text-muted-foreground animate-pulse">
        Loading extensive job details...
      </div>
    </DashboardLayout>
  );

  if (!job) return (
    <DashboardLayout>
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Job Not Found</h2>
        <Button onClick={() => navigate('/jobs')} className="mt-4">Back to List</Button>
      </div>
    </DashboardLayout>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2">
            <ChevronLeft size={16} /> Back
          </Button>
          <div className="flex gap-3">
            {/* <Button variant="outline" onClick={() => navigate(`/coming-soon?feature=Candidate History`)}>
              View Pipeline
            </Button> */}
            <Button onClick={() => navigate(`/jobs/${id}/upload`)} className="gap-2">
              <Upload size={16} /> Upload Candidate
            </Button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Building2 size={32} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">{job.jobTitle || 'Untitled Role'}</h1>
                  <Badge variant={job.status === 'active' ? 'default' : 'secondary'}>
                    {job.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-lg">{job.companyName || 'Private Company'}</p>
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase">Posted On</span>
              <span className="text-sm font-medium">{new Date(job.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 whitespace-pre-line leading-relaxed">
                  {job.description || "Detailed description for this role hasn't been provided yet."}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills & Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase mb-3">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills?.length > 0 ? job.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="px-3 py-1">{skill}</Badge>
                    )) : <span className="text-sm text-slate-400 italic">No specific skills listed</span>}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {job.requirements?.length > 0 ? job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        {req}
                      </li>
                    )) : <li className="text-sm text-slate-400 italic">No specific requirements listed</li>}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Sidebar Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={18} />
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium">{job.location || 'Remote / Not Specified'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="text-primary" size={18} />
                  <div>
                    <p className="text-xs text-muted-foreground">Salary Range (Annual)</p>
                    <p className="text-sm font-medium">₹{job.minSalary?.toLocaleString()} - ₹{job.maxSalary?.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="text-primary" size={18} />
                  <div>
                    <p className="text-xs text-muted-foreground">Employment Type</p>
                    <p className="text-sm font-medium capitalize">{job.jobType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-primary" size={18} />
                  <div>
                    <p className="text-xs text-muted-foreground">Total Openings</p>
                    <p className="text-sm font-medium">{job.openings} Positions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary" size={18} />
                  <div>
                    <p className="text-xs text-muted-foreground">Experience Required</p>
                    <p className="text-sm font-medium">{job.minExp} - {job.maxExp} Years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-dashed border-2">
              <CardHeader>
                <CardTitle className="text-sm">Hiring Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <User size={16} className="text-slate-400" />
                  <span className="text-sm">{job.contactPerson || 'Not Provided'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-slate-400" />
                  <span className="text-sm text-primary hover:underline cursor-pointer truncate">
                    {job.companyEmail || 'No Email Provided'}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobDetails;