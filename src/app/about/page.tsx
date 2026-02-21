import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, BookOpen, Heart, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Tamil Monthly Calendar 2026 – a free resource for Tamil festivals, muhurtham dates, ekadashi, and the complete Tamil panchangam for 2026.",
    alternates: { canonical: "https://tamildailycalendar.vercel.app/about" },
};

export default function AboutPage() {
    return (
        <div className="bg-background py-16 md:py-24">
            <div className="container mx-auto max-w-4xl px-4">

                {/* Header */}
                <div className="mb-12 text-center">
                    <span className="mb-4 inline-block rounded-full bg-maroon-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-maroon-700 dark:bg-maroon-900/40 dark:text-maroon-300">
                        About Us
                    </span>
                    <h1 className="mb-4 text-4xl font-bold text-maroon-900 dark:text-maroon-100 md:text-5xl">
                        Tamil Monthly Calendar 2026
                    </h1>
                    <p className="font-tamil text-xl text-maroon-600 dark:text-gold-400">
                        தமிழ் மாத காலண்டர் 2026
                    </p>
                </div>

                {/* Mission & Who We Are */}
                <div className="mb-12 grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl bg-maroon-50 p-8 dark:bg-maroon-900/20">
                        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-maroon-900 dark:text-maroon-100">
                            <Heart className="h-6 w-6 text-maroon-500" />
                            Our Mission
                        </h2>
                        <p className="text-lg leading-relaxed text-foreground/80">
                            We are dedicated to providing accurate, free, and easy-to-use Tamil calendar information
                            for the Tamil community worldwide. Our platform brings together traditional Tamil
                            panchangam knowledge with modern web accessibility.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-maroon-50 p-8 dark:bg-maroon-900/20">
                        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-maroon-900 dark:text-maroon-100">
                            <Globe className="h-6 w-6 text-maroon-500" />
                            Who We Are
                        </h2>
                        <p className="text-lg leading-relaxed text-foreground/80">
                            We are an independent team passionate about preserving and sharing Tamil cultural heritage.
                            Our goal is to make essential dates—like muhurthams, ekadashi, and festivals—accessible
                            to everyone, everywhere, entirely for free.
                        </p>
                    </div>
                </div>

                {/* What We Offer */}
                <div className="mb-12">
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-maroon-900 dark:text-maroon-100">
                        <BookOpen className="h-6 w-6 text-maroon-500" />
                        What We Offer
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            { title: "Monthly Calendars", desc: "Detailed Tamil calendar for all 12 months of 2026 with downloadable images." },
                            { title: "Festival Dates", desc: "Accurate dates for all major Tamil festivals including Pongal, Diwali, Aadi Perukku, and more." },
                            { title: "Muhurtham Dates", desc: "Auspicious marriage muhurtham dates for 2026 based on Tamil tradition." },
                            { title: "Ekadashi Dates", desc: "Complete list of Ekadashi fasting days with Vaikunta Ekadashi and other important observances." },
                            { title: "Free PDF Download", desc: "Download the full 2026 Tamil calendar as a PDF for offline use." },
                            { title: "Monthly Images", desc: "High-quality monthly calendar images for every month of 2026." },
                        ].map((item) => (
                            <div key={item.title} className="rounded-xl border border-maroon-100 bg-white p-5 shadow-sm dark:border-maroon-800 dark:bg-maroon-900/10">
                                <h3 className="mb-2 font-bold text-maroon-900 dark:text-maroon-100">{item.title}</h3>
                                <p className="text-sm text-foreground/70">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* About Tamil Calendar */}
                <div className="mb-12">
                    <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-maroon-900 dark:text-maroon-100">
                        <Globe className="h-6 w-6 text-maroon-500" />
                        About the Tamil Calendar System
                    </h2>
                    <div className="space-y-4 text-foreground/80 leading-relaxed">
                        <p>
                            The Tamil calendar (Tamil Panchangam) is a lunisolar calendar system used by Tamil
                            people primarily in Tamil Nadu, Sri Lanka, Malaysia, Singapore, and across the global
                            Tamil diaspora. It is based on the ancient sidereal zodiac and follows the motion of
                            the sun through the 12 zodiac signs (Rasi).
                        </p>
                        <p>
                            The Tamil year consists of 12 months: Thai, Maasi, Panguni, Chithirai, Vaikasi, Aani,
                            Aadi, Avani, Purattasi, Aippasi, Karthigai, and Margazhi. Each month is associated
                            with specific festivals and auspicious days that hold deep cultural and religious
                            significance.
                        </p>
                    </div>
                </div>

                {/* Disclaimer note */}
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800/40 dark:bg-amber-900/10">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                        <strong>Note:</strong> While we strive for accuracy, festival and muhurtham dates may
                        vary slightly by region and tradition. Always consult a qualified astrologer or
                        local panchangam for precise timings for important events.
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-xl bg-maroon-900 px-8 py-4 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-maroon-800 dark:bg-maroon-700"
                    >
                        <Calendar className="h-5 w-5" />
                        View Tamil Calendar 2026
                    </Link>
                </div>

            </div>
        </div>
    );
}
