import Link from "next/link";
import { ArrowLeft, Clock, Info } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { getMuhurthamDates } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Marriage Muhurtham Dates 2026 - Tamil Calendar Subha Muhurtham",
    description: "Find the best Marriage Muhurtham dates in 2026. Check 2026 Tamil Calendar Subha Muhurtham dates and auspicious timings for weddings.",
    alternates: {
        canonical: "https://tamil-calendar-2026.vercel.app/marriage-muhurtham-2026",
    },
};

export default function MuhurthamPage() {
    const muhurthams = getMuhurthamDates();

    return (
        <div className="bg-background py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-maroon-600 hover:text-maroon-800 dark:text-gold-400 dark:hover:text-gold-300"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Calendar
                </Link>
                <SectionHeading
                    title="Marriage Muhurtham 2026"
                    subtitle="Auspicious Wedding Dates & Timings"
                    centered
                />

                <div className="mb-12 rounded-2xl bg-gold-50 p-6 md:p-8 dark:bg-maroon-900/40">
                    <div className="flex items-start gap-4">
                        <Info className="mt-1 h-6 w-6 flex-shrink-0 text-maroon-700 dark:text-gold-400" />
                        <div>
                            <h3 className="mb-2 text-lg font-bold text-maroon-900 dark:text-maroon-100">Choosing a Muhurtham</h3>
                            <p className="text-foreground/80 leading-relaxed">
                                In Tamil tradition, selecting an auspicious date and time (Muhurtham) is crucial for a happy and prosperous married life. The dates listed below are generally considered auspicious (Subha Muhurtham) based on the Tamil Panchangam for 2026. Please consult your family astrologer for personalized matching based on horoscopes.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-maroon-200 bg-white shadow text-left dark:border-maroon-800 dark:bg-maroon-900/20">
                    <table className="w-full">
                        <thead className="bg-maroon-900 text-white dark:bg-maroon-950">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Date</th>
                                <th className="px-6 py-4 font-semibold">Day</th>
                                <th className="px-6 py-4 font-semibold">Auspicious Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-maroon-100 dark:divide-maroon-800">
                            {muhurthams.map((item, idx) => {
                                const dateObj = new Date(item.date);
                                return (
                                    <tr key={idx} className="hover:bg-maroon-50/50 dark:hover:bg-maroon-800/20 transition-colors">
                                        <td className="px-6 py-4 font-medium text-maroon-900 dark:text-maroon-100">
                                            {dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </td>
                                        <td className="px-6 py-4 text-foreground/70">
                                            {dateObj.toLocaleDateString('en-US', { weekday: 'long' })}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-maroon-800 dark:text-gold-400">
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 opacity-70" />
                                                {item.time}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
