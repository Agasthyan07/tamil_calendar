import clsx from "clsx";
import { type DayData } from "@/lib/data";

interface MonthGridProps {
    days: DayData[];
    year: number;
}

export default function MonthGrid({ days }: MonthGridProps) {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Calculate empty slots for the start of the month
    const firstDay = days[0];
    const startDayIndex = weekDays.findIndex(d => d === firstDay.dayOfWeek.slice(0, 3));
    const blanks = Array(startDayIndex).fill(null);

    return (
        <div className="overflow-hidden rounded-xl border border-maroon-200 bg-white shadow-sm dark:border-maroon-800 dark:bg-maroon-900/20">
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 bg-maroon-900 text-center text-white dark:bg-maroon-950">
                {weekDays.map((day) => (
                    <div key={day} className={clsx(
                        "py-2 text-xs font-semibold sm:py-3 sm:text-sm",
                        day === "Sun" && "bg-maroon-800"
                    )}>
                        {/* Short label on tiny screens, full on sm+ */}
                        <span className="sm:hidden">{day.slice(0, 1)}</span>
                        <span className="hidden sm:inline">{day}</span>
                    </div>
                ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 divide-x divide-y divide-maroon-100 border-b border-maroon-100 dark:divide-maroon-800 dark:border-maroon-800">
                {/* Blank cells for previous month */}
                {blanks.map((_, idx) => (
                    <div key={`blank-${idx}`} className="h-16 sm:h-24 md:h-32 bg-maroon-50/30 dark:bg-maroon-900/10" />
                ))}

                {/* Calendar Days */}
                {days.map((day) => (
                    <div
                        key={day.date}
                        className={clsx(
                            "relative flex h-16 flex-col p-1 sm:h-24 sm:p-1.5 md:h-32 md:p-2 transition-colors hover:bg-maroon-50 dark:hover:bg-maroon-900/30",
                            day.isHoliday && "bg-maroon-50/50 dark:bg-maroon-900/10",
                            day.dayOfWeek === "Sunday" && "text-maroon-700 dark:text-maroon-300"
                        )}
                    >
                        {/* Top row: Gregorian day + Tamil day */}
                        <div className="flex items-start justify-between gap-0.5">
                            <span className={clsx(
                                "text-sm font-bold leading-none sm:text-base md:text-xl",
                                day.isHoliday ? "text-maroon-600 dark:text-maroon-400" : "text-foreground"
                            )}>
                                {day.day}
                            </span>

                            {/* Tamil date - hide month name on mobile to save space */}
                            <div className="text-right leading-none">
                                <span className="block text-[9px] font-medium text-foreground/60 sm:text-[10px]">
                                    {day.tamilDay}
                                </span>
                                {/* Tamil month only on sm+ */}
                                <span className="hidden text-[8px] uppercase text-foreground/50 sm:block sm:text-[9px]">
                                    {day.tamilMonth.length > 7 ? day.tamilMonth.slice(0, 7) : day.tamilMonth}
                                </span>
                            </div>
                        </div>

                        {/* Event indicators */}
                        <div className="mt-0.5 flex min-h-0 flex-1 flex-col gap-0.5 overflow-hidden">
                            {day.festival && (
                                <>
                                    {/* Mobile: colored dot */}
                                    <span className="block h-1.5 w-1.5 rounded-full bg-maroon-600 sm:hidden" />
                                    {/* sm+: actual text, truncated */}
                                    <span className="hidden line-clamp-2 text-[9px] font-medium leading-tight text-maroon-800 dark:text-gold-400 sm:block sm:text-[10px] md:text-xs">
                                        {day.festival}
                                    </span>
                                </>
                            )}

                            {/* Ekadashi & Muhurtham: dots on mobile, badges on sm+ */}
                            <div className="flex flex-wrap gap-0.5">
                                {day.isEkadashi && (
                                    <>
                                        <span className="block h-1.5 w-1.5 rounded-full bg-gold-500 sm:hidden" />
                                        <span className="hidden rounded px-1 py-0.5 text-[8px] leading-none bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300 sm:inline sm:text-[9px]">
                                            Eka
                                        </span>
                                    </>
                                )}
                                {day.isMuhurtham && (
                                    <>
                                        <span className="block h-1.5 w-1.5 rounded-full bg-maroon-400 sm:hidden" />
                                        <span className="hidden rounded px-1 py-0.5 text-[8px] leading-none bg-maroon-100 text-maroon-700 dark:bg-maroon-800/40 dark:text-maroon-200 sm:inline sm:text-[9px]">
                                            Muh
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile legend */}
            <div className="flex gap-4 border-t border-maroon-100 px-3 py-2 text-[10px] text-foreground/60 dark:border-maroon-800 sm:hidden">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-maroon-600 inline-block" /> Festival</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-gold-500 inline-block" /> Ekadashi</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-maroon-400 inline-block" /> Muhurtham</span>
            </div>
        </div>
    );
}
