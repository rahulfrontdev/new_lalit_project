"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../footer/footer";
import { motion } from "framer-motion";

const expertiseList = [
    {
        title: "Trade Finance Operations",
        points: [
            "End-to-end handling of Letters of Credit (LC)",
            "Import & Export transaction processing",
            "Direct & Advance Import Payments",
            "Import Collections & Buyers Credit",
        ],
    },
    {
        title: "Regulatory & Compliance",
        points: [
            "UCP 600 compliance",
            "RBI & FEMA guidelines",
            "OFAC & FATF screening",
            "TBML risk checks",
        ],
    },
    {
        title: "SWIFT & Remittances",
        points: [
            "SWIFT MT103, MT202, MT199, MT999",
            "Trade Inward & Outward Remittances",
            "Nostro & mirror reconciliation",
            "Timely settlement of transactions",
        ],
    },
    {
        title: "Documentation & Risk Control",
        points: [
            "Bill of Entry (BOE) reconciliation",
            "Discrepancy identification & resolution",
            "Audit-ready documentation",
            "Strict TAT adherence",
        ],
    },
];

const Experties = () => {
    return (
        <>
            <Navbar />

            {/* HERO */}
            <section className="bg-[#FDF2F5] py-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto px-6 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#8B1538]">
                        My Expertise
                    </h1>
                    <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
                        Specialized in trade finance operations, banking compliance, and
                        risk-controlled execution of import & export transactions.
                    </p>
                </motion.div>
            </section>

            {/* EXPERTISE CARDS */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

                    {expertiseList.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white border border-[#F3C6D3] rounded-2xl p-8 shadow-sm"
                        >
                            <h3 className="text-xl font-semibold text-[#8B1538] mb-5">
                                {item.title}
                            </h3>

                            <ul className="space-y-3 text-slate-700">
                                {item.points.map((point, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <span className="text-[#8B1538] font-bold">✓</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                </div>
            </section>

            {/* HIGHLIGHT STRIP */}
            <section className="bg-[#FDF2F5] py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center"
                >
                    <div className="bg-white border border-[#F3C6D3] rounded-xl p-6 shadow-sm">
                        <h4 className="text-3xl font-bold text-[#8B1538]">60000+</h4>
                        <p className="text-slate-600 mt-2">Trade Transactions</p>
                    </div>

                    <div className="bg-white border border-[#F3C6D3] rounded-xl p-6 shadow-sm">
                        <h4 className="text-3xl font-bold text-[#8B1538]">Import Operations</h4>
                        <p className="text-slate-600 mt-2">Import  Operations</p>
                    </div>

                    <div className="bg-white border border-[#F3C6D3] rounded-xl p-6 shadow-sm">
                        <h4 className="text-3xl font-bold text-[#8B1538]">Compliance</h4>
                        <p className="text-slate-600 mt-2">RBI • FEMA • UCP 600</p>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </>
    );
};

export default Experties;
