
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCalendarData, getFestivals } from "@/lib/data";
import MonthPageTemplate from "@/components/MonthPageTemplate";
import FestivalPageTemplate from "@/components/FestivalPageTemplate";

// Data Constants
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

// Helper to determine slug type
function parseSlug(slug: string) {
    // Check Month Pattern: tamil-calendar-[month]-2026
    const monthMatch = slug.match(/^tamil-calendar-([a-z]+)-2026$/);
    if (monthMatch) {
        return { type: 'month', value: monthMatch[1] };
    }

    // Check Festival Pattern: [festival]-2026-date
    const festivalMatch = slug.match(/^([\w-]+)-2026-date$/);
    if (festivalMatch) {
        return { type: 'festival', value: festivalMatch[1] };
    }

    return { type: 'unknown', value: null };
}

export async function generateStaticParams() {
    const params = [];

    // 1. Generate Month Slugs
    for (const month of months) {
        params.push({ slug: `tamil-calendar-${month.toLowerCase()}-2026` });
    }

    // 2. Generate Festival Slugs
    const festivals = getFestivals();
    if (festivals) {
        // Filter major/all festivals as before
        const validFestivals = festivals
            .filter(f => f.type === "Major Festival" || f.type === "Festival" || f.type === "Religious");

        for (const f of validFestivals) {
            const slugPart = f.name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
            params.push({ slug: `${slugPart}-2026-date` });
        }
    }

    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const { type, value } = parseSlug(slug);

    if (type === 'month' && value) {
        const monthName = value.charAt(0).toUpperCase() + value.slice(1);
        return {
            title: `Tamil Calendar ${monthName} 2026 - Festivals, Muhurtham & Panchangam`,
            description: `Download Tamil Monthly Calendar for ${monthName} 2026. Check ${monthName} 2026 festivals, holidays, muhurtham dates, and daily panchangam details.`,
            alternates: {
                canonical: `https://tamildailycalendar.vercel.app/${slug}`,
            },
        };
    }

    if (type === 'festival' && value) {
        // Find festival details
        const festivals = getFestivals();
        const festival = festivals?.find(f =>
            f.name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') === value
        );

        if (festival) {
            return {
                title: `${festival.name} 2026 Date - Tamil Calendar 2026 Festival Timing`,
                description: `When is ${festival.name} in 2026? Check exact date, timing, and significance of ${festival.name} 2026 according to Tamil Calendar.`,
                alternates: {
                    canonical: `https://tamildailycalendar.vercel.app/${slug}`,
                },
            };
        }
    }

    return {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    if (!slug) return notFound();

    const { type, value } = parseSlug(slug);

    if (type === 'month' && value) {
        const monthIndex = months.findIndex((m) => m.toLowerCase() === value);
        if (monthIndex === -1) return notFound();

        const calendarData = getCalendarData();
        const monthData = calendarData?.months?.find((m) => m.monthIndex === monthIndex);

        if (!monthData) return notFound();

        return <MonthPageTemplate monthIndex={monthIndex} monthData={monthData} />;
    }

    if (type === 'festival' && value) {
        const festivals = getFestivals();
        const festival = festivals?.find(f =>
            f.name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') === value
        );

        if (!festival) return notFound();

        return <FestivalPageTemplate festival={festival} />;
    }

    return notFound();
}
