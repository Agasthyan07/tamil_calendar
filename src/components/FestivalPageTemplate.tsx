
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Share2, Info } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { getFestivals, Festival } from "@/lib/data";

export default function FestivalPageTemplate({ festival }: { festival: Festival }) {
    const festivals = getFestivals();
    const dateObj = new Date(festival.date);
    const formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Find other nearby festivals
    const otherFestivals = festivals
        .filter(f => f.name !== festival.name && Math.abs(new Date(f.date).getTime() - dateObj.getTime()) < 30 * 24 * 60 * 60 * 1000)
        .slice(0, 4);

    return (
        <div className="bg-background py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-maroon-600 hover:text-maroon-800 dark:text-gold-400 dark:hover:text-gold-300"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Calendar
                </Link>

                <article className="rounded-2xl border border-maroon-100 bg-white p-6 shadow-lg md:p-10 dark:border-maroon-800 dark:bg-maroon-900/20">
                    <header className="mb-8 text-center">
                        <span className="mb-3 inline-block rounded-full bg-gold-100 px-3 py-1 text-sm font-semibold tracking-wide text-maroon-800 dark:bg-maroon-800 dark:text-gold-300">
                            {festival.type}
                        </span>
                        <h1 className="mb-4 text-3xl font-bold text-maroon-900 md:text-5xl dark:text-maroon-100 font-tamil">
                            {festival.name} 2026
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-xl font-medium text-foreground/80">
                            <Calendar className="h-5 w-5 text-maroon-600" />
                            <time dateTime={festival.date}>{formattedDate}</time>
                        </div>
                    </header>

                    <div className="prose prose-maroon mx-auto dark:prose-invert">
                        <p className="lead text-center text-lg md:text-xl">
                            **{festival.name}** is celebrated on **{formattedDate}** according to the Tamil Calendar 2026.
                        </p>

                        <div className="my-8 rounded-xl bg-maroon-50 p-6 dark:bg-maroon-900/40">
                            <h3 className="flex items-center gap-2 text-lg font-bold text-maroon-900 dark:text-maroon-100">
                                <Info className="h-5 w-5" />
                                Quick Facts
                            </h3>
                            <ul className="mt-4 space-y-2 text-sm md:text-base">
                                <li><strong>Date:</strong> {formattedDate}</li>
                                <li><strong>Day:</strong> {dateObj.toLocaleDateString('en-US', { weekday: 'long' })}</li>
                                <li><strong>Tamil Year:</strong> 2026</li>
                            </ul>
                        </div>

                        <p>
                            More detailed information about the significance, rituals, and auspicious timings for {festival.name} will be updated soon.
                            Stay tuned for the complete guide on how to observe this festival.
                        </p>
                    </div>

                    <div className="mt-10 flex justify-center border-t border-maroon-100 pt-8 dark:border-maroon-800">
                        <button className="flex items-center gap-2 rounded-lg bg-maroon-900 px-6 py-3 font-medium text-white transition-colors hover:bg-maroon-800 dark:bg-maroon-700">
                            <Share2 className="h-4 w-4" />
                            Share Festival Date
                        </button>
                    </div>
                </article>

                {/* Related Festivals */}
                <div className="mt-16">
                    <SectionHeading title="Upcoming Festivals" centered />
                    <div className="grid gap-6 md:grid-cols-2">
                        {otherFestivals.map((f, idx) => (
                            <Link
                                key={idx}
                                href={`/${f.name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}-2026-date`}
                                className="flex items-center justify-between rounded-lg border border-maroon-100 bg-white p-4 shadow-sm hover:bg-maroon-50 dark:border-maroon-800 dark:bg-maroon-900/20 dark:hover:bg-maroon-900/40"
                            >
                                <div>
                                    <h4 className="font-bold text-maroon-900 dark:text-maroon-100">{f.name}</h4>
                                    <p className="text-sm text-foreground/60">{new Date(f.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                </div>
                                <ArrowRight className="h-4 w-4 text-maroon-400" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
