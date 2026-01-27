"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../footer/footer";
import { motion } from "framer-motion";
import { FaUniversity, FaBuilding, FaFileInvoiceDollar, FaUserCheck } from "react-icons/fa";

const Experience = () => {
    const experiences = [
        {
            icon: <FaUniversity />,
            title: "Internship at Axis Bank, Noida",
            duration: "3 Months",
            description:
                "Hands-on exposure to trade finance operations, import payment processing, and banking documentation. Laid the groundwork for managing complex transactions and regulatory compliance.",
        },
        {
            icon: <FaBuilding />,
            title: "Trade Finance Operations",
            duration: "3.7 Years",
            description:
                "Managed end-to-end import payment processes including Direct Import Payments, Advance Payments, Collection Payments (DP/DA), and Letter of Credit (LC) payments ensuring adherence to RBI, FEMA, and internal guidelines.",
        },
        {
            icon: <FaUserCheck />,
            title: "Compliance & Risk Checks",
            duration: "",
            description:
                "Performed TBML checks, AML/KYC reviews, and sanctions screening to ensure full regulatory compliance. Focused on risk mitigation, operational excellence, and error-free processes.",
        },
        {
            icon: <FaFileInvoiceDollar />,
            title: "UAT Experience",
            duration: "",
            description:
                "Hands-on experience in User Acceptance Testing (UAT) for Trade Finance operations, ensuring system functionality aligns with business and regulatory requirements. Participated in UAT testing of Finacle Trade modules and TRADAX (IBM) interfaces.",
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
                        Professional Experience
                    </h1>
                    <p className="text-slate-700 text-md md:text-md leading-relaxed max-w-3xl mx-auto">
                        Over <strong>3.7 years of experience</strong> in trade finance, import operations, and regulatory compliance. Skilled in Letters of Credit, Direct and Advance Payments, Buyers’ Credit, and ensuring audit-ready operations.
                    </p>
                </motion.div>
            </section>

            {/* EXPERIENCE CARDS */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-[#FEF5F7] border border-[#F3C6D3] rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition transform cursor-default"
                        >
                            <div className="flex items-center gap-4 mb-4 text-[#8B1538]">
                                <div className="bg-[#F8D3E0] p-3 rounded-full text-white text-xl">
                                    {exp.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                                    {exp.duration && <p className="text-red-700 font-medium">{exp.duration}</p>}
                                </div>
                            </div>
                            <p className="text-slate-700 leading-relaxed">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Experience;
