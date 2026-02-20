
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Download, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MonthGrid from "@/components/MonthGrid";
import { getCalendarData } from "@/lib/data";

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const tamilMonths = [
    "தை (Thai)", "மாசி (Maasi)", "பங்குனி (Panguni)",
    "சித்திரை (Chithirai)", "வைகாசி (Vaikasi)", "ஆனி (Aani)",
    "ஆடி (Aadi)", "ஆவணி (Avani)", "புரட்டாசி (Purattasi)",
    "ஐப்பசி (Aippasi)", "கார்த்திகை (Karthigai)", "மார்கழி (Margazhi)"
];

// Exact filenames in public/2026/monthly-calander-image/ (some have typos)
const monthImageFilenames = [
    "tamil-calendar-2026-januvary.png",
    "tamil-calendar-2026-februvary.png",
    "tamil-calendar-2026-march.png",
    "tamil-calendar-2026-april.png",
    "tamil-calendar-2026-may.png",
    "tamil-calendar-2026-june.png",
    "tamil-calendar-2026-july.png",
    "tamil-calendar-2026-august.png",
    "tamil-calendar-2026-september.png",
    "tamil-calendar-2026-october.png",
    "tamil-calendar-2026-november.png",
    "tamil-calendar-2026-december.png",
];

import fs from 'fs';
import path from 'path';

function logDebug(message: string) {
    try {
        const logPath = path.join(process.cwd(), 'debug.log');
        fs.appendFileSync(logPath, new Date().toISOString() + ': ' + message + '\n');
    } catch (e) {
        // ignore
    }
}

export async function generateStaticParams() {
    logDebug('Generating static params for months');
    const params = months.map((month) => ({
        month: month.toLowerCase(),
    }));
    logDebug(`Generated ${params.length} month params: ${JSON.stringify(params.map(p => p.month))}`);
    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ month: string }> }) {
    const { month } = await params;
    if (!month) return {};

    const monthName = month.charAt(0).toUpperCase() + month.slice(1);
    return {
        title: `Tamil Calendar ${monthName} 2026 - Festivals, Muhurtham & Panchangam`,
        description: `Download Tamil Monthly Calendar for ${monthName} 2026. Check ${monthName} 2026 festivals, holidays, muhurtham dates, and daily panchangam details.`,
        alternates: {
            canonical: `https://tamil-calendar-2026.vercel.app/tamil-calendar-${month}-2026`,
        },
    };
}

