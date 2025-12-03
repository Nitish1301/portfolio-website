import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

const projects = [
    {
        title: 'Animated Golf Website',
        path: 'root/projects/animated-golf-website',
        desc: 'A visually stunning marketing website for a golf brand, featuring advanced scroll animations and interactive elements.',
        specs: {
            stack: 'HTML, GSAP, TailwindCSS',
            performance: '98/100'
        },
        live: 'https://lnkd.in/gJZNvZ4K',
        code: '#',
    },
    {
        title: 'Neumorphic Calculator',
        path: 'root/projects/neumorphic-calculator',
        desc: 'A modern calculator application designed with the soft UI (Neumorphism) aesthetic trend.',
        specs: {
            stack: 'HTML, CSS, JavaScript',
            performance: '100/100'
        },
        live: 'https://lnkd.in/ggMfj5QF',
        code: '#',
    },
    {
        title: 'Typing Master App',
        path: 'root/projects/typing-master-app',
        desc: 'A React-based typing speed test application that tracks WPM and accuracy in real-time.',
        specs: {
            stack: 'React, TailwindCSS',
            performance: '94/100'
        },
        live: '#',
        code: '#',
    },
    {
        title: 'Bubble Shooting Game',
        path: 'root/projects/bubble-shooting-game',
        desc: 'Classic arcade-style game built with HTML5 Canvas, demonstrating game loop logic and collision detection.',
        specs: {
            stack: 'HTML5 Canvas, Vanilla JS',
            performance: '96/100'
        },
        live: 'https://lnkd.in/ge9HPV3R',
        code: '#',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="relative min-h-screen py-20 bg-[#111] overflow-hidden">
            <ParticleBackground />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <a href="#" className="text-2xl font-bold font-montserrat tracking-tight text-white absolute top-0 left-6">
                        NG<span className="text-electric-blue">.</span>
                    </a>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm">
                        A selection of my recent work, showcasing my skills in web development and game design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1e1e1e]/90 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 group shadow-xl hover:shadow-cyan-400/20 hover:-translate-y-2 relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            {/* Card Top Bar */}
                            <div className="bg-[#2d2d2d] px-4 py-2 border-b border-gray-700 flex items-center">
                                <span className="text-gray-400 font-mono text-xs md:text-sm truncate">
                                    &gt; {project.path}
                                </span>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 font-mono">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 leading-relaxed h-auto md:h-20">
                                    {project.desc}
                                </p>

                                {/* Technical Specs */}
                                <div className="mb-8 bg-[#111]/50 p-4 rounded border border-gray-800">
                                    <h4 className="text-gray-300 font-bold text-sm mb-2">Technical Specs</h4>
                                    <div className="space-y-1 text-xs md:text-sm text-gray-400">
                                        <div>
                                            <span className="text-cyan-400">&gt;</span> Stack: {project.specs.stack}
                                        </div>
                                        <div>
                                            <span className="text-cyan-400">&gt;</span> Performance Score: <span className="text-green-400">{project.specs.performance}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {project.live !== '#' && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center px-4 py-2 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 rounded transition-all duration-300 text-xs md:text-sm"
                                        >
                                            [ &gt; View Live Demo ]
                                        </a>
                                    )}
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center px-4 py-2 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 rounded transition-all duration-300 text-xs md:text-sm"
                                    >
                                        [ &gt; View Source Code ]
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
