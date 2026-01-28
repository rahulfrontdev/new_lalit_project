import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-slate-300 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h3 className="text-white text-lg font-semibold">
                        Lalit Kumar
                    </h3>
                    <p className="text-sm mt-2">
                        Trade Finance Operations professional specializing in Import & Export,
                        Letter of Credit processing, and banking compliance.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-medium mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:text-blue-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-blue-400">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/experience" className="hover:text-blue-400">
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-blue-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Expertise */}
                <div>
                    <h4 className="text-white font-medium mb-4">
                        Expertise
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>Import & Export Operations</li>
                        <li>Letter of Credit (LC)</li>
                        <li>Trade Documentation</li>
                        <li>Banking Compliance</li>
                        <li>UCP 600 | FEMA | RBI</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-medium mb-4">
                        Contact
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>Email: <span className="text-white">imlalit45@gmail.com</span></li>
                        <li>LinkedIn: <span className="text-white">linkedin.com/in/rahul</span></li>
                        <li>Location: <span className="text-white">India</span></li>
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-slate-700 py-4 text-center text-sm text-slate-400">
                © {new Date().getFullYear()} Lalit. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
