"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const slides = [
    {
        image: "a35da051-71d5-4677-bc19-d708e0524825.jpeg",
        title: "Trade Finance Operations",
        subtitle: "Import & Export | Letter of Credit | Compliance",
    },
    {
        image: "IMG_1789.PNG",
        title: "Import & Export Expertise",
        subtitle: "End-to-End Trade Documentation & Payments",
    },
    {
        image: "IMG_1788.PNG",
        title: "LC & Banking Documentation",
        subtitle: "UCP 600 | FEMA | RBI Guidelines",
    },
];

const TradeCarousel = () => {
    return (
        <div className="relative mt-20">
            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/9122904495"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white text-2xl
                   shadow-lg hover:bg-green-600 transition
                   animate-bounce"
                aria-label="WhatsApp"
            >
                <FaWhatsapp />
            </a>

            <Carousel
                autoPlay
                infiniteLoop
                interval={4000}
                showThumbs={false}
                showStatus={false}
                showArrows={false}
            >
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div
                            className="h-[80vh] w-full bg-cover bg-center flex items-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {/* Overlay */}
                            <div className="w-full h-full bg-black/60 flex items-center">
                                <div className="max-w-4xl px-10 text-white">
                                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-200 mb-6">
                                        {slide.subtitle}
                                    </p>

                                    <div className="flex gap-4">
                                        <Link href="/experience">
                                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium">
                                                View Experience
                                            </button>
                                        </Link>

                                        <button className="px-6 py-3 border border-white rounded-md text-sm font-medium hover:bg-white hover:text-black transition">
                                            Download Resume
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default TradeCarousel;
