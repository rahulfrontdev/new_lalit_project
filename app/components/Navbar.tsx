import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo / Name */}
                <div className="flex items-center gap-4">
                    {/* Accent Bar */}
                    <span className="w-1 h-10 bg-gradient-to-b from-red-600 to-red-400 rounded-full" />

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


                {/* Menu */}
                <ul className="flex gap-8 text-sm font-medium text-slate-700">
                    <Link href='/'>  <li className="hover:text-blue-600 cursor-pointer">Home</li></Link>
                    <Link href='/about'> <li className="hover:text-blue-600 cursor-pointer">About</li></Link>

                    {/* Expertise Dropdown */}
                    <li className="relative group cursor-pointer">
                        <Link href="/experties"> <span className="hover:text-blue-600">Expertise</span></Link>
                        {/* <ul className="absolute top-full left-0 mt-2 w-60 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                            <li className="px-4 py-2 hover:bg-gray-100">Import Operations</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Export Operations</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Letter of Credit (LC)</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Trade Documentation</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Compliance & RBI Guidelines</li>
                        </ul> */}
                    </li>

                    <Link href='/Experience'> <li className="hover:text-blue-600 cursor-pointer">Experience</li></Link>
                    <li className="hover:text-blue-600 cursor-pointer">Projects</li>

                    <li className="hover:text-blue-600 cursor-pointer">Certifications</li>
                    <Link href='/achievement'>    <li className="hover:text-blue-600 cursor-pointer">Achievement</li></Link>
                    <Link href="/contact"> <li className="hover:text-blue-600 cursor-pointer">Contact</li></Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
