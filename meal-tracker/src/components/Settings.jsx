import React, { useState } from 'react';
import { User, Bell, Trash2, Moon, Sun } from 'lucide-react';
import { cn } from '../utils';

const Settings = ({ onLogout }) => {
    const [darkMode, setDarkMode] = useState(true);
    const [reminders, setReminders] = useState(false);

    return (
        <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Profile Section */}
            <div className="bg-surface p-6 rounded-xl border border-[#334155]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <User size={20} className="text-primary" /> Profile
                </h3>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-slate-700"></div>
                    <div>
                        <p className="font-semibold text-white">John Doe</p>
                        <p className="text-sm text-gray-400">john.doe@example.com</p>
                    </div>
                    <button className="ml-auto px-4 py-2 bg-primary text-black font-bold rounded-lg text-sm hover:bg-secondary transition-colors">
                        Update Profile
                    </button>
                </div>
            </div>

            {/* Preferences */}
            <div className="bg-surface p-6 rounded-xl border border-[#334155] space-y-6">
                <h3 className="text-lg font-bold text-white mb-2">Preferences</h3>

                {/* Dark Mode Toggle */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-800 rounded-lg text-gray-300"><Moon size={18} /></div>
                        <div>
                            <p className="text-white font-medium">Dark Mode</p>
                            <p className="text-xs text-gray-400">Use dark theme across the app</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={cn("w-12 h-6 rounded-full transition-colors relative", darkMode ? "bg-primary" : "bg-slate-600")}
                    >
                        <div className={cn("w-4 h-4 rounded-full bg-white absolute top-1 transition-all", darkMode ? "left-7" : "left-1")} />
                    </button>
                </div>

                {/* Reminders Toggle */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-800 rounded-lg text-gray-300"><Bell size={18} /></div>
                        <div>
                            <p className="text-white font-medium">Meal Reminders</p>
                            <p className="text-xs text-gray-400">Get notified for breakfast, lunch, dinner</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setReminders(!reminders)}
                        className={cn("w-12 h-6 rounded-full transition-colors relative", reminders ? "bg-primary" : "bg-slate-600")}
                    >
                        <div className={cn("w-4 h-4 rounded-full bg-white absolute top-1 transition-all", reminders ? "left-7" : "left-1")} />
                    </button>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-500/5 p-6 rounded-xl border border-red-500/20">
                <h3 className="text-lg font-bold text-red-400 mb-4">Danger Zone</h3>
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Irreversibly clear all your tracking data.</p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/50 rounded-lg text-sm hover:bg-red-500 hover:text-white transition-all">
                        <Trash2 size={16} /> Clear All Data
                    </button>
                </div>
            </div>

            <div className="text-center pt-4">
                <button onClick={onLogout} className="text-gray-500 hover:text-white text-sm underline">Log Out</button>
            </div>
        </div>
    );
};

export default Settings;
