import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, BicepsFlexed, Scale } from 'lucide-react';
import { cn } from '../utils';

const WorkoutSuggestions = () => {
    const [level, setLevel] = useState('intermediate'); // beginner, intermediate, advanced

    const levels = ['beginner', 'intermediate', 'advanced'];

    const goals = [
        {
            title: "Weight Loss",
            icon: Flame,
            color: "text-red-500",
            bg: "bg-red-500/10",
            border: "border-red-500/20",
            desc: "High intensity cardio and HIIT workouts to burn calories."
        },
        {
            title: "Muscle Gain",
            icon: BicepsFlexed, // Using generic fallback if not available, but lucide has it
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            desc: "Strength training focused on hypertrophy and compound movements."
        },
        {
            title: "Maintenance",
            icon: Scale,
            color: "text-green-500",
            bg: "bg-green-500/10",
            border: "border-green-500/20",
            desc: "Balanced mix of cardio and strength to keep you fit."
        }
    ];

    return (
        <div className="space-y-8 animate-in fade-in zoom-in duration-300">
            {/* Level Selector */}
            <div className="flex justify-center">
                <div className="bg-[#1e293b] p-1 rounded-xl inline-flex border border-[#334155]">
                    {levels.map((l) => (
                        <button
                            key={l}
                            onClick={() => setLevel(l)}
                            className={cn(
                                "px-6 py-2 rounded-lg text-sm font-medium capitalize transition-all",
                                level === l
                                    ? "bg-primary text-black shadow-lg shadow-cyan-500/20"
                                    : "text-gray-400 hover:text-white"
                            )}
                        >
                            {l}
                        </button>
                    ))}
                </div>
            </div>

            {/* Goal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {goals.map((goal, idx) => {
                    const Icon = goal.icon;
                    return (
                        <motion.div
                            key={goal.title}
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-6 rounded-xl border ${goal.border} ${goal.bg} flex flex-col items-center text-center`}
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-surface border border-white/5`}>
                                <Icon size={32} className={goal.color} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{goal.title}</h3>
                            <p className="text-sm text-gray-400">{goal.desc}</p>
                            <button className="mt-6 text-xs font-bold uppercase tracking-wider text-white bg-surface py-2 px-4 rounded border border-white/10 hover:border-white/30 transition-colors">
                                View Plan
                            </button>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default WorkoutSuggestions;
