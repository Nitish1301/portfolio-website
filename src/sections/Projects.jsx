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
        live: 'https://typing-speed-test-fvhzqm8k0-gnitish139-1860s-projects.vercel.app',
        code: 'https://github.com/Nitish1301/Third-project/tree/typing-master',
        tags: ['React', 'TailwindCSS', 'JavaScript']
    },
    {
        title: 'Animated Golf Website',
        path: 'root/projects/animated-golf-website',
        desc: 'A visually stunning marketing website for a golf brand featuring advanced GSAP scroll animations, smooth transitions, and interactive elements that create an immersive experience.',
        specs: {
            stack: 'HTML, CSS, GSAP, JavaScript',
            performance: '99/100'
        },
        live: 'https://fifth-project-ae74s49yr-gnitish139-1860s-projects.vercel.app',
        code: 'https://github.com/Nitish1301/fifth-project',
        tags: ['GSAP', 'HTML', 'CSS', 'JavaScript', 'Animations']
    },
    {
        title: 'Neumorphic Calci',
        path: 'root/projects/neumorphic-calci',
        desc: 'A beautiful calculator application featuring the modern Neumorphism design trend with soft shadows and elegant UI, providing a smooth user experience.',
        specs: {
            stack: 'HTML, CSS, JavaScript',
            performance: '97/100'
        },
        live: 'https://fifth-project-4xfv-cv1yyazfx-gnitish139-1860s-projects.vercel.app',
        code: 'https://github.com/Nitish1301/Seventh-Project',
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
        live: 'https://seventh-project-ojdtwkrwt-gnitish139-1860s-projects.vercel.app',
        code: 'https://github.com/Nitish1301/fourth--project',
        tags: ['HTML5 Canvas', 'Vanilla JS', 'Game Development']
    },
];

const Projects = () => {
    return (
        <section id="projects" className="relative py-20 bg-[#111] transition-colors duration-300 overflow-hidden">
            <ParticleBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center font-montserrat text-white"
                >
                    Featured <span className="text-electric-blue">Projects</span>
                    <p className="text-base md:text-lg font-mono text-gray-400 mt-4 font-normal">
                        A selection of my recent work, showcasing my skills in web development and game design.
                    </p>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-700 hover:border-electric-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-electric-blue/20"
                        >
                            {/* Terminal Header */}
                            <div className="bg-[#2d2d2d] px-4 py-2 border-b border-gray-700 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                                </div>
                                <span className="text-sm md:text-base font-mono text-gray-400 truncate ml-2">
                                    &gt; {project.path}
                                </span>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col h-full bg-[#1e1e1e] border-t border-gray-700">
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                                        {project.desc}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2 py-1 text-xs font-mono bg-[#2d2d2d] text-gray-300 rounded border border-gray-600 group-hover:border-electric-blue group-hover:text-electric-blue transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mb-8 space-y-1 font-mono text-xs md:text-sm">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <span className="text-electric-blue">&gt;</span>
                                            <span>Stack: {project.specs.stack}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-700">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 text-xs md:text-sm font-mono text-gray-200 hover:text-white hover:bg-electric-blue transition-colors p-3 rounded border border-gray-600 bg-[#2d2d2d]"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>View Live</span>
                                    </a>
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 text-xs md:text-sm font-mono text-gray-200 hover:text-white hover:bg-electric-blue transition-colors p-3 rounded border border-gray-600 bg-[#2d2d2d]"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>Source Code</span>
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
