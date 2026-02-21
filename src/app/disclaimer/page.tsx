import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disclaimer",
    description: "Disclaimer for Tamil Monthly Calendar 2026. Read our limitations, accuracy notice, and terms of use for the Tamil calendar information provided.",
    alternates: { canonical: "https://tamildailycalendar.vercel.app/disclaimer" },
};

export default function DisclaimerPage() {
    return (
        <div className="bg-background py-16 md:py-24">
            <div className="container mx-auto max-w-3xl px-4">

                <div className="mb-10 text-center">
                    <h1 className="mb-2 text-4xl font-bold text-maroon-900 dark:text-maroon-100">Disclaimer</h1>
                    <p className="text-sm text-foreground/50">Last updated: February 20, 2026</p>
                </div>

                <div className="space-y-8 text-foreground/80">

                    <section>
                        <h2 className="mb-3 text-xl font-bold text-maroon-900 dark:text-maroon-100">1. General Information Only</h2>
                        <p className="leading-relaxed">
                            The information provided on Tamil Monthly Calendar 2026 (
                            <a href="https://tamildailycalendar.vercel.app" className="text-maroon-600 hover:underline dark:text-gold-400">
                                tamildailycalendar.vercel.app
                            </a>
                            ) is for general informational and cultural purposes only. All information on the site is
                            provided in good faith based on traditional Tamil calendar systems and publicly available
                            panchangam data.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-bold text-maroon-900 dark:text-maroon-100">2. Accuracy of Calendar Data</h2>
                        <p className="leading-relaxed">
                            While we make every effort to ensure the accuracy of festival dates, muhurtham timings,
                            ekadashi dates, and other calendar information, we make no representations or warranties
                            of any kind about the completeness, accuracy, reliability, or suitability of the information.
                        </p>
                        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800/40 dark:bg-amber-900/10">
                            <p className="text-sm text-amber-800 dark:text-amber-300">
                                <strong>Important:</strong> For important life events such as weddings (muhurtham),
                                housewarming ceremonies (grihapravesh), or religious rituals, we strongly recommend
                                consulting a qualified Vedic astrologer or your local temple panchangam for precise
                                timings and suitability.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-bold text-maroon-900 dark:text-maroon-100">3. Regional Variations</h2>
                        <p className="leading-relaxed">
                            Tamil calendar observances may vary by region (Tamil Nadu, Sri Lanka, Malaysia, Singapore,
                            etc.) and by community tradition. Dates provided on this site are generally aligned with
                            Tamil Nadu and may differ from those followed in other regions.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-bold text-maroon-900 dark:text-maroon-100">4. No Professional Advice</h2>
                        <p className="leading-relaxed">
                            Nothing on this website constitutes professional astrological, religious, or legal advice.
                            Any actions you take based on the information on this site are strictly at your own risk
                            and discretion.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-bold text-maroon-900 dark:text-maroon-100">5. External Links & Advertisements</h2>
                        <p className="leading-relaxed">
                            Our website may contain links to external websites and third-party advertisements (such as Google AdSense). We have no control over the content
                            and nature of those external sites and ads. The inclusion of any links or advertisements does not necessarily imply a recommendation or endorse the
                            views expressed within them. We are not responsible for any interactions or transactions you may have with external websites or advertisers.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-bold text-maroon-900 dark:text-maroon-100">6. Intellectual Property</h2>
                        <p className="leading-relaxed">
                            All calendar images, content, and design on this website are the property of Tamil Monthly
                            Calendar 2026. You may download and use the monthly calendar images for personal, non-commercial
                            use. Redistribution or commercial use without prior written permission is not permitted.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-bold text-maroon-900 dark:text-maroon-100">7. Contact</h2>
                        <p className="leading-relaxed">
                            If you notice any inaccuracies or have concerns, please{" "}
                            <a href="/contact" className="text-maroon-600 hover:underline dark:text-gold-400">contact us</a>{" "}
                            and we will do our best to review and correct the information promptly.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
