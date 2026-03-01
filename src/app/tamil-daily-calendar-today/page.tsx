import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Star, Info, ArrowRight } from 'lucide-react';
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
        title: `Tamil Daily Calendar Today – ${formattedDate} | Panchangam`,
        description: `Get the Tamil daily calendar today for ${formattedDate}. Check Tamil date, Nalla Neram, Nakshatram, Tithi, and Rasi details instantly.`,
        alternates: {
            canonical: 'https://tamildailycalendar.vercel.app/tamil-daily-calendar-today/'
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

export default function TamilDailyCalendarTodayPage() {
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
                title={`Tamil Daily Calendar Today – ${formattedDateEn}`}
                subtitle="Today's detailed Panchangam, Date, Fasting, and Nalla Neram"
                centered
                className="pt-16 pb-8"
            />

            <div className="container mx-auto px-4 pb-16 max-w-4xl">
                <div className="bg-white dark:bg-maroon-900/20 rounded-2xl shadow-lg border border-maroon-100 dark:border-maroon-800 overflow-hidden mb-8">

                    {/* Header Dates */}
                    <div className="bg-gradient-to-r from-maroon-900 to-maroon-800 p-8 text-white relative overflow-hidden">
                        <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-gold-500/20 blur-3xl" />
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-gold-500 text-maroon-950 shadow-lg">
                                    <span className="text-3xl font-black leading-none">{todayData.day}</span>
                                    <span className="text-sm font-bold uppercase tracking-wide">{todayDateStr.split('-')[1]}</span>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-1">English Date</p>
                                    <h2 className="text-2xl font-bold text-white mb-1">
                                        {todayData.dayOfWeek}, {formattedDateEn}
                                    </h2>
                                </div>
                            </div>

                            <div className="md:text-right border-t border-white/20 pt-4 md:border-t-0 md:pt-0">
                                <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-1">Tamil Date</p>
                                <h2 className="text-2xl font-bold font-tamil text-white mb-1">
                                    {tamilMonthName} {todayData.tamilDay}
                                </h2>
                                <p className="text-maroon-200">
                                    {tamilDayName}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Panchangam Data Grid */}
                    <div className="p-6 md:p-8 space-y-8">
                        {todayData.festival && (
                            <div className="bg-gold-50 dark:bg-gold-900/10 border border-gold-200 dark:border-gold-800/50 p-4 rounded-xl flex items-center gap-3">
                                <Star className="h-6 w-6 text-gold-600 dark:text-gold-400 shrink-0" />
                                <div>
                                    <p className="text-sm text-gold-800/70 dark:text-gold-300/70 font-semibold mb-0.5">Today's Festival / Event</p>
                                    <p className="text-lg font-bold text-gold-900 dark:text-gold-50">{todayData.festival}</p>
                                </div>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            {/* Astrological Info */}
                            <div>
                                <h3 className="text-lg font-bold text-maroon-900 dark:text-maroon-100 flex items-center gap-2 border-b border-maroon-100 dark:border-maroon-900/50 pb-3 mb-4">
                                    <Info className="h-5 w-5 text-maroon-500" />
                                    Astrological Details
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                                        <span className="text-foreground/70 font-medium">Tithi</span>
                                        <span className="font-semibold text-foreground">Check Local Almanac</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                                        <span className="text-foreground/70 font-medium">Nakshatram (Star)</span>
                                        <span className="font-semibold text-foreground">Check Local Almanac</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                                        <span className="text-foreground/70 font-medium">Rasi (Moon Sign)</span>
                                        <span className="font-semibold text-foreground">Check Local Almanac</span>
                                    </div>
                                </div>
                            </div>

                            {/* Nalla Neram */}
                            <div>
                                <h3 className="text-lg font-bold text-maroon-900 dark:text-maroon-100 flex items-center gap-2 border-b border-maroon-100 dark:border-maroon-900/50 pb-3 mb-4">
                                    <Calendar className="h-5 w-5 text-maroon-500" />
                                    Today Nalla Neram
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                                        <span className="text-foreground/70 font-medium">Nalla Neram</span>
                                        <span className="font-semibold text-green-700 dark:text-green-400">{panchangam?.nallaNeram || "N/A"}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                                        <span className="text-foreground/70 font-medium">Gowri Nalla Neram</span>
                                        <span className="font-semibold text-green-700 dark:text-green-400">{panchangam?.gowriNallaNeram || "N/A"}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                                        <span className="text-foreground/70 font-medium">Rahu Kalam</span>
                                        <span className="font-semibold text-red-700 dark:text-red-400">{panchangam?.rahuKalam || "N/A"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Block for SEO */}
                <div className="prose dark:prose-invert prose-maroon max-w-none bg-white md:p-8 p-6 rounded-2xl shadow-sm border border-maroon-100 dark:border-maroon-800 dark:bg-maroon-900/10">
                    <h2>About Tamil Daily Calendar Today</h2>
                    <p>
                        Checking the <strong>Tamil daily calendar today</strong> helps you stay informed of essential timings and fasts. In the Tamil tradition, each day holds unique significance determined by the transit of the sun and the moon. While modern schedules rely on the Gregorian calendar, cultural, religious, and social activities strictly align with the classic <strong>today daily calendar in Tamil</strong>.
                    </p>
                    <p>
                        Here we fetch the current live date to display the <strong>Tamil date</strong>, <strong>English date</strong>, daily <strong>Nalla Neram</strong>, and any prominent <strong>Festivals</strong>. Note that for precise <strong>Tithi</strong>, <strong>Nakshatram</strong>, and <strong>Rasi</strong> alignments which change at specific hours of the day, consulting a localized daily panchangam block is advised.
                    </p>
                </div>

                <div className="mt-8 text-center flex flex-col md:flex-row justify-center gap-4">
                    <Link
                        href="/tamil-calendar-tomorrow/"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-maroon-900 px-6 py-3 font-medium text-white hover:bg-maroon-800 transition-colors"
                    >
                        View Tamil Calendar Tomorrow <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                        href="/today-nalla-neram/"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-maroon-200 px-6 py-3 font-medium text-maroon-800 hover:bg-maroon-50 dark:border-maroon-700 dark:text-maroon-200 dark:hover:bg-maroon-800 transition-colors"
                    >
                        Check Today Nalla Neram
                    </Link>
                </div>
            </div>
        </div>
    );
}
