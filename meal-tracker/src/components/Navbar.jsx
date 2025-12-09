import React from 'react';
import { Home, Search, Lightbulb, ChefHat, Dumbbell, BarChart, Settings, Moon, Sun } from 'lucide-react';
import { cn } from '../utils';

const TABS = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'search', label: 'Search Meals', icon: Search },
    { id: 'meals', label: 'Meal Suggestions', icon: Lightbulb },
    { id: 'recipes', label: 'Recipes', icon: ChefHat },
    { id: 'workout', label: 'Workout Suggestions', icon: Dumbbell },
    { id: 'progress', label: 'Progress Reports', icon: BarChart },
    { id: 'settings', label: 'Settings', icon: Settings },
];

const Navbar = ({ activeTab, onTabChange }) => {
    return (
        <nav className="sticky top-0 z-50 bg-[#0f172a] border-b border-[#334155] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                            <Dumbbell size={20} />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Meal & Fitness Tracker
                        </span>
                    </div>

                    <button className="p-2 rounded-lg bg-[#334155] text-gray-300 hover:text-white transition-colors">
                        <Moon size={20} />
                    </button>
                </div>

                {/* Scrollable Tabs */}
                <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-1">
                    {TABS.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => onTabChange(tab.id)}
                                className={cn(
                                    "flex items-center gap-2 pb-3 text-sm font-medium transition-all border-b-2 whitespace-nowrap",
                                    isActive
                                        ? "border-primary text-primary"
                                        : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-700"
                                )}
                            >
                                <Icon size={16} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
