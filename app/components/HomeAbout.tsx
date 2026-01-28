'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExchangeAlt, FaFileInvoice, FaUniversity } from "react-icons/fa";
const expertise = [
    "Outward Remittance & SWIFT MT103 and MT202 processing",
    "Buyers Credit",
    "Bill of Entry (BOE) reconciliation & knock-off",
    "Advances against Export (FBFP)",
    "Clearing SWIFT dashboards & mirror outstanding",
    "SWIFT Messages: MT103, MT202, MT199, MT999, MT799, MT734, MT742, MT756",
    "Letter of Credit (Import & Export)",
];

const HomeAbout = () => {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Intro / Tagline */}
                <motion.div
                    className="max-w-7xl mb-20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Heading */}
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
                        initial={{ x: -80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        Driving secure, compliant, and time-bound{" "}
                        <span className="text-red-700">
                            trade finance operations
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="mt-6 text-lg text-slate-600 leading-relaxed"
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Deep expertise in Letters of Credit, remittances, and
                        regulatory compliance across import and export operations.
                    </motion.p>

                    {/* Expertise Pills */}
                    <motion.div
                        className="flex flex-wrap gap-3 mt-6 text-sm font-medium"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.08,
                                },
                            },
                        }}
                    >
                        {[
                            "Trade Finance",
                            "LC Operations",
                            "TBML Checks",
                            "SWIFT Messaging",
                            "Direct Import Payment",
                            "Advance Remittances",
                            "Import Collections",
                            "Buyers Credit",
                        ].map((item, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ scale: 1.1 }}
                                className="px-4 py-2 rounded-full bg-red-50 text-red-700 cursor-default"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex gap-4 mt-10"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link href="/achievement" >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }} style={{ cursor: 'pointer' }}
                                className="px-6 py-3 rounded-lg bg-red-700 text-white font-semibold hover:bg-red-800 transition"
                            >
                                View My Work
                            </motion.button>
                        </Link>

                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ cursor: 'pointer' }}
                                className="px-6 py-3 rounded-lg border border-red-700 text-red-700 font-semibold hover:bg-red-50 transition"
                            >
                                Contact Me
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <div className="border-t border-slate-200 my-16" />

                {/* About Me */}
                <motion.div
                    className="max-w-4xl mb-20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {/* Heading */}
                    <motion.h2
                        className="text-3xl font-bold text-slate-900 mb-6"
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        About Me
                    </motion.h2>

                    {/* Paragraph 1 */}
                    <motion.p
                        className="text-slate-700 leading-relaxed mb-4"
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        I am a results-driven Trade Finance professional with progressive
                        experience at{" "}
                        <span className="font-semibold text-red-700">Axis Bank</span>,
                        currently working as a Deputy Manager in Wholesale Banking Operations at
                        the Trade Finance Center. I bring strong expertise in Letters of Credit,
                        import documentation, remittances, and compliance.
                    </motion.p>

                    {/* Paragraph 2 */}
                    <motion.p
                        className="text-slate-700 leading-relaxed"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        With a sharp eye for detail and a compliance-first mindset, I actively
                        contribute to risk mitigation, system improvement, and audit-ready
                        processes while consistently meeting strict turnaround timelines.
                    </motion.p>
                </motion.div>

                {/* What I Do */}
                <div className="max-w-5xl">

                    {/* Heading */}
                    <motion.h2
                        className="text-3xl font-bold text-slate-900 mb-6"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        What I Do
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-slate-700 mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        I specialize in managing end-to-end trade finance operations,
                        ensuring smooth execution, regulatory compliance, and minimal
                        operational risk.
                    </motion.p>

                    {/* Responsibilities Grid */}
                    <div className="grid md:grid-cols-2 gap-6 text-slate-700">
                        {[
                            "End-to-end handling of Letters of Credit (LC)",
                            "Import document compliance checks (Direct & Advance Payments)",
                            "Lodgement, Acceptance & Realisation as per UCP 600",
                            "Delivery Order (DO) processing under LC",
                            "RA Financing cases under LC",
                            "Maintaining strict TAT across transactions",
                            "Compliance with RBI guidelines",
                            "Direct Import Payment",
                            "OFAC & FATF screening of parties",
                            "Advance Remittances",
                            "Buyers Credit",
                            "Trade Inward Remittances",
                            "Import Collections",
                            "Bill of Entry Settlements",
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, x: -40 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.08,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                                className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg
                           hover:bg-white hover:shadow-md transition"
                            >
                                <span className="text-red-700 font-bold text-lg">•</span>
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Trade Finance Expertise */}
                <section className="w-full mt-24">
                    <div className="max-w-6xl mx-auto px-6">

                        {/* Section Heading */}
                        <motion.h2
                            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Trade Finance & Remittance Expertise
                        </motion.h2>

                        {/* Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {expertise.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        x: index % 2 === 0 ? -80 : 80,
                                        scale: 0.9,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        scale: 1,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.12,
                                        type: "spring",
                                        stiffness: 70,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    className="group bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className="p-3 rounded-lg bg-red-50 text-red-700 group-hover:bg-red-100 transition">
                                            <FaExchangeAlt className="w-5 h-5" />
                                        </div>

                                        {/* Text */}
                                        <p className="text-slate-700 font-medium leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </section>
    );
};

export default HomeAbout;
