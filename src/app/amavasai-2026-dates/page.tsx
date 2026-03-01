import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Moon } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { getAmavasaiDates } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Amavasai Dates 2026 Tamil Calendar',
    description: 'Find all Amavasai (New Moon) dates and timings for 2026. Complete list of Amavasai viratham days for Tamil calendar year 2026.',
    alternates: {
        canonical: 'https://tamildailycalendar.vercel.app/amavasai-2026-dates',
    },
};

export default function AmavasaiDatesPage() {
    const amavasaiDates = getAmavasaiDates();

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
                    title="Amavasai Dates 2026"
                    subtitle="அமாவாசை விரத நாட்கள் 2026"
                    centered
                />

                <div className="mb-10 text-center text-foreground/80">
                    <p className="mb-4">
                        Amavasai (New Moon day) is considered highly significant in the Tamil calendar for offering prayers to ancestors (Tharpanam) and fasting (Viratham).
                    </p>
                    <p>
                        Below is the complete list of Amavasai dates for the year 2026.
                    </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-maroon-100 bg-white shadow-lg dark:border-maroon-800 dark:bg-maroon-900/20">
                    <div className="bg-maroon-900 px-6 py-4 text-white dark:bg-maroon-950">
                        <div className="flex items-center gap-2 font-semibold">
                            <Moon className="h-5 w-5 text-gold-400" />
                            <span>Amavasai 2026 Calendar (அமாவாசை)</span>
                        </div>
                    </div>
                    <div className="p-0">
                        <table className="w-full text-left text-sm md:text-base">
                            <thead className="bg-maroon-50 text-maroon-900 dark:bg-maroon-900/40 dark:text-maroon-100">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Date</th>
                                    <th className="px-6 py-4 font-semibold">Tamil Month Amavasai</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-maroon-50 dark:divide-maroon-800/50">
                                {amavasaiDates.map((item, idx) => {
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
                                                <span className="inline-flex items-center rounded-full bg-maroon-100 px-3 py-1 text-sm font-medium text-maroon-800 dark:bg-maroon-900/50 dark:text-maroon-200">
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
