import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

const Contact = () => {
    return (
        <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center bg-[#111] py-20 overflow-hidden">
            <ParticleBackground />

            <div className="section-container relative z-10 w-full max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#1e1e1e]/95 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 shadow-2xl font-mono"
                >
                    {/* Terminal Header */}
                    <div className="bg-[#2d2d2d] px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400 text-sm">&gt; initiate_contact_sequence.sh</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 md:p-10">
                        {/* Availability Data Block */}
                        <div className="mb-8 border border-gray-700 rounded p-4 bg-[#111]/50">
                            <h3 className="text-gray-300 font-bold mb-2 border-b border-gray-700 pb-1 inline-block">Availability Data</h3>
                            <div className="text-sm space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500">Current Status:</span>
                                    <span className="text-green-400 font-bold animate-pulse">OPEN...</span>
                                </div>
                                <div className="text-gray-500 text-xs mt-2">
                                    // Ready for Summer 2025 Internships & Projects
                                </div>
                            </div>
                        </div>

                        {/* CLI Form */}
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-4">
                                {/* Name Input */}
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                    <label htmlFor="name" className="text-green-400 text-sm md:text-base whitespace-nowrap">
                                        root@nitish-portfolio:~$ enter_sender_name:
                                    </label>
                                    <div className="flex-1 relative">
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-transparent border-b border-gray-700 focus:border-cyan-400 text-gray-300 px-2 py-1 focus:outline-none transition-colors"
                                            autoComplete="off"
                                        />
                                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-cyan-400 animate-pulse hidden md:block"></span>
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                    <label htmlFor="email" className="text-green-400 text-sm md:text-base whitespace-nowrap">
                                        root@nitish-portfolio:~$ enter_sender_email:
                                    </label>
                                    <div className="flex-1 relative">
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-transparent border-b border-gray-700 focus:border-cyan-400 text-gray-300 px-2 py-1 focus:outline-none transition-colors"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-green-400 text-sm md:text-base">
                                        root@nitish-portfolio:~$ enter_message_payload:
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        className="w-full bg-[#111]/50 border border-gray-700 focus:border-cyan-400 rounded p-4 text-gray-300 focus:outline-none transition-colors resize-none font-mono"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="group relative px-6 py-3 bg-transparent border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 rounded transition-all duration-300 font-mono w-full md:w-auto overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        [ &gt; EXECUTE SEND COMMAND ]
                                    </span>
                                    <div className="absolute inset-0 bg-cyan-400/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                <footer className="mt-12 text-center">
                    <p className="text-gray-600 text-xs font-mono">
                        © 2025 Nitish Gupta. System Status: Nominal.
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
