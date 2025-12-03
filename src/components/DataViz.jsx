import { motion } from 'framer-motion';

export const CircularProgress = ({ value, max, label, subLabel }) => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const progress = (value / max) * circumference;

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke="#333"
                        strokeWidth="8"
                        fill="transparent"
                    />
                    <motion.circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke="#007bff"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: circumference - progress }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-3xl font-bold text-white font-mono"
                    >
                        {value}+
                    </motion.span>
                </div>
            </div>
            <div className="mt-4 text-center">
                <div className="text-white font-bold text-lg">{label}</div>
                <div className="text-gray-400 text-sm">{subLabel}</div>
            </div>
        </div>
    );
};

export const RadarChart = ({ data, label }) => {
    const size = 200;
    const center = size / 2;
    const radius = 80;
    const angleStep = (Math.PI * 2) / data.length;

    const points = data.map((item, i) => {
        const value = item.value / 100;
        const angle = i * angleStep - Math.PI / 2;
        const x = center + Math.cos(angle) * (radius * value);
        const y = center + Math.sin(angle) * (radius * value);
        return `${x},${y}`;
    }).join(' ');

    const bgPoints = data.map((_, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const x = center + Math.cos(angle) * radius;
        const y = center + Math.sin(angle) * radius;
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-[240px] h-[240px] flex items-center justify-center">
                <svg width={size} height={size} className="overflow-visible">
                    <polygon points={bgPoints} fill="rgba(255,255,255,0.05)" stroke="#333" strokeWidth="1" />
                    <motion.polygon
                        points={points}
                        fill="rgba(0, 123, 255, 0.2)"
                        stroke="#007bff"
                        strokeWidth="2"
                        initial={{ scale: 0, opacity: 0, transformOrigin: 'center' }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}
                    />
                    {data.map((item, i) => {
                        const angle = i * angleStep - Math.PI / 2;
                        const x = center + Math.cos(angle) * (radius + 30);
                        const y = center + Math.sin(angle) * (radius + 30);
                        return (
                            <text
                                key={i}
                                x={x}
                                y={y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#ccc"
                                fontSize="11"
                                className="font-sans font-medium"
                            >
                                {item.label}
                            </text>
                        );
                    })}
                </svg>
            </div>
            <div className="text-white font-bold text-lg">{label}</div>
        </div>
    );
};

export const DigitalGauge = ({ value, max, label }) => {
    const percentage = (value / max) * 100;

    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between mb-2">
                <span className="text-gray-400 text-sm font-medium">{label}</span>
                <span className="text-electric-blue font-bold font-mono">{value}</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-electric-blue"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                />
            </div>
        </div>
    );
};
