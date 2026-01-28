"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../footer/footer";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaServer, FaExchangeAlt, FaSearch } from "react-icons/fa";

const Project = () => {
    const projects = [
        {
            icon: <FaServer />,
            title: "TRADAX (IBM) – UAT Experience",
            points: [
                "Performed UAT testing on TRADAX (IBM) for Trade Finance transactions, focusing on end-to-end validation of LC payment and settlement workflows.",
                "Validated Straight Through Processing (STP) between TRADAX and Finacle, ensuring accurate data flow without manual intervention.",
                "Tested interface-level validations, transaction status updates, and exception handling scenarios.",
                "Identified integration gaps and coordinated with IT and vendor teams for defect resolution and re-testing.",
                "Supported UAT sign-off by ensuring system readiness for production deployment.",
            ],
        },
        {
            icon: <FaProjectDiagram />,
            title: "Finacle Trade Finance – Version 10.2.25 (UAT)",
            points: [
                "Conducted UAT for Finacle Trade Finance version 10.2.25, validating new functionalities and version upgrades.",
                "Executed scenario-based testing for Letter of Credit (LC) payments, accounting entries, and reconciliation logic.",
                "Verified maker–checker controls, authorization matrices, and system validations aligned with business rules.",
                "Ensured continuity of existing trade operations post-upgrade and minimized regression issues.",
                "Participated in UAT closure activities, including defect verification and final user sign-off.",
            ],
        },
        {
            icon: <FaExchangeAlt />,
            title: "SWIFT Messaging – MT to MX Migration (UAT)",
            points: [
                "Actively involved in UAT testing for SWIFT MT to MX message migration, ensuring compliance with ISO 20022 standards.",
                "Validated message structure, mandatory fields, and data mapping between MT and MX formats.",
                "Tested end-to-end message generation, transmission, and acknowledgment scenarios.",
                "Ensured compatibility of SWIFT MX messages with core banking and trade finance systems.",
                "Supported readiness for regulatory and industry-mandated SWIFT migration timelines.",
            ],
        },
        {
            icon: <FaSearch />,
            title: "TBML Checks – UAT Experience",
            points: [
                "Performed UAT validation for Transaction-Based Money Laundering (TBML) checks within trade finance workflows.",
                "Tested system controls for red-flag identification, threshold breaches, and alert generation.",
                "Ensured TBML scenarios were accurately triggered for high-risk transactions during LC processing.",
                "Validated audit trails, exception reporting, and compliance alignment with internal policies.",
                "Collaborated with compliance and IT teams to ensure effective risk mitigation before go-live.",
            ],
        },
    ];

    return (
        <>
            <Navbar />

            {/* HERO */}
            <section className="bg-gradient-to-r from-[#FFEAEA] to-[#FFF5F7] py-24">
                <motion.div
                    className="max-w-5xl mx-auto px-6 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#8B1538] mb-4">
                        Projects I Handled
                    </h1>
                    <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Showcase of UAT, system migration, and compliance projects handled in Trade Finance operations.
                    </p>
                </motion.div>
            </section>

            {/* PROJECT CARDS */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-[#FEF5F7] border border-[#F3C6D3] p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform cursor-default"
                        >
                            <div className="flex items-center gap-4 mb-4 text-[#8B1538]">
                                <div className="bg-[#F8D3E0] p-3 rounded-full text-white text-xl">
                                    {project.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                            </div>
                            <ul className="list-disc list-inside text-slate-700 space-y-2">
                                {project.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Project;
