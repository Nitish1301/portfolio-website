import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import { CircularProgress, RadarChart, DigitalGauge } from '../components/DataViz';

const Skills = () => {
    const frontendData = [
        { label: 'React', value: 90 },
        { label: 'Tailwind', value: 95 },
        { label: 'GSAP', value: 75 },
        { label: 'JS', value: 85 },
        { label: 'CSS', value: 95 },
        { label: 'HTML', value: 95 }
    ];

    const toolsData = [
        { label: 'C++', value: 85 },
        { label: 'Python', value: 80 },
        { label: 'Git', value: 90 },
        { label: 'GitHub', value: 90 },
        { label: 'Codolio', value: 70 }
    ];

    return (
        <section id="skills" className="relative py-20 bg-white dark:bg-[#111] transition-colors duration-300 overflow-hidden">
            <ParticleBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center font-montserrat text-gray-900 dark:text-white"
                >
                    Skills & <span className="text-electric-blue">Proficiency</span>
                    <p className="text-base font-normal text-gray-500 mt-4 max-w-2xl mx-auto">
                        A visual representation of my technical expertise and competitive programming achievements.
                    </p>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Column 1: DSA Progress */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gray-50 dark:bg-[#1e1e1e] rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-electric-blue/50 transition-all duration-300"
                    >
                        <h3 className="text-xl font-bold mb-8 text-center text-gray-900 dark:text-white">DSA Progress</h3>

                        <div className="mb-8">
                            <CircularProgress
                                value={340}
                                max={500}
                                label="Problems Solved"
                                subLabel="LeetCode + GFG + CodeForces"
                            />
                        </div>

                        <div className="space-y-6 mt-8">
                            <DigitalGauge value={1450} max={2000} label="LeetCode Rating" />
                            <DigitalGauge value={900} max={2000} label="CodeForces Rating" />
                        </div>
                    </motion.div>

                    {/* Column 2: Front-End Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 dark:bg-[#1e1e1e] rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-electric-blue/50 transition-all duration-300 flex flex-col items-center"
                    >
                        <h3 className="text-xl font-bold mb-8 text-center text-gray-900 dark:text-white">Front-End Stack</h3>
                        <RadarChart data={frontendData} label="Proficiency Matrix" />
                    </motion.div>

                    {/* Column 3: Languages & Tools */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gray-50 dark:bg-[#1e1e1e] rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-electric-blue/50 transition-all duration-300 flex flex-col items-center"
                    >
                        <h3 className="text-xl font-bold mb-8 text-center text-gray-900 dark:text-white">Languages & Tools</h3>
                        <RadarChart data={toolsData} label="Proficiency Matrix" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
