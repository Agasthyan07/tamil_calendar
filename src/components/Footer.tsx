import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-maroon-200 bg-maroon-50/50 py-12 dark:border-maroon-800 dark:bg-maroon-900/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-maroon-900 dark:text-maroon-100">Tamil Calendar 2026</h3>
                        <p className="text-sm text-foreground/80">
                            Your comprehensive guide to Tamil festivals, holidays, muhurthams, and auspicious dates for the year 2026.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-base font-semibold text-maroon-800 dark:text-maroon-200">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:underline hover:text-maroon-700 dark:hover:text-gold-400">
                                    Monthly Calendar
                                </Link>
                            </li>
                            <li>
                                <Link href="/ekadashi-2026-dates" className="hover:underline hover:text-maroon-700 dark:hover:text-gold-400">
                                    Ekadashi Dates
                                </Link>
                            </li>
                            <li>
                                <Link href="/marriage-muhurtham-2026" className="hover:underline hover:text-maroon-700 dark:hover:text-gold-400">
                                    Marriage Muhurtham
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-base font-semibold text-maroon-800 dark:text-maroon-200">Festivals</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/pongal-2026-date" className="hover:underline hover:text-maroon-700 dark:hover:text-gold-400">
                                    Pongal 2026
                                </Link>
                            </li>
                            <li>
                                <Link href="/tamil-new-year-2026-date" className="hover:underline hover:text-maroon-700 dark:hover:text-gold-400">
                                    Tamil New Year 2026
                                </Link>
                            </li>
                            <li>
                                <Link href="/diwali-2026-date" className="hover:underline hover:text-maroon-700 dark:hover:text-gold-400">
                                    Diwali 2026
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-maroon-200 pt-8 text-xs text-foreground/60 md:flex-row dark:border-maroon-800">
                    <p>&copy; 2026 Tamil Monthly Calendar. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                        <Link href="/terms" className="hover:underline">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