export default async function MonthPage({ params }: { params: Promise<{ month: string }> }) {
    const { month } = await params;

    logDebug(`MonthPage called for: ${month}`);

    // Safety check for undefined month
    if (!month) {
        logDebug('Month is undefined');
        return notFound();
    }

    const monthIndex = months.findIndex((m) => m?.toLowerCase() === month.toLowerCase());
    logDebug(`Month index for ${month}: ${monthIndex}`);

    if (monthIndex === -1) {
        logDebug('Month index -1, not found in constant array');
        return notFound();
    }

    const calendarData = getCalendarData();
    logDebug(`Calendar data months count: ${calendarData?.months?.length}`);

    // Debug available indices
    if (calendarData?.months) {
        logDebug(`Available indices: ${calendarData.months.map(m => m.monthIndex).join(', ')}`);
    }

    const monthData = calendarData?.months?.find((m) => m.monthIndex === monthIndex);
    logDebug(`MonthData found: ${!!monthData}`);

    if (!monthData) {
        logDebug('MonthData missing -> 404');
        return notFound();
    }

    const prevMonthIndex = monthIndex === 0 ? 11 : monthIndex - 1;
    const nextMonthIndex = monthIndex === 11 ? 0 : monthIndex + 1;
    const prevMonth = months[prevMonthIndex].toLowerCase();
    const nextMonth = months[nextMonthIndex].toLowerCase();

    // Unused for now but good to have logic
    // const prevYear = monthIndex === 0 ? 2025 : 2026;
    // const nextYear = monthIndex === 11 ? 2027 : 2026;

    return (
        <div className="bg-background py-12 md:py-20">
            <div className="container mx-auto px-4">
                {/* Navigation Header */}
                <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Link
                        href={monthIndex === 0 ? "/" : `/tamil-calendar-${prevMonth}-2026`}
                        className="flex items-center gap-2 rounded-lg py-2 pl-2 pr-4 text-sm font-medium text-maroon-700 hover:bg-maroon-50 dark:text-maroon-200 dark:hover:bg-maroon-900/30"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {monthIndex === 0 ? "Home" : months[prevMonthIndex]}
                    </Link>

                    <h1 className="text-center">
                        <span className="block text-3xl font-bold text-maroon-900 md:text-5xl dark:text-maroon-100">
                            {months[monthIndex]} 2026
                        </span>
                        <span className="mt-2 block font-tamil text-xl text-maroon-600 md:text-2xl dark:text-gold-400">
                            {/* This is approximate mapping for display */}
                            {tamilMonths[monthIndex]}
                        </span>
                    </h1>

                    <Link
                        href={monthIndex === 11 ? "/" : `/tamil-calendar-${nextMonth}-2026`}
                        className="flex items-center gap-2 rounded-lg py-2 pl-4 pr-2 text-sm font-medium text-maroon-700 hover:bg-maroon-50 dark:text-maroon-200 dark:hover:bg-maroon-900/30"
                    >
                        {monthIndex === 11 ? "Home" : months[nextMonthIndex]}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Monthly Calendar Image */}
                <div className="mb-8 overflow-hidden rounded-2xl border border-maroon-100 shadow-lg dark:border-maroon-800">
                    <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                        <Image
                            src={`/2026/monthly-calander-image/${monthImageFilenames[monthIndex]}`}
                            alt={`Tamil Calendar ${months[monthIndex]} 2026 - Download Free`}
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>
                    <div className="flex items-center justify-between bg-maroon-50 px-6 py-3 dark:bg-maroon-900/40">
                        <span className="font-tamil text-sm text-maroon-700 dark:text-maroon-200">
                            {tamilMonths[monthIndex]} 2026
                        </span>
                        <a
                            href={`/2026/monthly-calander-image/${monthImageFilenames[monthIndex]}`}
                            download={`Tamil-Calendar-2026-${months[monthIndex]}.png`}
                            className="flex items-center gap-2 rounded-full bg-maroon-900 px-6 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-maroon-800 dark:bg-maroon-700"
                        >
                            <Download className="h-4 w-4" />
                            Download Full Calendar PDF
                        </a>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="mb-16">
                    <MonthGrid days={monthData.days} year={2026} />
                </div>

                {/* Monthly Details Grid */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Festivals */}
                    <div className="rounded-xl border border-maroon-100 bg-white p-6 shadow-sm dark:border-maroon-800 dark:bg-maroon-900/10">
                        <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-maroon-900 dark:text-maroon-100">
                            <Calendar className="h-5 w-5 text-maroon-500" />
                            Festivals in {months[monthIndex]}
                        </h3>
                        <ul className="space-y-3">
                            {monthData.days.filter(d => d.festival).length > 0 ? (
                                monthData.days.filter(d => d.festival).map((d) => (
                                    <li key={d.date} className="flex justify-between border-b border-maroon-50 pb-2 last:border-0 dark:border-maroon-800/50">
                                        <span className="font-medium text-foreground/80">{d.day} {months[monthIndex]}</span>
                                        <span className="font-semibold text-maroon-800 dark:text-maroon-200 text-right">{d.festival}</span>
                                    </li>
                                ))
                            ) : (
                                <p className="text-foreground/60 italic">No major festivals listed for this month.</p>
                            )}
                        </ul>
                    </div>

                    {/* Special Dates */}
                    <div className="rounded-xl border border-maroon-100 bg-white p-6 shadow-sm dark:border-maroon-800 dark:bg-maroon-900/10">
                        <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-maroon-900 dark:text-maroon-100">
                            <Calendar className="h-5 w-5 text-gold-500" />
                            Muhurtham & Auspicious Days
                        </h3>
                        <ul className="space-y-3">
                            {monthData.days.filter(d => d.isMuhurtham).length > 0 ? (
                                monthData.days.filter(d => d.isMuhurtham).map((d) => (
                                    <li key={d.date} className="flex justify-between border-b border-maroon-50 pb-2 last:border-0 dark:border-maroon-800/50">
                                        <span className="font-medium text-foreground/80">{d.day} {months[monthIndex]}</span>
                                        <span className="px-2 py-0.5 rounded text-xs bg-maroon-100 text-maroon-800 dark:bg-maroon-800 dark:text-maroon-100">Muhurtham</span>
                                    </li>
                                ))
                            ) : (
                                <p className="text-foreground/60 italic">No specific Muhurtham dates listed.</p>
                            )}
                        </ul>
                        <div className="mt-6 pt-4 border-t border-maroon-50 dark:border-maroon-800/50">
                            <h4 className="font-semibold text-maroon-900 mb-2 dark:text-maroon-100">Ekadashi Dates</h4>
                            <div className="flex flex-wrap gap-2">
                                {monthData.days.filter(d => d.isEkadashi).map((d) => (
                                    <span key={d.date} className="px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-sm font-medium dark:bg-gold-900/30 dark:text-gold-300">
                                        {d.day} {months[monthIndex]}
                                    </span>
                                ))}
                                {monthData.days.filter(d => d.isEkadashi).length === 0 && (
                                    <span className="text-sm text-foreground/60 italic">None</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
