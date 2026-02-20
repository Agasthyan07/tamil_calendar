import Link from "next/link";
import { ArrowLeft, Calendar, Info } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { getEkadashiDates } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ekadashi 2026 Dates - Tamil Calendar 2026 Vaikunta Ekadashi",
    description: "List of all Ekadashi dates in 2026. Check Vaikunta Ekadashi 2026 date and importance of Ekadashi fasting according to Tamil Calendar.",
    alternates: {
        canonical: "https://tamil-calendar-2026.vercel.app/ekadashi-2026-dates",
    },
};

export default function EkadashiPage() {
    const ekadashiDates = getEkadashiDates();

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
                    title="Ekadashi Dates 2026"
                    subtitle="Complete list of Ekadashi fasting days for the year 2026"
                    centered
                />

                <div className="mb-12 rounded-2xl bg-gold-50 p-6 md:p-8 dark:bg-maroon-900/40">
                    <div className="flex items-start gap-4">
                        <Info className="mt-1 h-6 w-6 flex-shrink-0 text-maroon-700 dark:text-gold-400" />
                        <div>
                            <h3 className="mb-2 text-lg font-bold text-maroon-900 dark:text-maroon-100">Significance of Ekadashi</h3>
                            <p className="text-foreground/80 leading-relaxed">
                                Ekadashi is the eleventh lunar day (tithi) of each of the two lunar phases which occur in a Hindu calendar month - the Sukla Paksha (the period of the brightening moon usually known as the waxing phase) and the Krishna Paksha (the period of the fading moon usually known as the waning phase). It is considered a spiritually beneficial day and is usually observed by a partial or complete fast.
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
                                <th className="px-6 py-4 font-semibold">Event</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-maroon-100 dark:divide-maroon-800">
                            {ekadashiDates.map((item, idx) => {
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
                                            {item.name}
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
