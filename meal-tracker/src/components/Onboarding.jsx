import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import { cn } from '../utils';

const Onboarding = ({ onComplete }) => {
    const [formData, setFormData] = useState({
        gender: 'male',
        age: '',
        weight: '',
        height: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.age || !formData.weight || !formData.height) return;

        // Calculate BMR (Miffin-St Jeor Equation)
        // Men: 10W + 6.25H - 5A + 5
        // Women: 10W + 6.25H - 5A - 161
        const { gender, age, weight, height } = formData;
        let bmr = 10 * weight + 6.25 * height - 5 * age;
        bmr += gender === 'male' ? 5 : -161;

        // Save to localStorage or just pass up (for now we assume simple state)
        // TDEE usually BMR * 1.2 for sedentary. We'll set a default goal.
        const tdee = Math.round(bmr * 1.2);

        // We can pass user data back
        onComplete({ ...formData, bmr, tdee });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-surface p-8 rounded-xl shadow-2xl border border-[#334155] z-10"
            >
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                        <Activity size={32} />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Welcome to NutriFit</h1>
                    <p className="text-gray-400 text-sm">Let's get to know you to personalize your plan.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full bg-[#334155] text-white p-3 rounded-lg border border-transparent focus:border-primary focus:outline-none transition-colors appearance-none"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Age (Years)</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="25"
                                className="w-full bg-[#334155] text-white p-3 rounded-lg border border-transparent focus:border-primary focus:outline-none transition-colors"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Weight (kg)</label>
                            <input
                                type="number"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                placeholder="70"
                                className="w-full bg-[#334155] text-white p-3 rounded-lg border border-transparent focus:border-primary focus:outline-none transition-colors"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Height (cm)</label>
                        <input
                            type="number"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            placeholder="175"
                            className="w-full bg-[#334155] text-white p-3 rounded-lg border border-transparent focus:border-primary focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full mt-6 bg-primary hover:bg-secondary text-black font-bold py-3.5 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                    >
                        Get Started <ArrowRight size={18} />
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Onboarding;
