import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const projects = [
    {
        title: 'Typing Master',
        path: 'root/projects/typing-master',
        desc: 'A modern typing speed test application built with React that tracks WPM (Words Per Minute), accuracy, and provides real-time feedback to improve typing skills.',
        specs: {
            stack: 'React, TailwindCSS',
            performance: '98/100'
        },
        live: 'https://nitish1301.github.io/Seventh-Project/',
        code: 'https://github.com/Nitish1301/Seventh-Project',
        tags: ['React', 'TailwindCSS', 'JavaScript']
    },
    {
        title: 'Neumorphic Calculator',
        path: 'root/projects/neumorphic-calculator',
        desc: 'A beautiful calculator application featuring the modern Neumorphism design trend with soft shadows and elegant UI, providing a smooth user experience.',
        specs: {
            stack: 'HTML, CSS, JavaScript',
            performance: '97/100'
        },
        live: 'https://lnkd.in/ggMfj5QF',
        code: 'https://lnkd.in/gPv3VRTy',
        tags: ['HTML', 'CSS', 'JavaScript', 'Neumorphism']
    },
    {
        title: 'Bubble Shooting Game',
        path: 'root/projects/bubble-shooting-game',
        desc: 'An engaging arcade-style bubble shooting game built with HTML5 Canvas, featuring smooth animations, collision detection, and addictive gameplay mechanics.',
        specs: {
            stack: 'HTML5 Canvas, Vanilla JS',
            performance: '95/100'
        },
        live: 'https://nitish1301.github.io/fourth--project/',
        code: 'https://github.com/Nitish1301/fourth--project',
        tags: ['HTML5 Canvas', 'Vanilla JS', 'Game Development']
    },
    {
        title: 'Golf Website with GSAP',
        path: 'root/projects/golf-website-gsap',
        desc: 'A visually stunning marketing website for a golf brand featuring advanced GSAP scroll animations, smooth transitions, and interactive elements that create an immersive experience.',
        specs: {
            stack: 'HTML, CSS, GSAP, JavaScript',
            performance: '99/100'
        },
        live: 'https://nitish1301.github.io/fifth-project/',
        code: 'https://github.com/Nitish1301/fifth-project',
        tags: ['GSAP', 'HTML', 'CSS', 'JavaScript', 'Animations']
    },
];

const Projects = () => {
    return (
        <section id="projects" className="relative py-20 bg-gray-100 dark:bg-[#161616] transition-colors duration-300 overflow-hidden">
            <ParticleBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center font-montserrat text-gray-900 dark:text-white"
                >
                    Featured <span className="text-electric-blue">Projects</span>
                    <p className="text-base md:text-lg font-mono text-gray-500 dark:text-gray-400 mt-4 font-normal">
                        A selection of my recent work, showcasing my skills in web development and game design.
                    </p>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white dark:bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 hover:border-electric-blue dark:hover:border-electric-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-electric-blue/20"
                        >
                            {/* Terminal Header */}
                            <div className="bg-gray-200 dark:bg-[#2d2d2d] px-4 py-2 border-b border-gray-300 dark:border-gray-700 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                                </div>
                                <span className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 truncate ml-2">
                                    &gt; {project.path}
                                </span>
                            </div>

                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-electric-blue transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-base md:text-lg leading-relaxed flex-grow">
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1.5 text-sm md:text-base font-mono bg-gray-100 dark:bg-[#2d2d2d] text-gray-700 dark:text-gray-300 rounded border border-gray-300 dark:border-gray-600 hover:border-electric-blue hover:text-electric-blue transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mb-6 space-y-2 font-mono text-base md:text-lg">
                                    <div className="text-gray-900 dark:text-white font-bold mb-3 text-lg">Technical Specs</div>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <span className="text-electric-blue">&gt;</span>
                                        <span>Stack: {project.specs.stack}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <span className="text-electric-blue">&gt;</span>
                                        <span>Performance Score: {project.specs.performance}</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-base md:text-lg font-mono text-gray-600 dark:text-gray-300 hover:text-electric-blue dark:hover:text-electric-blue transition-colors group/link"
                                    >
                                        <ExternalLink className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                        <span>[ &gt; View Live Demo ]</span>
                                    </a>
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-base md:text-lg font-mono text-gray-600 dark:text-gray-300 hover:text-electric-blue dark:hover:text-electric-blue transition-colors group/link"
                                    >
                                        <Github className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                                        <span>[ &gt; View Source Code ]</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
