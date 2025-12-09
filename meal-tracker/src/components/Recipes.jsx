import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, Leaf, Drumstick } from 'lucide-react';
import { cn } from '../utils';

const RECIPES = [
    {
        id: 1,
        name: "Dal Chawal",
        type: "veg",
        calories: 250,
        time: "40 mins",
        image: "https://images.unsplash.com/photo-1626500678749-4054dca4cd92?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        name: "Chicken Curry",
        type: "non-veg",
        calories: 350,
        time: "50 mins",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        name: "Paneer Tikka",
        type: "veg",
        calories: 320,
        time: "30 mins",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 4,
        name: "Egg Curry",
        type: "non-veg",
        calories: 280,
        time: "45 mins",
        image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?auto=format&fit=crop&q=80&w=600"
    }
];

const Recipes = () => {
    const [filter, setFilter] = useState('all'); // all, veg, non-veg

    const filteredRecipes = RECIPES.filter(r => {
        if (filter === 'all') return true;
        return r.type === filter;
    });

    return (
        <div className="space-y-6">
            {/* Filters */}
            <div className="flex gap-3 overflow-x-auto pb-2">
                <button
                    onClick={() => setFilter('all')}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-primary/20 hover:text-primary",
                        filter === 'all' ? "bg-primary text-black" : "bg-[#1e293b] text-gray-400 border border-[#334155]"
                    )}
                >
                    All Recipes
                </button>
                <button
                    onClick={() => setFilter('veg')}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 hover:bg-green-500/20 hover:text-green-500",
                        filter === 'veg' ? "bg-green-600 text-white" : "bg-[#1e293b] text-gray-400 border border-[#334155]"
                    )}
                >
                    <Leaf size={14} /> Vegetarian
                </button>
                <button
                    onClick={() => setFilter('non-veg')}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 hover:bg-red-500/20 hover:text-red-500",
                        filter === 'non-veg' ? "bg-red-600 text-white" : "bg-[#1e293b] text-gray-400 border border-[#334155]"
                    )}
                >
                    <Drumstick size={14} /> Non-Vegetarian
                </button>
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredRecipes.map((recipe) => (
                        <motion.div
                            layout
                            key={recipe.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-surface rounded-xl overflow-hidden border border-[#334155] group hover:border-primary/50 transition-all"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 left-3">
                                    <span className={cn(
                                        "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border",
                                        recipe.type === 'veg'
                                            ? "bg-green-950/80 text-green-400 border-green-500/30"
                                            : "bg-red-950/80 text-red-400 border-red-500/30"
                                    )}>
                                        {recipe.type === 'veg' ? 'VEG' : 'NON-VEG'}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{recipe.name}</h3>
                                </div>

                                <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                                    <span className="flex items-center gap-1"><Clock size={12} /> {recipe.time}</span>
                                    <span className="text-primary font-mono">{recipe.calories} kcal</span>
                                </div>

                                <button className="w-full py-2.5 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary hover:text-black transition-all">
                                    View Full Recipe
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Recipes;
