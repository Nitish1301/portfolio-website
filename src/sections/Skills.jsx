import { motion } from 'framer-motion';
import { CircularProgress, RadarChart, DigitalGauge } from '../components/DataViz';
import ParticleBackground from '../components/ParticleBackground';

const Skills = () => {
    const frontendData = [
        { label: 'React', value: 90 },
        { label: 'GSAP', value: 85 },
        { label: 'JS', value: 95 },
        { label: 'HTML', value: 100 },
        { label: 'CSS', value: 95 },
        { label: 'Tailwind', value: 90 },
    ];

    const toolsData = [
        { label: 'C++', value: 95 },
        { label: 'Python', value: 80 },
        { label: 'Git', value: 85 },
        { label: 'GitHub', value: 90 },
        { label: 'Codolio', value: 75 },
    ];

    const theoryConcepts = [
        'object-oriented-programming',
        'data-structures-and-algorithms',
        'system-design-basics',
        'database-management-systems',
        'operating-systems',
        'computer-networks',
        'software-engineering-principles',
        'agile-methodologies',
        'rest-api-design',
        'microservices-architecture'
    ];

    return (
        <section id="skills" className="relative min-h-screen py-20 bg-[#111] overflow-hidden">
            <ParticleBackground />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">Skills & Proficiency</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm">
                        A visual representation of my technical expertise and competitive programming achievements.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* DSA Stats Terminal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1e1e1e]/90 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 shadow-xl flex flex-col hover:border-cyan-400/50 hover:shadow-cyan-400/20 hover:-translate-y-2 transition-all duration-300 relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <div className="bg-[#2d2d2d] px-4 py-2 border-b border-gray-700 flex justify-between items-center">
                            <span className="text-gray-300 font-mono text-xs font-bold">DSA Diagnostics</span>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full border border-gray-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full border border-gray-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full border border-gray-500"></div>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col items-center justify-center gap-8">
                            <CircularProgress value={340} max={500} label="Problems Solved" subLabel="LeetCode + GFG + CodeForces" />
                            <div className="w-full space-y-6">
                                <DigitalGauge value={1450} max={2000} label="LeetCode Rating" />
                                <DigitalGauge value={900} max={2000} label="CodeForces Rating" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Frontend Radar Terminal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#1e1e1e]/90 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 shadow-xl flex flex-col hover:border-cyan-400/50 hover:shadow-cyan-400/20 hover:-translate-y-2 transition-all duration-300 relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <div className="bg-[#2d2d2d] px-4 py-2 border-b border-gray-700 flex justify-between items-center">
                            <span className="text-gray-300 font-mono text-xs font-bold">Front-End Stack</span>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full border border-gray-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full border border-gray-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full border border-gray-500"></div>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col items-center justify-center">
                            <RadarChart data={frontendData} label="Proficiency Matrix" />
                        </div>
                    </motion.div>

                    {/* Tools Radar Terminal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#1e1e1e]/90 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 shadow-xl flex flex-col hover:border-cyan-400/50 hover:shadow-cyan-400/20 hover:-translate-y-2 transition-all duration-300 relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <div className="bg-[#2d2d2d] px-4 py-2 border-b border-gray-700 flex justify-between items-center">
                            <span className="text-gray-300 font-mono text-xs font-bold">Languages & Tools</span>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full border border-gray-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full border border-gray-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full border border-gray-500"></div>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col items-center justify-center">
                            <RadarChart data={toolsData} label="Proficiency Matrix" />
                        </div>
                    </motion.div>
                </div>

                {/* Theoretical Knowledge Base Terminal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-[#1e1e1e]/90 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 shadow-xl"
                >
                    <div className="bg-[#2d2d2d] px-4 py-2 border-b border-gray-700 flex justify-between items-center">
                        <span className="text-gray-300 font-mono text-xs font-bold">&gt; Theoretical Knowledge Base</span>
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full border border-gray-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full border border-gray-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full border border-gray-500"></div>
                        </div>
                    </div>
                    <div className="p-6 font-mono text-sm md:text-base grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-400">
                        {theoryConcepts.map((concept, index) => (
                            <div key={index} className="hover:text-cyan-400 transition-colors cursor-default">
                                <span className="text-gray-600 mr-2">$</span>
                                {concept}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
