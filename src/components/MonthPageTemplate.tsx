
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, Calendar } from "lucide-react";
import MonthGrid from "@/components/MonthGrid";
import { getCalendarData, MonthData } from "@/lib/data";

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

export default function MonthPageTemplate({ monthIndex, monthData }: { monthIndex: number, monthData: MonthData }) {
    const prevMonthIndex = monthIndex === 0 ? 11 : monthIndex - 1;
    const nextMonthIndex = monthIndex === 11 ? 0 : monthIndex + 1;
    const prevMonth = months[prevMonthIndex].toLowerCase();
    const nextMonth = months[nextMonthIndex].toLowerCase();

    return (
        <div className="bg-background py-8 md:py-20">
            <div className="container mx-auto px-4">
                {/* Navigation Header */}
                <div className="mb-6 md:mb-8">
                    {/* Title centered on all screens */}
                    <h1 className="mb-4 text-center">
                        <span className="block text-2xl font-bold text-maroon-900 sm:text-3xl md:text-5xl dark:text-maroon-100">
                            {months[monthIndex]} 2026
                        </span>
                        <span className="mt-1 block font-tamil text-base text-maroon-600 sm:text-xl md:text-2xl dark:text-gold-400">
                            {tamilMonths[monthIndex]}
                        </span>
                    </h1>

                    {/* Prev/Next navigation row */}
                    <div className="flex items-center justify-between">
                        <Link
                            href={monthIndex === 0 ? "/" : `/tamil-calendar-${prevMonth}-2026`}
                            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-maroon-700 hover:bg-maroon-50 dark:text-maroon-200 dark:hover:bg-maroon-900/30"
                        >
                            <ArrowLeft className="h-4 w-4 shrink-0" />
                            <span className="hidden sm:inline">{monthIndex === 0 ? "Home" : months[prevMonthIndex]}</span>
                            <span className="sm:hidden">{monthIndex === 0 ? "Home" : months[prevMonthIndex].slice(0, 3)}</span>
                        </Link>

                        <Link
                            href={monthIndex === 11 ? "/" : `/tamil-calendar-${nextMonth}-2026`}
                            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-maroon-700 hover:bg-maroon-50 dark:text-maroon-200 dark:hover:bg-maroon-900/30"
                        >
                            <span className="hidden sm:inline">{monthIndex === 11 ? "Home" : months[nextMonthIndex]}</span>
                            <span className="sm:hidden">{monthIndex === 11 ? "Home" : months[nextMonthIndex].slice(0, 3)}</span>
                            <ArrowRight className="h-4 w-4 shrink-0" />
                        </Link>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mb-12 flex justify-center">
                    <button className="flex items-center gap-2 rounded-full bg-maroon-900 px-6 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-maroon-800 dark:bg-maroon-700">
                        <Download className="h-5 w-5" />
                        Download {months[monthIndex]} PDF
                    </button>
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
                                    <li key={d.date} className="flex flex-col gap-0.5 border-b border-maroon-50 pb-2 last:border-0 dark:border-maroon-800/50 sm:flex-row sm:justify-between">
                                        <span className="text-sm font-medium text-foreground/60">{d.day} {months[monthIndex]}</span>
                                        <span className="font-semibold text-maroon-800 dark:text-maroon-200 sm:text-right">{d.festival}</span>
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
