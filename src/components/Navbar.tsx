"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Service", href: "#service" },
    { label: "Expertise", href: "#expertise" },
    { label: "Members", href: "#members" },
    { label: "About", href: "#about" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-500 ${scrolled
                        ? "bg-navy-deep/90 backdrop-blur-md border-b border-white/5"
                        : ""
                    }`}
            >
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                        MARIMBA
                    </span>
                </Link>

                <div className="flex items-center gap-6">
                    {/* External links: Podcast & Note */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="#"
                            className="text-xs font-medium tracking-widest uppercase text-white/50 hover:text-primary transition-colors"
                            aria-label="Podcast"
                        >
                            Podcast
                        </a>
                        <a
                            href="#"
                            className="text-xs font-medium tracking-widest uppercase text-white/50 hover:text-primary transition-colors"
                            aria-label="Note"
                        >
                            Note
                        </a>
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-white/70 hover:text-primary transition-colors tracking-wide"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
                        aria-label="Menu"
                    >
                        <span className="hidden sm:inline">Menu</span>
                        <div className="flex flex-col gap-1.5 w-6">
                            <span
                                className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-navy-deep/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-20"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="text-3xl font-bold text-white hover:text-primary transition-colors tracking-tight"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <div className="flex gap-6 mt-8">
                            <a
                                href="#"
                                className="text-sm text-white/50 hover:text-primary transition-colors"
                            >
                                Podcast
                            </a>
                            <a
                                href="#"
                                className="text-sm text-white/50 hover:text-primary transition-colors"
                            >
                                Note
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
