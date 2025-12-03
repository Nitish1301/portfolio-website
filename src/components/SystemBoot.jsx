import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SystemBoot = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [isBooting, setIsBooting] = useState(true);

    const bootSequence = [
        "Initializing System Kernel...",
        "Loading Core Modules...",
        "Verifying Integrity...",
        "Mounting File Systems...",
        "> User: Nitish Gupta detected",
        "> Access Level: Admin",
        "Starting Interface Services...",
        "Connecting to Neural Network...",
        "System Online."
    ];

    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < bootSequence.length) {
                setLines(prev => [...prev, bootSequence[currentIndex]]);
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setIsBooting(false);
                    setTimeout(onComplete, 500); // Wait for exit animation
                }, 800);
            }
        }, 150); // Speed of text appearance

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isBooting && (
                <motion.div
                    className="fixed inset-0 bg-black z-[10000] flex items-center justify-center font-mono text-green-500 p-8 overflow-hidden"
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-full max-w-2xl">
                        <div className="mb-4 text-xs text-gray-500 border-b border-gray-800 pb-2 flex justify-between">
                            <span>BOOT_SEQUENCE_V2.0</span>
                            <span>{new Date().toISOString().split('T')[0]}</span>
                        </div>
                        <div className="space-y-2">
                            {lines.map((line, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-center gap-3"
                                >
                                    <span className="text-gray-600">[{String(index * 124).padStart(4, '0')}]</span>
                                    <span className={index === bootSequence.length - 1 ? "text-cyan-400 font-bold" : ""}>
                                        {line}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            className="mt-4 h-1 bg-green-500/20 rounded-full overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <motion.div
                                className="h-full bg-green-500"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "linear" }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SystemBoot;
