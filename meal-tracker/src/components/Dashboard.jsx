import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Target, Plus } from 'lucide-react';

const Dashboard = ({ userData }) => {
    // BMI Calculation
    // BMI = weight (kg) / (height (m))^2
    const heightM = userData.height / 100;
    const bmi = (userData.weight / (heightM * heightM)).toFixed(1);

    let bmiStatus = "Normal";
    let statusColor = "bg-green-500";
    if (bmi < 18.5) {
        bmiStatus = "Underweight";
        statusColor = "bg-orange-500";
    } else if (bmi >= 25 && bmi < 30) {
        bmiStatus = "Overweight";
        statusColor = "bg-yellow-500";
    } else if (bmi >= 30) {
        bmiStatus = "Obese";
        statusColor = "bg-red-500";
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-300">

            {/* Card 1: BMI Calculator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-surface p-6 rounded-xl border border-[#334155]"
            >
                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <AlertCircle size={16} /> BMI Score
                </h3>
                <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-bold text-white">{bmi}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${statusColor}`}>
                        {bmiStatus}
                    </span>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between border-b border-[#334155] pb-2">
                        <span>Height</span>
                        <span className="text-white">{userData.height} cm</span>
                    </div>
                    <div className="flex justify-between border-b border-[#334155] pb-2">
                        <span>Weight</span>
                        <span className="text-white">{userData.weight} kg</span>
                    </div>
                    <div className="flex justify-between pt-1">
                        <span>Age</span>
                        <span className="text-white">{userData.age} yrs</span>
                    </div>
                </div>
            </motion.div>

            {/* Card 2: Fitness Goal */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-surface p-6 rounded-xl border border-[#334155]"
            >
                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Target size={16} /> Daily Target
                </h3>
                <div className="text-center py-4">
                    <span className="text-5xl font-bold text-primary">{userData.tdee}</span>
                    <p className="text-sm text-gray-400 mt-1">Calories / Day</p>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                    <button className="p-2 rounded-lg bg-[#334155] hover:bg-primary/20 hover:text-primary text-xs font-medium transition-colors text-white">
                        Lose
                    </button>
                    <button className="p-2 rounded-lg bg-primary/20 text-primary border border-primary/50 text-xs font-medium transition-colors">
                        Maintain
                    </button>
                    <button className="p-2 rounded-lg bg-[#334155] hover:bg-primary/20 hover:text-primary text-xs font-medium transition-colors text-white">
                        Gain
                    </button>
                </div>
            </motion.div>

            {/* Card 3: Today's Meals */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-surface p-6 rounded-xl border border-[#334155] flex flex-col"
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Today's Meals</h3>
                    <button className="p-1.5 rounded-full bg-primary text-black hover:bg-secondary transition-colors">
                        <Plus size={16} />
                    </button>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
                    <div className="w-full bg-[#334155] rounded-full h-3 overflow-hidden">
                        <div className="h-full bg-blue-500 w-[0%]" />
                    </div>
                    <p className="text-2xl font-bold text-white">0 <span className="text-sm font-normal text-gray-400">kcal consumed</span></p>

                    <div className="w-full grid grid-cols-2 gap-4 text-xs">
                        <div>
                            <div className="flex justify-between mb-1 text-gray-400">
                                <span>Protein</span>
                                <span>0g</span>
                            </div>
                            <div className="w-full bg-[#334155] rounded-full h-1.5">
                                <div className="h-full bg-green-500 w-[0%]" />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1 text-gray-400">
                                <span>Carbs</span>
                                <span>0g</span>
                            </div>
                            <div className="w-full bg-[#334155] rounded-full h-1.5">
                                <div className="h-full bg-yellow-500 w-[0%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default Dashboard;
