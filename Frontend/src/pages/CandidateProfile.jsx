import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
    User, Mail, Phone, Linkedin, Github, 
    Briefcase, GraduationCap, Star, Award, ChevronLeft 
} from 'lucide-react';
import api from '../services/api';

const CandidateProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [c, setCandidate] = useState(null);

    useEffect(() => {
        api.get(`/partner/uploads/${id}`).then(res => setCandidate(res.data.candidate));
    }, [id]);

    if (!c) return <div className="p-10 text-center">Loading Candidate Profile...</div>;

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6">
            <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to Uploads
            </Button>

            {/* Header: Basic Info & AI Score */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-8 rounded-xl border shadow-sm gap-6">
                <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold">
                        {c.name.charAt(0)}
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">{c.name}</h1>
                        <p className="text-muted-foreground">{c.basicInfo?.jobTitle || "Candidate"}</p>
                        <div className="flex gap-4 mt-2 text-sm text-slate-500">
                            <span className="flex items-center gap-1"><Mail size={14}/> {c.email}</span>
                            <span className="flex items-center gap-1"><Phone size={14}/> {c.phoneNumber}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-green-50 border border-green-100 p-4 rounded-xl text-center min-w-[140px]">
                    <p className="text-xs text-green-600 font-bold uppercase tracking-widest mb-1">ATS Match</p>
                    <p className="text-4xl font-black text-green-700">{c.atsScore}%</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Side: Work & Education */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader><CardTitle className="flex items-center gap-2"><Briefcase size={18}/> Work Experience</CardTitle></CardHeader>
                        <CardContent className="space-y-6">
                            {c.workExperience?.map((exp, i) => (
                                <div key={i} className="border-l-2 border-slate-100 pl-4 relative">
                                    <div className="absolute w-3 h-3 bg-slate-200 rounded-full -left-[7px] top-1" />
                                    <h4 className="font-bold text-slate-900">{exp.role}</h4>
                                    <p className="text-sm text-indigo-600 font-medium">{exp.company}</p>
                                    <p className="text-xs text-slate-400 mb-2">{exp.startDate} — {exp.endDate}</p>
                                    <ul className="list-disc pl-4 text-sm text-slate-600 space-y-1">
                                        {exp.responsibilities?.map((res, j) => <li key={j}>{res}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle className="flex items-center gap-2"><GraduationCap size={18}/> Education</CardTitle></CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {c.education?.map((edu, i) => (
                                <div key={i} className="bg-slate-50 p-4 rounded-lg">
                                    <p className="font-bold text-sm">{edu.degree}</p>
                                    <p className="text-xs text-slate-600">{edu.institution}</p>
                                    <p className="text-[10px] text-slate-400">{edu.year}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Right Side: AI Assessment & Skills */}
                <div className="space-y-6">
                    <Card className="bg-indigo-900 text-white">
                        <CardHeader><CardTitle className="text-indigo-200 flex items-center gap-2"><Star size={18}/> AI Assessment</CardTitle></CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div className="flex justify-between"><span>Technical Fit</span><span className="font-bold">{c.aiAssessment?.technicalFit}/10</span></div>
                            <div className="flex justify-between"><span>Cultural Fit</span><span className="font-bold">{c.aiAssessment?.culturalFit}/10</span></div>
                            <hr className="border-indigo-800" />
                            <div>
                                <p className="font-bold mb-2 text-indigo-300">Strengths</p>
                                <ul className="space-y-1 opacity-90 italic">
                                    {c.aiAssessment?.strengths?.map((s, i) => <li key={i}>+ {s}</li>)}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader><CardTitle className="flex items-center gap-2"><Award size={18}/> Technical Skills</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Advanced</p>
                                <div className="flex flex-wrap gap-1">
                                    {c.skills?.technicalSkills?.advanced?.map(s => <Badge key={s} className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 border-none">{s}</Badge>)}
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Soft Skills</p>
                                <div className="flex flex-wrap gap-1">
                                    {c.skills?.softSkills?.map(s => <Badge key={s} variant="outline" className="text-[10px]">{s}</Badge>)}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CandidateProfile;