import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchMeals = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Dummy data for "Today's Added Meals"
    const addedMeals = [
        { id: 1, name: 'Oatmeal with Blueberries', calories: 350, protein: 12, carbs: 45 },
        { id: 2, name: 'Chicken Breast Salad', calories: 450, protein: 45, carbs: 10 },
    ];

    return (
        <div className="space-y-8 animate-in fade-in zoom-in duration-300">
            <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="h-6 w-6 text-gray-500" />
                </div>
                <input
                    type="text"
                    placeholder="Search from our database..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-surface border border-[#334155] text-white text-lg rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-lg placeholder-gray-500 transition-all"
                />
            </div>

            <div>
                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4">Today's Added Meals</h3>
                <div className="space-y-3">
                    {addedMeals.map((meal, index) => (
                        <motion.div
                            key={meal.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface p-4 rounded-xl border border-[#334155] flex justify-between items-center group hover:border-primary/50 transition-colors"
                        >
                            <div>
                                <h4 className="font-semibold text-white">{meal.name}</h4>
                                <div className="flex gap-3 text-xs text-gray-400 mt-1">
                                    <span>{meal.calories} kcal</span>
                                    <span className="w-1 h-3 border-r border-[#334155]"></span>
                                    <span className="text-green-400">{meal.protein}g Protein</span>
                                    <span className="w-1 h-3 border-r border-[#334155]"></span>
                                    <span className="text-yellow-400">{meal.carbs}g Carbs</span>
                                </div>
                            </div>
                            <button className="p-2 rounded-lg bg-[#334155] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white hover:bg-red-500/20">
                                <Plus className="rotate-45" size={20} />
                            </button>
                        </motion.div>
                    ))}
                    {addedMeals.length === 0 && (
                        <p className="text-gray-500 text-center py-8">No meals added today.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchMeals;
