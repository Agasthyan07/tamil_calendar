import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, Star, ArrowRight } from 'lucide-react';
import { getCalendarData } from '@/lib/data';
import { getPanchangamForDay } from '@/lib/panchangam';
import SectionHeading from '@/components/SectionHeading';

export async function generateMetadata(): Promise<Metadata> {
    const nowIST = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
    const formattedDate = nowIST.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    return {
        title: `Today Nalla Neram in Tamil – ${formattedDate}`,
        description: `Check Today Nalla Neram, Gowri Panchangam, Rahu Kalam, Yamagandam, and Kuligai timings for ${formattedDate}. Daily auspicious timings for Tamil calendar.`,
        alternates: {
            canonical: 'https://tamildailycalendar.vercel.app/today-nalla-neram/'
        }
    };
}

const tamilMonthNames: Record<string, string> = {
    Thai: "தை",
    Maasi: "மாசி",
    Panguni: "பங்குனி",
    Chithirai: "சித்திரை",
    Vaikasi: "வைகாசி",
    Aani: "ஆனி",
    Aadi: "ஆடி",
    Avani: "ஆவணி",
    Purattasi: "புரட்டாசி",
    Aippasi: "ஐப்பசி",
    Karthigai: "கார்த்திகை",
    Margazhi: "மார்கழி",
};

const tamilDayNames: Record<string, string> = {
    Sunday: "ஞாயிறு",
    Monday: "திங்கள்",
    Tuesday: "செவ்வாய்",
    Wednesday: "புதன்",
    Thursday: "வியாழன்",
    Friday: "வெள்ளி",
    Saturday: "சனி",
};

export default function TodayNallaNeramPage() {
    const nowIST = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
    const todayDateStr = nowIST.toISOString().split('T')[0]; // YYYY-MM-DD
    const formattedDateEn = nowIST.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    const calendarData = getCalendarData();
    const todayMonthData = calendarData?.months?.find(m =>
        m.days.some(d => d.date === todayDateStr)
    );
    const todayData = todayMonthData?.days.find(d => d.date === todayDateStr) ?? null;

    if (!todayData) {
        return (
            <div className="container mx-auto px-4 py-24 text-center">
                <h1 className="text-2xl font-bold">Data currently unavailable</h1>
                <p className="mt-4 text-foreground/70">Please check back later.</p>
                <Link href="/" className="mt-8 inline-flex items-center text-maroon-600 hover:underline">
                    <ArrowRight className="mr-2 h-4 w-4" /> Back to Home
                </Link>
            </div>
        );
    }

    const tamilDayName = tamilDayNames[todayData.dayOfWeek] ?? todayData.dayOfWeek;
    const tamilMonthName = tamilMonthNames[todayData.tamilMonth] ?? todayData.tamilMonth;
    const panchangam = getPanchangamForDay(todayData.dayOfWeek);

    return (
        <div className="bg-background min-h-screen">
            <SectionHeading
                title={`Today Nalla Neram in Tamil – ${formattedDateEn}`}
                subtitle="Today's Auspicious Timings, Gowri Panchangam & Rahu Kalam"
                centered
                className="pt-16 pb-8"
            />

            <div className="container mx-auto px-4 pb-16 max-w-4xl">
                <div className="bg-white dark:bg-maroon-900/20 rounded-2xl shadow-sm border border-maroon-100 dark:border-maroon-800 overflow-hidden mb-8">
                    {/* Header Info */}
                    <div className="bg-maroon-50 dark:bg-maroon-900/40 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-maroon-100 dark:border-maroon-800">
                        <div>
                            <p className="text-sm font-semibold text-maroon-600 dark:text-gold-400 uppercase tracking-wider mb-2">Tamil Date</p>
                            <h2 className="text-2xl font-bold font-tamil text-maroon-900 dark:text-maroon-50 mb-1">
                                {tamilMonthName} {todayData.tamilDay}
                            </h2>
                            <p className="text-foreground/80 font-medium">
                                {todayData.dayOfWeek}, {formattedDateEn}
                            </p>
                        </div>
                        {todayData.festival && (
                            <div className="bg-gold-500/20 dark:bg-gold-500/10 border border-gold-500/30 px-5 py-3 rounded-xl flex items-center gap-3">
                                <Star className="h-5 w-5 text-gold-500" />
                                <span className="font-bold text-maroon-900 dark:text-gold-300">{todayData.festival}</span>
                            </div>
                        )}
                    </div>

                    {/* Timings Grid */}
                    <div className="p-6 md:p-8 grid gap-8 md:grid-cols-2">
                        {/* Auspicious Times */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-green-700 dark:text-green-400">
                                <Star className="h-5 w-5" />
                                Auspicious Times (நல்ல நேரம்)
                            </h3>

                            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-100 dark:border-green-800/50">
                                <div className="mb-4">
                                    <p className="text-sm font-semibold text-green-800/70 dark:text-green-300/70 mb-1 uppercase tracking-wider">Today Nalla Neram</p>
                                    <p className="text-lg font-bold text-green-900 dark:text-green-50">{panchangam?.nallaNeram || "N/A"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-green-800/70 dark:text-green-300/70 mb-1 uppercase tracking-wider">Gowri Panchangam</p>
                                    <p className="text-lg font-bold text-green-900 dark:text-green-50">{panchangam?.gowriNallaNeram || "N/A"}</p>
                                </div>
                            </div>
                        </div>

                        {/* Inauspicious Times */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-red-700 dark:text-red-400">
                                <Clock className="h-5 w-5" />
                                Important Timings
                            </h3>

                            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-100 dark:border-red-800/50 space-y-4">
                                <div>
                                    <p className="text-sm font-semibold text-red-800/70 dark:text-red-300/70 mb-1 uppercase tracking-wider">Today Rahu Kalam</p>
                                    <p className="text-lg font-bold text-red-900 dark:text-red-50">{panchangam?.rahuKalam || "N/A"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-red-800/70 dark:text-red-300/70 mb-1 uppercase tracking-wider">Yamagandam</p>
                                    <p className="text-lg font-bold text-red-900 dark:text-red-50">{panchangam?.yamagandam || "N/A"}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-red-800/70 dark:text-red-300/70 mb-1 uppercase tracking-wider">Kuligai</p>
                                    <p className="text-lg font-bold text-red-900 dark:text-red-50">{panchangam?.kuligai || "N/A"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Block for SEO */}
                <div className="prose dark:prose-invert prose-maroon max-w-none bg-white md:p-8 p-6 rounded-2xl shadow-sm border border-maroon-100 dark:border-maroon-800 dark:bg-maroon-900/10">
                    <h2>About Today's Nalla Neram</h2>
                    <p>
                        Checking the <strong>today nalla neram</strong> is an essential part of the daily routine for millions adhering to the Tamil calendar. Knowing the most auspicious time of the day ensures that important tasks, travels, and new beginnings are started on a positive note.
                    </p>
                    <p>
                        The timing varies each day based on the day of the week. Above, you can find the exact <strong>Today Rahu Kalam</strong>, <strong>Yamagandam</strong>, and <strong>Kuligai</strong> timings alongside the highly considered <strong>Gowri Panchangam</strong> auspicous periods.
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-lg border border-maroon-200 px-6 py-3 font-medium text-maroon-800 hover:bg-maroon-50 dark:border-maroon-700 dark:text-maroon-200 dark:hover:bg-maroon-800 transition-colors"
                    >
                        <Calendar className="h-4 w-4" />
                        View Full Calendar
                    </Link>
                </div>
            </div>
        </div>
    );
}
