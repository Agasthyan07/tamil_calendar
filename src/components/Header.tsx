"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, Calendar } from "lucide-react";
import clsx from "clsx";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Festivals", href: "/#festivals" },
        { name: "Ekadashi", href: "/ekadashi-2026-dates" },
        { name: "Muhurtham", href: "/marriage-muhurtham-2026" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-maroon-200 bg-background/80 backdrop-blur-md dark:border-maroon-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold text-maroon-900 dark:text-maroon-100">
                        <Calendar className="h-6 w-6 text-maroon-700 dark:text-gold-400" />
                        <span className="text-lg md:text-xl">Tamil Calendar 2026</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium hover:text-maroon-700 dark:hover:text-gold-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="rounded-full p-2 hover:bg-maroon-50 dark:hover:bg-maroon-900 transition-colors"
                                aria-label="Toggle Dark Mode"
                            >
                                {theme === "dark" ? <Sun className="h-5 w-5 text-gold-400" /> : <Moon className="h-5 w-5 text-maroon-900" />}
                            </button>
                        )}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-4">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="rounded-full p-2 hover:bg-maroon-50 dark:hover:bg-maroon-900 transition-colors"
                                aria-label="Toggle Dark Mode"
                            >
                                {theme === "dark" ? <Sun className="h-5 w-5 text-gold-400" /> : <Moon className="h-5 w-5 text-maroon-900" />}
                            </button>
                        )}
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-maroon-900 dark:text-maroon-100"
                            aria-label="Menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-maroon-200 dark:border-maroon-800 bg-background">
                    <nav className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium hover:text-maroon-700 dark:hover:text-gold-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
