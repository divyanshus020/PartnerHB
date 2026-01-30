import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { Button } from "@/components/ui/button";
import api from '../services/api';
import { toast } from 'sonner';
import { Upload, FileText, X, AlertCircle } from 'lucide-react';

const UploadCandidate = () => {
    const { jobId } = useParams();
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        // Restriction: Only PDF/Doc and Max 5 files at a time for safety
        const validFiles = selectedFiles.filter(file => 
            (file.type === 'application/pdf' || file.type.includes('word')) && 
            file.size <= 10 * 1024 * 1024 // 10MB limit
        );
        
        if (validFiles.length !== selectedFiles.length) {
            toast.error("Some files were rejected. Only PDFs under 10MB are allowed.");
        }
        setFiles([...files, ...validFiles]);
    };

    const removeFile = (index) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const handleBulkUpload = async () => {
        if (files.length === 0) return;
        setUploading(true);
        setProgress(0);
        
        let successCount = 0;
        const BATCH_SIZE = 10;

        // Iterate through the files in chunks of BATCH_SIZE
        for (let i = 0; i < files.length; i += BATCH_SIZE) {
            const chunk = files.slice(i, i + BATCH_SIZE);
            
            // Prepare the FormData for this batch
            const data = new FormData();
            chunk.forEach((file) => {
                data.append('resumes', file); // Matches the backend key
            });
            data.append('source', 'PARTNER_BULK_UPLOAD');

            try {
                // Send the batch of 10
                const response = await api.post(`/partner/jobs/${jobId}/upload`, data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });

                if (response.data.success) {
                    successCount += chunk.length;
                }

                // Update progress based on total files processed
                const completedSoFar = Math.min(i + BATCH_SIZE, files.length);
                setProgress((completedSoFar / files.length) * 100);

            } catch (err) {
                console.error(`Batch starting at ${i} failed:`, err.response?.data || err.message);
                toast.error(`Error in batch starting at file ${i + 1}`);
            }
        }

        toast.success(`Successfully queued ${successCount} candidates!`);
        setUploading(false);
        setFiles([]);
    };

    return (
        <DashboardLayout>
            <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold">Bulk Upload Resumes</h1>
                    <p className="text-muted-foreground">Select multiple resumes. Our AI will parse details automatically.</p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl mb-6 flex items-start gap-3">
                    <div className="text-amber-600 mt-0.5">
                        <AlertCircle size={20} />
                    </div>
                    <div>
                        <p className="text-sm text-amber-800 font-medium">Smart Deduplication Active</p>
                        <p className="text-xs text-amber-700 mt-1">
                            If a candidate has already been submitted for this job, their existing profile 
                            will be updated with the new resume and AI analysis. No duplicate entries will be created.
                        </p>
                    </div>
                </div>
                <div className="border-2 border-dashed border-indigo-200 dark:border-neutral-800 rounded-3xl p-12 text-center bg-white dark:bg-neutral-900">
                    <input 
                        type="file" id="bulk-file" multiple accept=".pdf" 
                        className="hidden" onChange={handleFileChange}
                    />
                    <label htmlFor="bulk-file" className="cursor-pointer flex flex-col items-center gap-4">
                        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                            <Upload size={32} />
                        </div>
                        <span className="font-medium text-lg">Click to select files</span>
                        <span className="text-sm text-muted-foreground">PDF only (Max 10MB each)</span>
                    </label>
                </div>

                {files.length > 0 && (
                    <div className="space-y-3">
                        {files.map((file, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-white dark:bg-neutral-900 border rounded-xl">
                                <div className="flex items-center gap-3">
                                    <FileText className="text-indigo-500" />
                                    <span className="text-sm font-medium truncate max-w-[200px]">{file.name}</span>
                                </div>
                                <button onClick={() => removeFile(idx)}><X size={16} className="text-red-500" /></button>
                            </div>
                        ))}
                        <Button className="w-full h-12" onClick={handleBulkUpload} disabled={uploading}>
                            {uploading ? `Uploading ${Math.round(progress)}%` : `Upload ${files.length} Files`}
                        </Button>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};
export default UploadCandidate;