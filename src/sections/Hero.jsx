import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import GlitchText from '../components/GlitchText';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-[#111] overflow-hidden transition-colors duration-300">
            <ParticleBackground />

            <div className="z-10 w-full max-w-4xl px-4">
                {/* Terminal Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-[#1e1e1e]/90 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden border border-gray-800 font-mono terminal-window transition-colors duration-300"
                >
                    <div className="crt-overlay absolute inset-0 z-20 pointer-events-none opacity-50 dark:opacity-100"></div>

                    {/* Terminal Header */}
                    <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700 relative z-30 transition-colors duration-300">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 md:p-8 flex text-base md:text-lg relative z-10">
                        {/* Line Numbers */}
                        <div className="flex flex-col text-gray-500 select-none pr-4 md:pr-6 text-right border-r border-gray-800 mr-4 md:mr-6 font-mono transition-colors duration-300">
                            {Array.from({ length: 15 }, (_, i) => (
                                <span key={i + 1} className="leading-relaxed">{String(i + 1).padStart(2, '0')}</span>
                            ))}
                        </div>

                        {/* Code Content */}
                        <div className="flex-1 font-mono">
                            <div className="mb-4">
                                <span className="text-green-600 dark:text-green-400 mr-2">&gt;</span>
                                <span className="text-gray-300">Hello world.</span>
                            </div>

                            <div className="mb-4">
                                <span className="text-white text-2xl md:text-4xl lg:text-5xl font-bold flex items-center gap-2 transition-colors duration-300">
                                    I am <GlitchText text="Nitish Gupta" />
                                    <motion.span
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="inline-block w-3 h-6 md:h-8 bg-electric-blue dark:bg-cyan-400 align-middle"
                                    />
                                </span>
                            </div>

                            <div className="mb-8 font-mono text-base md:text-lg overflow-x-auto">
                                <div className="text-purple-400 dark:text-purple-400">const <span className="text-yellow-600 dark:text-yellow-400">profile</span> = <span className="text-yellow-600 dark:text-yellow-400">{'{'}</span></div>
                                <div className="pl-4">
                                    <span className="text-blue-600 dark:text-sky-300">role</span>: <span className="text-green-600 dark:text-green-400">"Full-Stack Engineer"</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-600 dark:text-sky-300">university</span>: <span className="text-green-600 dark:text-green-400">"LNCT Bhopal (AI/ML)"</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-600 dark:text-sky-300">dsa_stats</span>: <span className="text-green-600 dark:text-green-400">"340+ Problems Solved"</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-600 dark:text-sky-300">superpower</span>: <span className="text-green-600 dark:text-green-400">"turning_coffee_into_code()"</span>
                                </div>
                                <div className="text-yellow-600 dark:text-yellow-400">{'};'}</div>
                            </div>

                            {/* System Status */}
                            <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-8 flex flex-wrap gap-4 text-sm md:text-base text-gray-500 font-mono transition-colors duration-300">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    uptime: 21 years
                                </span>
                                <span className="hidden md:inline">|</span>
                                <span>bugs_squashed: 1500+</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
                >
                    <a href="#projects" className="group relative px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 rounded transition-all duration-300 font-mono overflow-hidden text-base md:text-lg">
                        <span className="relative z-10 flex items-center gap-2">
                            [ &gt; View Projects ]
                        </span>
                        <div className="absolute inset-0 bg-electric-blue/10 dark:bg-cyan-400/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </a>

                    <a href="#about" className="group relative px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 rounded transition-all duration-300 font-mono overflow-hidden text-base md:text-lg">
                        <span className="relative z-10 flex items-center gap-2">
                            [ &gt; Read Documentation ]
                        </span>
                        <div className="absolute inset-0 bg-electric-blue/10 dark:bg-cyan-400/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
