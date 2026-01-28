"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../footer/footer";

const Contact = () => {
    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-[#FDF2F5] py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* Header */}
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-extrabold text-[#8B1538] tracking-tight">
                            Let’s Connect
                        </h2>

                        <motion.div
                            className="h-1 w-24 mx-auto mt-4 rounded-full bg-[#8B1538]"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8 }}
                        />

                        <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">
                            Trade Finance • Import & Export Operations • Banking Compliance
                        </p>
                    </motion.div>

                    {/* Main Grid */}
                    <div className="grid md:grid-cols-2 gap-16 items-start">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-10"
                        >
                            <div>
                                <h3 className="text-2xl font-semibold text-[#2D0F18] mb-4">
                                    Professional Contact
                                </h3>
                                <p className="text-slate-700 leading-relaxed text-lg">
                                    I collaborate with banks, and internal teams to ensure
                                    accurate execution of trade finance transactions with full regulatory compliance.
                                </p>
                            </div>

                            {/* Info Cards */}
                            <div className="space-y-5">
                                {[
                                    { label: "Location", value: "Noida, India" },
                                    { label: "Email", value: "imlalit45@gmail.com" },
                                    { label: "Phone", value: "+91 9122904495" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.15 }}
                                        whileHover={{ scale: 1.03 }}
                                        className="flex justify-between items-center bg-white border border-[#F3C6D3] rounded-xl px-6 py-4 shadow-sm"
                                    >
                                        <span className="font-medium text-slate-600">{item.label}</span>
                                        <span className="font-semibold text-[#8B1538]">{item.value}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 60, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl p-10 shadow-xl border border-[#F3C6D3]"
                        >
                            <h3 className="text-2xl font-semibold text-[#8B1538] mb-8">
                                Send a Message
                            </h3>

                            <form className="space-y-6">
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8B1538] transition"
                                />

                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8B1538] transition"
                                />

                                <motion.textarea
                                    whileFocus={{ scale: 1.02 }}
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8B1538] transition"
                                />

                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="w-full py-3 rounded-lg bg-[#8B1538] hover:bg-[#6E0F2B] text-white font-semibold transition"
                                >
                                    Submit Message
                                </motion.button>
                            </form>
                        </motion.div>

                    </div>
                </div>

                {/* Soft Background Glow */}
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#F3C6D3] rounded-full opacity-40 blur-3xl" />
                <div className="absolute bottom-0 -left-32 w-80 h-80 bg-[#FADADD] rounded-full opacity-50 blur-3xl" />

            </section>
            <Footer />
        </>
    );
};

export default Contact;
