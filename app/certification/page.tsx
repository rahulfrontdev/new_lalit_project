"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../footer/footer";
import { motion } from "framer-motion";
import Image from "next/image";

const Certifications = () => {
    const certifications = [
        "CITF – Certificate in International Trade & Finance (IIBF)",
        "Certificate Course in Foreign Exchange – IIBF",
        "Countering Trade-Based Money Laundering – World Bank Group",
        "NISM-Series-V-A: Mutual Fund Distributors Certification Examination",
        "NISM Series VI: Depository Operations Certification",
    ];

    return (
        <>
            <Navbar />

            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFEAEA] py-24">
                <motion.div
                    className="max-w-5xl mx-auto px-6 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* HERO IMAGE */}
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/achievement.jpeg"
                            alt="Certifications Achievement"
                            width={140}
                            height={140}
                            className="rounded-xl shadow-md"
                            priority
                        />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#8B1538] mb-4">
                        Certifications
                    </h1>

                    <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-4">
                        Professional certifications demonstrating expertise in Trade Finance,
                        Foreign Exchange, Compliance, and Banking operations.
                    </p>
                </motion.div>
            </section>

            {/* CERTIFICATION CARDS */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex items-center justify-center bg-[#FFF2F4] border border-[#F3C6D3] p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform text-center"
                        >
                            <p className="text-[#4B4B4B] font-semibold leading-relaxed">
                                {cert}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Certifications;
