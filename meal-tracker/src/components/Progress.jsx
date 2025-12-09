import React from 'react';
import { BarChart } from 'lucide-react';

const Progress = () => {
    return (
        <div className="animate-in fade-in zoom-in duration-300">
            <h2 className="text-xl font-bold text-white mb-6">Calorie Tracking - Last 7 Days</h2>

            <div className="bg-surface rounded-xl p-8 border border-[#334155] flex flex-col items-center justify-center min-h-[300px]">
                <BarChart className="w-16 h-16 text-gray-600 mb-4 opacity-50" />
                <p className="text-gray-400 text-lg">Chart Placeholder</p>
                <p className="text-xs text-gray-600 mt-2">Charts will be implemented using a library like Chart.js or Recharts here.</p>

                {/* Visual simulation of bars */}
                <div className="flex items-end gap-4 mt-8 h-32">
                    {[40, 60, 30, 80, 50, 70, 45].map((h, i) => (
                        <div key={i} className="w-8 bg-primary/20 hover:bg-primary/50 transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Progress;
