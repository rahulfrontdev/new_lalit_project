'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo / Name */}
                <div className="flex items-center gap-4">
                    <span className="w-1 h-10 bg-gradient-to-b from-red-600 to-red-400 rounded-full" />
                    <Image
                        src="/lalit2.png"
                        alt="Lalit Raj"
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                    />
                    <div>
                        <h1 className="text-lg font-bold tracking-wide text-slate-900">
                            Lalit Raj
                        </h1>
                        <p className="text-xs text-slate-500 font-medium leading-tight">
                            Deputy Manager – Trade Finance Operations
                            <span className="block text-red-600 font-semibold">
                                Axis Bank
                            </span>
                        </p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
                    <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
                    <li><Link href="/about" className="hover:text-blue-600 transition">About</Link></li>
                    <li><Link href="/experties" className="hover:text-blue-600 transition">Expertise</Link></li>
                    <li><Link href="/experience" className="hover:text-blue-600 transition">Experience</Link></li>
                    <li><Link href="/project" className="hover:text-blue-600 transition">Projects</Link></li>
                    <li><Link href="/certification" className="hover:text-blue-600 transition">Certifications</Link></li>
                    <li><Link href="/achievement" className="hover:text-blue-600 transition">Achievement</Link></li>
                    <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-slate-700"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col gap-4 px-6 py-4 text-slate-700">
                        <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
                        <li><Link href="/about" className="hover:text-blue-600 transition">About</Link></li>
                        <li><Link href="/experties" className="hover:text-blue-600 transition">Expertise</Link></li>
                        <li><Link href="/experience" className="hover:text-blue-600 transition">Experience</Link></li>
                        <li><Link href="/project" className="hover:text-blue-600 transition">Projects</Link></li>
                        <li><Link href="/certification" className="hover:text-blue-600 transition">Certifications</Link></li>
                        <li><Link href="/achievement" className="hover:text-blue-600 transition">Achievement</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
