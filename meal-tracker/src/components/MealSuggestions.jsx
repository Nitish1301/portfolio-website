import React from 'react';
import { motion } from 'framer-motion';

const MealSuggestions = () => {
    const categories = [
        {
            id: 1,
            title: 'North Indian Favorites',
            color: 'bg-[#1e3a8a]', // Dark Blue-ish
            items: [
                { name: 'Rajma Chawal', cal: 400 },
                { name: 'Paneer Butter Masala', cal: 350 },
                { name: 'Aloo Paratha', cal: 280 }
            ]
        },
        {
            id: 2,
            title: 'South Indian Delights',
            color: 'bg-[#14532d]', // Dark Green-ish
            items: [
                { name: 'Idli (2 pcs)', cal: 70 },
                { name: 'Masala Dosa', cal: 180 },
                { name: 'Sambar Vada', cal: 250 }
            ]
        },
        {
            id: 3,
            title: 'Healthy Snacks',
            color: 'bg-[#451a03]', // Dark Brown
            items: [
                { name: 'Roasted Chana', cal: 120 },
                { name: 'Sprouts Salad', cal: 150 },
                { name: 'Masala Oats', cal: 200 }
            ]
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-300">
            {categories.map((cat, idx) => (
                <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`${cat.color} rounded-xl p-6 shadow-lg border border-white/5 relative overflow-hidden`}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <div className="w-24 h-24 rounded-full bg-white blur-2xl"></div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">{cat.title}</h3>

                    <ul className="space-y-3 relative z-10 text-white/90">
                        {cat.items.map((item, i) => (
                            <li key={i} className="flex justify-between items-center text-sm border-b border-white/10 pb-2 last:border-0">
                                <span>{item.name}</span>
                                <span className="font-mono text-white/70">{item.cal} cal</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
    );
};

export default MealSuggestions;
