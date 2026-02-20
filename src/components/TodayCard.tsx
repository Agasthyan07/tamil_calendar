"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Star, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";

interface TodayData {
    day: number;
    date: string;
    dayOfWeek: string;
    tamilMonth: string;
    tamilDay: number;
    festival: string | null;
    isHoliday: boolean;
    isEkadashi: boolean;
    isMuhurtham: boolean;
    monthNameEn: string;
    monthIndex: number;
}

interface TodayCardProps {
    todayData: TodayData | null;
}

const tamilDayNames: Record<string, string> = {
    Sunday: "ஞாயிறு",
    Monday: "திங்கள்",
    Tuesday: "செவ்வாய்",
    Wednesday: "புதன்",
    Thursday: "வியாழன்",
    Friday: "வெள்ளி",
    Saturday: "சனி",
};

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

export default function TodayCard({ todayData }: TodayCardProps) {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const fmt = () =>
            new Date().toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            });

        setTime(fmt());
        const id = setInterval(() => setTime(fmt()), 1000);
        return () => clearInterval(id);
    }, []);

    if (!todayData) return null;

    const {
        day,
        dayOfWeek,
        tamilMonth,
        tamilDay,
        festival,
        isHoliday,
        isEkadashi,
        isMuhurtham,
        monthNameEn,
    } = todayData;

    const tamilDayName = tamilDayNames[dayOfWeek] ?? "";
    const tamilMonthName = tamilMonthNames[tamilMonth] ?? tamilMonth;
    const monthUrl = `/tamil-calendar-${monthNameEn.toLowerCase()}-2026`;

    // Build status badges
    const badges: { label: string; icon: React.ReactNode; color: string }[] = [];
    if (isHoliday) badges.push({ label: "Holiday", icon: <Sun className="h-3.5 w-3.5" />, color: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300" });
    if (isEkadashi) badges.push({ label: "Ekadashi", icon: <Star className="h-3.5 w-3.5" />, color: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300" });
    if (isMuhurtham) badges.push({ label: "Muhurtham", icon: <Sparkles className="h-3.5 w-3.5" />, color: "bg-gold-100 text-gold-800 dark:bg-yellow-900/40 dark:text-yellow-300" });

    return (
        <section className="py-8 md:py-10 bg-gradient-to-b from-maroon-900 to-maroon-800">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl px-6 py-8 md:px-10 md:py-10">
                    {/* Decorative glow */}
                    <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-gold-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-maroon-500/20 blur-3xl" />

                    <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        {/* Left: Live clock + today label */}
                        <div className="flex items-center gap-5">
                            <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-gold-500 text-maroon-950 shadow-lg">
                                <span className="text-2xl font-black leading-none">{day}</span>
                                <span className="text-xs font-bold uppercase tracking-wide">{monthNameEn.slice(0, 3)}</span>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-0.5">Today</p>
                                <h2 className="text-xl font-bold text-white leading-tight">
                                    {dayOfWeek}, {monthNameEn} {day}, 2026
                                </h2>
                                <p className="font-tamil text-maroon-200">
                                    {tamilDayName} — {tamilMonthName} {tamilDay}
                                </p>
                                {time && (
                                    <div className="mt-1 flex items-center gap-1.5 text-sm text-white/60">
                                        <Clock className="h-3.5 w-3.5" />
                                        <span className="font-mono">{time}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Center: Badges + Festival */}
                        <div className="flex flex-col gap-3">
                            {festival && (
                                <div className="flex items-center gap-2 rounded-xl bg-gold-500/15 border border-gold-500/30 px-4 py-2">
                                    <Star className="h-4 w-4 text-gold-400 shrink-0" />
                                    <span className="font-semibold text-gold-200">{festival}</span>
                                </div>
                            )}
                            {badges.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {badges.map((b) => (
                                        <span key={b.label} className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${b.color}`}>
                                            {b.icon} {b.label}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {badges.length === 0 && !festival && (
                                <span className="text-sm text-white/50 italic">No special observances today</span>
                            )}
                        </div>

                        {/* Right: CTA */}
                        <div className="flex shrink-0">
                            <Link
                                href={monthUrl}
                                className="flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3 font-bold text-maroon-950 shadow-lg transition-transform hover:scale-105 hover:bg-gold-400"
                            >
                                <Calendar className="h-4 w-4" />
                                View {monthNameEn}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
