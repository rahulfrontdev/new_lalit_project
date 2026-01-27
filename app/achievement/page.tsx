"use client";

import Navbar from "../components/Navbar";
import { FaHandshake, FaFileInvoiceDollar, FaShieldAlt, FaUserCheck, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../footer/footer";

const achievements = [
    {
        title: "Handled High-Value Trade Transactions",
        description:
            "Successfully managed import and export transactions involving high-value trade finance instruments with strict adherence to banking timelines.",
        highlight: "₹100+ Cr Trade Value",
        icon: <FaHandshake className="text-red-700 w-6 h-6" />,
    },
    {
        title: "Letter of Credit Expertise",
        description:
            "Reviewed and processed Letters of Credit ensuring compliance with UCP 600 and internal bank policies while minimizing discrepancies.",
        highlight: "Zero Critical Compliance Issues",
        icon: <FaFileInvoiceDollar className="text-red-700 w-6 h-6" />,
    },
    {
        title: "Regulatory & Compliance Adherence",
        description:
            "Ensured full compliance with FEMA, RBI guidelines, and internal audit requirements across multiple trade finance operations.",
        highlight: "100% Audit Clearance",
        icon: <FaShieldAlt className="text-red-700 w-6 h-6" />,
    },
    {
        title: "Discrepancy Resolution & Client Coordination",
        description:
            "Resolved document discrepancies through proactive coordination with banks, exporters, importers, and internal teams.",
        highlight: "Reduced TAT by 30%",
        icon: <FaUserCheck className="text-red-700 w-6 h-6" />,
    },
    {
        title: "Operational Process Improvement",
        description:
            "Identified process gaps and implemented improvements to enhance accuracy and turnaround time in trade documentation workflows.",
        highlight: "Improved Efficiency",
        icon: <FaChartLine className="text-red-700 w-6 h-6" />,
    },
];

const Achievement = () => {
    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 py-16 relative overflow-hidden">
                {/* Decorative background shapes */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div className="absolute top-10 left-10 w-72 h-72 bg-red-100 rounded-full opacity-30 blur-2xl animate-pulse" />
                    <motion.div className="absolute bottom-0 right-0 w-96 h-96 bg-red-200 rounded-full opacity-20 blur-3xl animate-pulse" />
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-4">
                        <h2 className="text-5xl md:text-6xl font-extrabold text-red-700 drop-shadow-lg tracking-tight">
                            Professional Achievements
                        </h2>
                        <div className="flex justify-center items-center mt-6 mb-4">
                            <span className="h-1 w-24 bg-gradient-to-r from-red-400 via-red-600 to-red-400 rounded-full" />
                        </div>
                        <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg font-medium">
                            Key milestones demonstrating expertise in trade finance operations, compliance, and operational excellence.
                        </p>
                    </div>
                    {/* certification 1 */}
                    <section className="max-w-7xl mx-auto mb-20  ">
                        <motion.h2
                            className="text-4xl md:text-5xl font-extrabold text-red-900 mb-7 text-center drop-shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Certificate of Appreciation
                        </motion.h2>

                        <div className="flex flex-col md:flex-row items-center gap-10">
                            {/* Image with animation */}
                            <motion.div
                                className="flex-shrink-0"
                                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <Image
                                    src="/WhatsApp Image 2026-01-26 at 5.19.22 PM.jpeg"
                                    alt="Certificate"
                                    width={500}
                                    height={350}
                                    className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>

                            {/* Text with animation */}
                            <motion.div
                                className="text-gray-800 md:text-lg leading-relaxed"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <p className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
                                    <span className="font-semibold text-red-900">
                                        Certificate of Appreciation – Axis Bank
                                    </span>
                                    <br />
                                    Recognized for outstanding contribution to the successful migration of Citi Business and Retail clients to Axis Bank. Played a key role in ensuring smooth transactions, operational continuity, and client support during the migration project completed on 1st March 2023. Awarded by senior leadership from Wholesale Transaction Operations and Trade & Forex Operations.
                                </p>
                            </motion.div>
                        </div>
                    </section>
                    {/* certification 2 */}

                    <section className="max-w-7xl mx-auto mb-20  ">
                        <motion.h2
                            className="text-4xl md:text-5xl font-extrabold text-red-900 mb-7 text-center drop-shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Trade and Retail Forex Operations Champions
                        </motion.h2>

                        <div className="flex flex-col md:flex-row items-center gap-10">
                            {/* Image with animation */}
                            <motion.div
                                className="flex-shrink-0"
                                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <Image
                                    src="/WhatsApp Image 2026-01-26 at 5.49.01 PM.jpeg"
                                    alt="Certificate"
                                    width={500}
                                    height={150}
                                    className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>

                            {/* Text with animation */}
                            <motion.div
                                className="text-gray-800 md:text-lg leading-relaxed"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <p className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
                                    <span className="font-semibold text-red-900">
                                        Certificate of Appreciation – Axis Bank
                                    </span>
                                    <br />
                                    Sparsh Champion – Axis Bank
                                    Awarded the Sparsh Champion Certificate of Achievement at Axis Bank for consistently delighting customers by embedding STAR behaviours, strengthening customer loyalty, and exemplifying a strong customer-first mindset within Wholesale Banking Operations (WBO).
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* certification 3 */}
                    <section className="max-w-7xl mx-auto mb-20  ">
                        <motion.h2
                            className="text-4xl md:text-5xl font-extrabold text-red-900 mb-7 text-center drop-shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Forex Service Champions
                        </motion.h2>

                        <div className="flex flex-col md:flex-row items-center gap-10">
                            {/* Image with animation */}
                            <motion.div
                                className="flex-shrink-0"
                                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <Image
                                    src="/WhatsApp Image 2026-01-26 at 5.35.31 PM.jpeg"
                                    alt="Certificate"
                                    width={500}
                                    height={150}
                                    className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>

                            {/* Text with animation */}
                            <motion.div
                                className="text-gray-800 md:text-lg leading-relaxed"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <p className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
                                    <span className="font-semibold text-red-900">
                                        Certificate of Appreciation – Axis Bank
                                    </span>
                                    <br />
                                    Forex Service Champion – Axis Bank
                                    Recognized as Forex Service Champion for exemplary performance in Trade Finance (Import – TFC) at Axis Bank. Awarded for consistently delivering high-quality service, operational excellence, and strong support during the period January 2023 to March 2023.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* certification 4 */}
                    <section className="max-w-7xl mx-auto mb-20  ">
                        <motion.h2
                            className="text-4xl md:text-5xl font-extrabold text-red-900 mb-7 text-center drop-shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Sparsh Champions
                        </motion.h2>

                        <div className="flex flex-col md:flex-row items-center gap-10">
                            {/* Image with animation */}
                            <motion.div
                                className="flex-shrink-0"
                                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <Image
                                    src="/WhatsApp Image 2026-01-26 at 5.45.15 PM.jpeg"
                                    alt="Certificate"
                                    width={500}
                                    height={150}
                                    className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>

                            {/* Text with animation */}
                            <motion.div
                                className="text-gray-800 md:text-lg leading-relaxed"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <p className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
                                    <span className="font-semibold text-red-900">
                                        Certificate of Appreciation – Axis Bank
                                    </span>
                                    <br />
                                    Sparsh Champion – Axis Bank
                                    Awarded the Sparsh Champion Certificate of Achievement at Axis Bank for consistently delighting customers by embedding STAR behaviours, strengthening customer loyalty, and exemplifying a strong customer-first mindset within Wholesale Banking Operations (WBO).
                                </p>
                            </motion.div>
                        </div>
                    </section>




                    {/* Achievements Grid */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 80 }}
                                className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl hover:shadow-red-300 transition transform hover:-translate-y-2 border-l-8 border-red-600 group"
                            >
                                <div className="flex items-center gap-5 mb-6">
                                    <span className="bg-red-50 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </span>
                                    <h3 className="text-2xl font-bold text-red-700 group-hover:text-red-900 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 mb-6 text-base leading-relaxed">{item.description}</p>
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold shadow group-hover:bg-red-200 transition-colors duration-300"
                                >
                                    {item.highlight}
                                </motion.span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Summary */}
                    <div className="mt-20 text-center max-w-3xl mx-auto">
                        <p className="text-gray-800 leading-relaxed text-lg font-medium">
                            These achievements reflect my commitment to operational excellence, regulatory compliance, and continuous improvement within trade finance operations. I focus on delivering accurate, timely, and risk-mitigated outcomes that align with banking and client expectations.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Achievement;
