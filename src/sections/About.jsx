import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import profileImg from '../assets/profile.png';

const About = () => {
    return (
        <section id="about" className="relative min-h-screen flex flex-col items-center justify-center bg-[#111] py-20 overflow-hidden">
            <ParticleBackground />

            <div className="z-10 w-full max-w-6xl px-4">
                {/* Code Editor Window */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#1e1e1e]/95 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden border border-gray-800 font-mono"
                >
                    {/* Editor Header / Tab Bar */}
                    <div className="bg-[#252526] flex items-center border-b border-gray-800">
                        {/* Tab */}
                        <div className="px-4 py-2 bg-[#1e1e1e] border-r border-gray-800 flex items-center gap-2 text-sm text-gray-300 border-t-2 border-t-cyan-400">
                            <span className="text-cyan-400">ℹ</span>
                            README.md
                            <span className="ml-2 text-gray-500 text-xs">x</span>
                        </div>
                        {/* Empty Space */}
                        <div className="flex-1"></div>
                        {/* Window Controls (Decorative) */}
                        <div className="px-4 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                    </div>

                    {/* Editor Body */}
                    <div className="flex flex-col md:flex-row">
                        {/* Left Sidebar (Profile & JSON) */}
                        <div className="w-full md:w-1/3 bg-[#252526] p-6 border-r border-gray-800">
                            <div className="flex flex-col gap-6">
                                {/* Profile Image */}
                                <div className="relative group mx-auto md:mx-0 w-48 h-48 rounded-lg overflow-hidden border-2 border-gray-700 shadow-lg">
                                    <img
                                        src={profileImg}
                                        alt="Nitish Gupta"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* JSON Stats */}
                                <div className="text-xs md:text-sm font-mono leading-relaxed overflow-x-auto">
                                    <span className="text-yellow-400">{"{"}</span>
                                    <div className="pl-4">
                                        <span className="text-sky-300">"core_skills"</span>: <span className="text-yellow-400">[</span>
                                        <div className="pl-4 text-orange-300">
                                            "B.Tech", "CSE",<br />
                                            "Python", "MERN",<br />
                                            "Next.js"
                                        </div>
                                        <span className="text-yellow-400">],</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-sky-300">"tools"</span>: <span className="text-yellow-400">[</span>
                                        <span className="text-orange-300">"git", "vscode", "docker"</span>
                                        <span className="text-yellow-400">],</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-sky-300">"os"</span>: <span className="text-orange-300">"macOS"</span>
                                    </div>
                                    <span className="text-yellow-400">{"}"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Content (Markdown) */}
                        <div className="w-full md:w-2/3 p-6 md:p-10 bg-[#1e1e1e] text-gray-300">
                            <div className="prose prose-invert max-w-none font-mono">
                                <div className="mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="text-cyan-400">##</span> About Me
                                    </h2>
                                    <p className="text-gray-400 leading-relaxed">
                                        I am a passionate <span className="text-cyan-400">Full-Stack Developer</span> and Competitive Programmer, currently pursuing my B.Tech in CSE (AI/ML) at LNCT Bhopal.
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                        <span className="text-cyan-400">###</span> Education & Theoretical Foundation
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 marker:text-cyan-400">
                                        <li>
                                            <span className="text-white">Coursework:</span> Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems.
                                        </li>
                                        <li>
                                            <span className="text-white">Focus:</span> Building a strong foundation in Computer Science principles to solve complex problems.
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                        <span className="text-cyan-400">###</span> Engineering Philosophy
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Leveraging <span className="text-orange-300">SOLID principles</span> to build efficient, scalable solutions and creating highly interactive user experiences with modern frameworks. I believe in writing clean, maintainable code that stands the test of time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
