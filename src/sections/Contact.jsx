import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-[#111] py-20 overflow-hidden transition-colors duration-300">
            <ParticleBackground />

            <div className="section-container relative z-10 w-full max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-[#1e1e1e] rounded-lg border border-gray-300 dark:border-gray-700 shadow-2xl overflow-hidden"
                >
                    {/* Terminal Header */}
                    <div className="bg-gray-200 dark:bg-[#2d2d2d] px-4 py-2 border-b border-gray-300 dark:border-gray-700 flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                            &gt; initiate_contact_sequence.sh
                        </span>
                    </div>

                    <div className="p-8 md:p-12">
                        {/* Availability Box */}
                        <div className="mb-8 border border-gray-300 dark:border-gray-700 rounded p-4 font-mono text-sm">
                            <div className="text-gray-900 dark:text-white mb-2 border-b border-gray-300 dark:border-gray-700 pb-1 inline-block">
                                Availability Data
                            </div>
                            <div className="text-green-600 dark:text-green-400">
                                Current Status: OPEN...
                            </div>
                            <div className="text-green-600 dark:text-green-400">
                                Current Status: OPEN...
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                            <div className="space-y-1">
                                <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <span className="text-green-600 dark:text-green-400">root@nitish-portfolio:~$</span>
                                    enter_sender_name:
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-electric-blue dark:focus:border-electric-blue transition-colors"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <span className="text-green-600 dark:text-green-400">root@nitish-portfolio:~$</span>
                                    enter_sender_email:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-electric-blue dark:focus:border-electric-blue transition-colors"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <span className="text-green-600 dark:text-green-400">root@nitish-portfolio:~$</span>
                                    enter_message_payload:
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-electric-blue dark:focus:border-electric-blue transition-colors resize-none"
                                    required
                                ></textarea>
                            </div>

                            <div className="pt-6 flex justify-center">
                                <button
                                    type="submit"
                                    className="px-8 py-3 border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-wider"
                                >
                                    [ &gt; EXECUTE SEND COMMAND ]
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
