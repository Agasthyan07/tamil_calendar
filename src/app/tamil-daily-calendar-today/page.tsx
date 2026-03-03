import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Star, Info, ArrowRight } from 'lucide-react';
import { getCalendarData } from '@/lib/data';
import { getPanchangamForDay } from '@/lib/panchangam';
import SectionHeading from '@/components/SectionHeading';

export const revalidate = 300;

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

                        {/* Astrological & Panchangam Info */}
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-bold text-maroon-900 dark:text-maroon-100 flex items-center gap-2 border-b-2 border-maroon-200 dark:border-maroon-800 pb-3 mb-6">
                                <Star className="h-6 w-6 text-maroon-600 dark:text-gold-400" />
                                Today's Panchangam Details
                            </h3>

                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                                {/* Left Column */}
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold mb-1 sm:mb-0">நல்ல நேரம் (Nalla Neram)</span>
                                        <span className="font-bold text-green-700 dark:text-green-400 text-right">{panchangam?.nallaNeram || "N/A"}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold mb-1 sm:mb-0">கௌரி நல்ல நேரம் (Gowri)</span>
                                        <span className="font-bold text-green-700 dark:text-green-400 text-right">{panchangam?.gowriNallaNeram || "N/A"}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold mb-1 sm:mb-0">இராகு காலம் (Rahu Kalam)</span>
                                        <span className="font-bold text-red-700 dark:text-red-400 text-right">{panchangam?.rahuKalam || "N/A"}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold mb-1 sm:mb-0">எமகண்டம் (Yamagandam)</span>
                                        <span className="font-bold text-red-700 dark:text-red-400 text-right">{panchangam?.yamagandam || "N/A"}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold mb-1 sm:mb-0">குளிகை (Kuligai)</span>
                                        <span className="font-bold text-red-700 dark:text-red-400 text-right">{panchangam?.kuligai || "N/A"}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold mb-1 sm:mb-0">சூலம் (Soolam)</span>
                                        <span className="font-medium text-foreground text-right">{panchangam?.soolam || "N/A"}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold mb-1 sm:mb-0">பரிகாரம் (Parigaram)</span>
                                        <span className="font-medium text-foreground text-right">{panchangam?.parigaram || "N/A"}</span>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold text-sm mb-1 sm:mb-0">சூரிய உதயம் (Sun Rise)</span>
                                        <span className="font-medium text-foreground text-right text-sm">06:28 AM (Approx)</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold text-sm mb-1 sm:mb-0">சந்திராஷ்டமம் (Chandirashtamam)</span>
                                        <span className="font-medium text-foreground text-right text-sm">Check Local Almanac</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold text-sm mb-1 sm:mb-0">நாள் (Naal)</span>
                                        <span className="font-medium text-foreground text-right text-sm">Check Local Almanac</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold text-sm mb-1 sm:mb-0">லக்னம் (Lagnam)</span>
                                        <span className="font-medium text-foreground text-right text-sm">Check Local Almanac</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold text-sm mb-1 sm:mb-0">திதி (Thithi)</span>
                                        <span className="font-medium text-foreground text-right text-sm text-balance max-w-[200px]">Check Local Almanac</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold text-sm mb-1 sm:mb-0">நட்சத்திரம் (Star)</span>
                                        <span className="font-medium text-foreground text-right text-sm text-balance max-w-[200px]">Check Local Almanac</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-maroon-50 dark:border-maroon-900/30">
                                        <span className="text-maroon-600 dark:text-gold-400 font-semibold text-sm mb-1 sm:mb-0">சுபகாரியம் (Subakariyam)</span>
                                        <span className="font-medium text-foreground text-right text-sm text-balance max-w-[200px]">Check Local Almanac</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rasi Palan Links Section */}
                <div className="bg-gradient-to-br from-maroon-50 to-white dark:from-maroon-900/40 dark:to-maroon-900/10 rounded-2xl shadow-sm border border-maroon-100 dark:border-maroon-800 p-6 md:p-8 mb-8">
                    <h3 className="text-xl font-bold font-tamil text-maroon-900 dark:text-maroon-100 mb-6 flex items-center gap-2">
                        <Star className="h-5 w-5 text-gold-500" />
                        Tamil Rasi Palan : தமிழ் ராசி பலன்
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { en: "Daily Rasi Palan", ta: "இன்றைய ராசி பலன்", href: "#" },
                            { en: "Weekly Rasi Palan", ta: "வார ராசி பலன்", href: "#" },
                            { en: "Monthly Rasi Palan", ta: "மாத ராசி பலன்", href: "#" },
                            { en: "Yearly Rasi Palan", ta: "ஆண்டு ராசி பலன்", href: "#" },
                            { en: "Guru Peyarchi Palan", ta: "குரு பெயர்ச்சி பலன்", href: "#" },
                            { en: "Raagu Kethu Peyarchi Palan", ta: "ராகு கேது பெயர்ச்சி பலன்", href: "#" },
                            { en: "Sani Peyarchi Palan", ta: "சனி பெயர்ச்சி பலன்", href: "#" },
                            { en: "Spiritual Audio CDs", ta: "ஆன்மீக இசை சிடிக்கள்", href: "#" },
                        ].map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="group flex flex-col justify-center p-4 rounded-xl bg-white dark:bg-maroon-900/40 border border-maroon-100 dark:border-maroon-800 hover:border-maroon-300 dark:hover:border-maroon-600 hover:shadow-md transition-all"
                            >
                                <span className="text-sm text-maroon-600 dark:text-gold-400 font-semibold mb-1 group-hover:text-maroon-800 dark:group-hover:text-gold-300 transition-colors">{link.en}</span>
                                <span className="text-base font-bold text-foreground font-tamil">{link.ta}</span>
                            </Link>
                        ))}
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
