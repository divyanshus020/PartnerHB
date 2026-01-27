import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Users, LogOut, UserCircle, Menu, X } from 'lucide-react';
// import { Button } from "@/components/ui/button";
import api  from '../services/api'; 
const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [partner, setPartner] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get('/partner/auth/profile');
                setPartner(res.data.partner);
            } catch (err) {
                navigate('/auth');
            }
        };
        fetchProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/auth');
    };

    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { name: 'Shared Jobs', path: '/jobs', icon: Briefcase },
        { name: 'My Uploads', path: '/candidates', icon: Users },
    ];

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex">
            {/* Sidebar */}
            <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-white dark:bg-neutral-900 border-r border-border flex flex-col z-50`}>
                <div className="p-6 flex items-center justify-between">
                    {isSidebarOpen && <Link to="/dashboard" className="font-bold text-xl text-primary">PartnerHB</Link>}
                    <button onClick={() => setSidebarOpen(!isSidebarOpen)}><Menu size={20}/></button>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            to={item.path}
                            className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${location.pathname === item.path ? 'bg-primary text-white' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-muted-foreground'}`}
                        >
                            <item.icon size={20} />
                            {isSidebarOpen && <span className="font-medium">{item.name}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-border">
                    <button onClick={handleLogout} className="flex items-center gap-4 p-3 w-full text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors">
                        <LogOut size={20} />
                        {isSidebarOpen && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white dark:bg-neutral-900 border-b border-border flex items-center justify-end px-8 gap-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold">{partner?.partnerName}</p>
                        <p className="text-xs text-muted-foreground">{partner?.organizationName}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-primary">
                        <UserCircle size={28} />
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;