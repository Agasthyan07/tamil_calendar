import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Circle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { getPournamiDates } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Pournami Dates 2026 Tamil Calendar',
    description: 'Find all Pournami (Full Moon) dates and timings for 2026. Complete list of Pournami viratham and girivalam days for Tamil calendar year 2026.',
    alternates: {
        canonical: 'https://tamildailycalendar.vercel.app/pournami-2026-dates',
    },
};

export default function PournamiDatesPage() {
    const pournamiDates = getPournamiDates();

    return (
        <div className="bg-background py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-maroon-600 hover:text-maroon-800 dark:text-maroon-400 dark:hover:text-maroon-300"
                >
                    <ArrowLeft className="h-4 w-4" /> Back to Home
                </Link>

                <SectionHeading
                    title="Pournami Dates 2026"
                    subtitle="பௌர்ணமி விரத நாட்கள் 2026"
                    centered
                />

                <div className="mb-10 text-center text-foreground/80">
                    <p className="mb-4">
                        Pournami (Full Moon day) holds great spiritual significance for performing Satyanarayan Pooja, visiting temples, and observing Viratham.
                    </p>
                    <p>
                        Below is the complete list of Pournami dates for the year 2026.
                    </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-maroon-100 bg-white shadow-lg dark:border-maroon-800 dark:bg-maroon-900/20">
                    <div className="bg-maroon-900 px-6 py-4 text-white dark:bg-maroon-950">
                        <div className="flex items-center gap-2 font-semibold">
                            <Circle className="h-5 w-5 fill-gold-400 text-gold-400" />
                            <span>Pournami 2026 Calendar (பௌர்ணமி)</span>
                        </div>
                    </div>
                    <div className="p-0">
                        <table className="w-full text-left text-sm md:text-base">
                            <thead className="bg-maroon-50 text-maroon-900 dark:bg-maroon-900/40 dark:text-maroon-100">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Date</th>
                                    <th className="px-6 py-4 font-semibold">Tamil Month Pournami</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-maroon-50 dark:divide-maroon-800/50">
                                {pournamiDates.map((item, idx) => {
                                    const dateObj = new Date(item.date);
                                    const formattedDate = dateObj.toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    });

                                    return (
                                        <tr key={idx} className="transition-colors hover:bg-maroon-50/50 dark:hover:bg-maroon-800/20">
                                            <td className="px-6 py-4 font-medium text-foreground/90">
                                                {formattedDate}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center rounded-full bg-gold-100 px-3 py-1 text-sm font-medium text-gold-800 dark:bg-gold-900/30 dark:text-gold-300">
                                                    {item.name}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
