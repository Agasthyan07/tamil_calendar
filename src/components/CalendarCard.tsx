import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Calendar } from "lucide-react";

interface CalendarCardProps {
    monthNameEn: string;
    monthNameTa?: string; // Optional if we don't have it yet, but plan to
    year: number;
    monthIndex: number; // 0-11
}

// Tamil month names mapping (if not passed directly)
const tamilMonthNames = [
    "தை (Thai)", "மாசி (Maasi)", "பங்குனி (Panguni)",
    "சித்திரை (Chithirai)", "வைகாசி (Vaikasi)", "ஆனி (Aani)",
    "ஆடி (Aadi)", "ஆவணி (Avani)", "புரட்டாசி (Purattasi)",
    "ஐப்பசி (Aippasi)", "கார்த்திகை (Karthigai)", "மார்கழி (Margazhi)"
];

// Tamil script month names (Jan–Dec)
const monthNamesTamilScript = [
    "ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்",
    "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"
];

// Exact filenames in public/2026/monthly-calander-image/ (some have typos in the original files)
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

export default function CalendarCard({
    monthNameEn,
    year,
    monthIndex,
}: CalendarCardProps) {
    const monthUrl = `/tamil-calendar-${monthNameEn.toLowerCase()}-${year}`;

    const imageFilename = monthImageFilenames[monthIndex];
    const imageSrc = `/2026/monthly-calander-image/${imageFilename}`;

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-maroon-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-maroon-800 dark:bg-maroon-900/20">
            {/* Month preview image */}
            <div className="relative h-40 w-full overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={`Tamil Calendar ${monthNameEn} 2026`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 to-transparent" />
                {/* Month name overlay */}
                <div className="absolute bottom-3 left-4">
                    <span className="block text-lg font-bold text-white">{monthNameEn}</span>
                    <span className="block font-tamil text-sm text-maroon-100">{monthNamesTamilScript[monthIndex]}</span>
                </div>
                {/* Year badge */}
                <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <Calendar className="h-5 w-5 text-white" />
                </div>
            </div>

            {/* Card body */}
            <div className="p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-maroon-500 dark:text-gold-400">
                    {year} • தமிழ் காலண்டர்
                </span>
                <div className="mt-4 flex gap-3">
                    <Link
                        href={monthUrl}
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-maroon-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-maroon-800 dark:bg-maroon-700 dark:hover:bg-maroon-600"
                    >
                        View <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                        href={imageSrc}
                        download={`Tamil-Calendar-2026-${monthNameEn}.png`}
                        className="flex items-center justify-center rounded-lg border border-maroon-200 bg-transparent px-3 py-2 text-maroon-700 transition-colors hover:bg-maroon-50 dark:border-maroon-700 dark:text-gold-300 dark:hover:bg-maroon-800"
                        aria-label={`Download Tamil Calendar ${monthNameEn} 2026 image`}
                    >
                        <Download className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
