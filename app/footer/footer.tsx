import React from "react";
import Link from "next/link";
import {
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
    FaTwitter,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-slate-300 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h3 className="text-white text-lg font-semibold">
                        Lalit Raj
                    </h3>
                    <p className="text-sm mt-2">
                        Trade Finance professional specializing in Import & Export,
                        Letter of Credit processing, and banking compliance.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-medium mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                        <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
                        <li><Link href="/experience" className="hover:text-blue-400">Experience</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
                    </ul>
                </div>

                {/* Expertise */}
                <div>
                    <h4 className="text-white font-medium mb-4">Expertise</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Import & Export Operations</li>
                        <li>Letter of Credit (LC)</li>
                        <li>Trade Documentation</li>
                        <li>Banking Compliance</li>
                        <li>UCP 600 | FEMA | RBI</li>
                    </ul>
                </div>

                {/* Contact + Social Icons */}
                <div>
                    <h4 className="text-white font-medium mb-4">Connect</h4>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-xl">
                        <a
                            href="mailto:imlalit45@gmail.com"
                            className="hover:text-blue-400"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/lalitraj/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://www.instagram.com/lalit_._raj?igsh=MWRqazI0MHI3OWloMQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-400"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://wa.me/9122904495"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-400"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>

                        <a
                            href="https://x.com/imlalit11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-sky-400"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                    </div>

                    <p className="text-sm mt-4">
                        Location: <span className="text-white">India</span>
                    </p>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-slate-700 py-4 text-center text-sm text-slate-400">
                © {new Date().getFullYear()} Lalit Raj. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
