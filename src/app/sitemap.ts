import { MetadataRoute } from 'next';
import { getFestivals } from '@/lib/data';

// Exact filenames in public/2026/monthly-calander-image/ (some have typos)
const monthImageFilenames: Record<string, string> = {
    january: "tamil-calendar-2026-januvary.png",
    february: "tamil-calendar-2026-februvary.png",
    march: "tamil-calendar-2026-march.png",
    april: "tamil-calendar-2026-april.png",
    may: "tamil-calendar-2026-may.png",
    june: "tamil-calendar-2026-june.png",
    july: "tamil-calendar-2026-july.png",
    august: "tamil-calendar-2026-august.png",
    september: "tamil-calendar-2026-september.png",
    october: "tamil-calendar-2026-october.png",
    november: "tamil-calendar-2026-november.png",
    december: "tamil-calendar-2026-december.png",
};

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tamildailycalendar.vercel.app';

    const routes = [
        '',
        '/ekadashi-2026-dates',
        '/marriage-muhurtham-2026',
        '/about',
        '/contact',
        '/privacy-policy',
        '/disclaimer',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : route === '/about' || route === '/contact' ? 0.6 : 0.8,
    }));

    const months = [
        "january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"
    ];

    const monthRoutes = months.map((month) => ({
        url: `${baseUrl}/tamil-calendar-${month}-2026`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
        images: [
            `${baseUrl}/2026/monthly-calander-image/${monthImageFilenames[month]}`,
        ],
    }));

    const festivals = getFestivals();
    const festivalRoutes = festivals
        .filter(f => f.type === "Major Festival" || f.type === "Festival" || f.type === "Religious")
        .map((festival) => ({
            url: `${baseUrl}/${festival.name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}-2026-date`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

    return [...routes, ...monthRoutes, ...festivalRoutes];
}
