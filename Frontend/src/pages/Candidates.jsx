import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Ensure you have a Badge component or use a div
import { FileText, Search, User, Briefcase, Clock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Candidates = () => {
    const [candidates, setCandidates] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate=useNavigate();
    useEffect(() => {
        const fetchUploads = async () => {
            try {
                const res = await api.get('/partner/uploads');
                setCandidates(res.data.candidates);
            } catch (err) {
                console.error("Error fetching uploads", err);
            } finally {
                setLoading(false);
            }
        };
        fetchUploads();
    }, []);

    // Filter candidates based on search input
    const filteredCandidates = candidates.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.jobId?.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status) => {
        switch (status?.toUpperCase()) {
            case 'PENDING REVIEW': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'SHORTLISTED': return 'bg-green-100 text-green-700 border-green-200';
            case 'REJECTED': return 'bg-red-100 text-red-700 border-red-200';
            default: return 'bg-neutral-100 text-neutral-700 border-neutral-200';
        }
    };

    return (
        <DashboardLayout>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold">My Uploads</h1>
                    <p className="text-muted-foreground">Track the status of candidates you've submitted.</p>
                </div>
                
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                        placeholder="Search candidates or jobs..." 
                        className="pl-10" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <Card className="border-none shadow-sm overflow-hidden bg-white dark:bg-neutral-900">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-neutral-50 dark:bg-neutral-800/50 border-b border-border">
                                <tr>
                                    <th className="p-4 font-semibold text-sm">Candidate</th>
                                    <th className="p-4 font-semibold text-sm">Applied Job</th>
                                    <th className="p-4 font-semibold text-sm">Uploaded Date</th>
                                    <th className="p-4 font-semibold text-sm">Status</th>
                                    <th className="p-4 font-semibold text-sm">Resume</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {loading ? (
                                    <tr><td colSpan="5" className="p-8 text-center text-muted-foreground">Loading candidates...</td></tr>
                                ) : filteredCandidates.length === 0 ? (
                                    <tr><td colSpan="5" className="p-8 text-center text-muted-foreground">No candidates found.</td></tr>
                                ) : (
                                    filteredCandidates.map((c) => (
                                        <tr key={c._id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                                            <td className="p-4">
                                                <div 
                                                    className="flex items-center gap-3 cursor-pointer group"
                                                    onClick={() => navigate(`/candidates/${c._id}`)}
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                        <User size={16} />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium group-hover:text-primary group-hover:underline">{c.name}</div>
                                                        <div className="text-xs text-muted-foreground">{c.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Briefcase size={14} className="text-muted-foreground" />
                                                    {c.jobId?.jobTitle || "Deleted Job"}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Clock size={14} />
                                                    {new Date(c.createdAt).toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded-full text-[10px] font-bold border ${getStatusColor(c.hrFeedback)}`}>
                                                    {c.hrFeedback || "PENDING"}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <a 
                                                    href={`${import.meta.env.VITE_SERVER_URL}${c.resumeUrl}`} 
                                                    target="_blank" 
                                                    rel="noreferrer"
                                                    className="text-primary hover:text-indigo-600 transition-colors"
                                                >
                                                    <FileText size={20} />
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </DashboardLayout>
    );
};

export default Candidates;