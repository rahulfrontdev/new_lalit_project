"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../footer/footer";

const About = () => {
    return (
        <>
            <Navbar />

            {/* ================= HERO SECTION ================= */}
            <section className="bg-[#7A1E2D] text-white py-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto px-6"
                >
                    {/* Logo + Title */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                        {/* Axis Bank Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="bg-white rounded-lg p-3 shadow-md"
                        >
                            <Image
                                src="/96283eb5-5920-40d2-80d8-6030646d19a4.jpg"
                                alt="Axis Bank"
                                width={120}
                                height={40}
                                priority
                            />
                        </motion.div>

                        {/* Title */}
                        <div>
                            <p className="text-red-200 text-sm uppercase tracking-widest mb-1">
                                About Me
                            </p>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Trade Finance Operations Professional
                            </h1>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-red-100 mt-4 max-w-3xl leading-relaxed">
                        Specialized in Import & Export operations, Letter of Credit
                        processing, trade documentation, remittances, and regulatory
                        compliance within banking environments.
                    </p>
                </motion.div>
            </section>

            {/* ================= MAIN CONTENT ================= */}
            <section className="bg-[#F9F5F6] py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-5 text-slate-700 leading-relaxed"
                    >
                        <h2 className="text-2xl font-semibold text-[#7A1E2D]">
                            Professional Overview
                        </h2>

                        <p>
                            I am a <strong>results-driven Trade Finance professional</strong>
                            with hands-on experience in managing end-to-end
                            <strong> import and export trade transactions</strong>
                            within Wholesale Banking Operations.
                        </p>

                        <p>
                            Currently working as a <strong>Deputy Manager at Axis Bank</strong>,
                            I handle <strong>Letters of Credit (LC)</strong>, scrutiny of
                            import documents, remittances, and coordination with internal
                            and external stakeholders while ensuring adherence to
                            <strong> UCP 600, FEMA, and RBI guidelines</strong>.
                        </p>

                        <p>
                            With a compliance-first mindset and strong attention to detail,
                            I focus on risk mitigation, operational accuracy, and timely
                            execution of trade settlements while maintaining audit-ready
                            processes.
                        </p>
                    </motion.div>

                    {/* RIGHT – CORE EXPERTISE CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-[#7A1E2D]"
                    >
                        <h3 className="text-xl font-semibold text-[#7A1E2D] mb-6">
                            Core Expertise
                        </h3>

                        <ul className="space-y-4 text-slate-700">
                            <li>• Import & Export Trade Operations</li>
                            <li>• Letter of Credit (LC) Issuance & Scrutiny</li>
                            <li>• Import Document Compliance Checks</li>
                            <li>• Trade Documentation & Discrepancy Handling</li>
                            <li>• Bank & Client Coordination</li>
                            <li>• UCP 600, FEMA & RBI Compliance</li>
                            <li>• Trade Payments & Settlements</li>
                            <li>• Operational Risk Control</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* ================= HIGHLIGHTS ================= */}
            <section className="bg-white py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8"
                >
                    <div className="p-6 rounded-xl border border-slate-200 text-center hover:shadow-md transition">
                        <h4 className="text-3xl font-bold text-[#7A1E2D]">100+</h4>
                        <p className="text-slate-600 mt-2">
                            Trade Documents Processed
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-200 text-center hover:shadow-md transition">
                        <h4 className="text-3xl font-bold text-[#7A1E2D]">
                            Import & Export
                        </h4>
                        <p className="text-slate-600 mt-2">
                            End-to-End Operations
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-200 text-center hover:shadow-md transition">
                        <h4 className="text-3xl font-bold text-[#7A1E2D]">
                            Compliance
                        </h4>
                        <p className="text-slate-600 mt-2">
                            RBI • FEMA • UCP 600
                        </p>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </>
    );
};

export default About;
