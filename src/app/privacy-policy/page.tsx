import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Tamil Monthly Calendar 2026. Learn how we collect, use, and protect your information.",
    alternates: { canonical: "https://tamildailycalendar.vercel.app/privacy-policy" },
};

const lastUpdated = "February 20, 2026";
const siteUrl = "https://tamildailycalendar.vercel.app";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-background py-16 md:py-24">
            <div className="container mx-auto max-w-3xl px-4">

                <div className="mb-10 text-center">
                    <h1 className="mb-2 text-4xl font-bold text-maroon-900 dark:text-maroon-100">Privacy Policy</h1>
                    <p className="text-sm text-foreground/50">Last updated: {lastUpdated}</p>
                </div>

                <div className="prose prose-maroon max-w-none dark:prose-invert space-y-8 text-foreground/80">

                    <section>
                        <h2 className="text-xl font-bold text-maroon-900 dark:text-maroon-100">1. Introduction</h2>
                        <p>
                            Welcome to Tamil Monthly Calendar 2026 (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting
                            your privacy. This Privacy Policy explains how we handle information when you visit our website
                            at <a href={siteUrl} className="text-maroon-600 hover:underline dark:text-gold-400">{siteUrl}</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-maroon-900 dark:text-maroon-100">2. Information We Collect</h2>
                        <p>We do <strong>not</strong> collect any personally identifiable information (PII) from visitors. Our website is a static calendar resource. Specifically:</p>
                        <ul className="list-disc pl-6 space-y-1 text-foreground/80">
                            <li>We do not require account registration or login.</li>
                            <li>We do not collect your name, email address, or any personal data by default.</li>
                            <li>We do not store any form data unless you voluntarily contact us via our contact form.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-maroon-900 dark:text-maroon-100">3. Cookies and Web Beacons</h2>
                        <p>
                            Like any other website, Tamil Monthly Calendar 2026 uses cookies. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
                        </p>
                        <p className="mt-4">
                            <strong>Google DoubleClick DART Cookie:</strong><br />
                            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-maroon-600 hover:underline dark:text-gold-400" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-maroon-900 dark:text-maroon-100">4. Third-Party Privacy Policies</h2>
                        <p>Our website may use the following third-party services and advertising partners:</p>
                        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-2">
                            <li><strong>Google AdSense</strong> – Third party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to your website or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-maroon-600 hover:underline dark:text-gold-400" target="_blank" rel="noopener noreferrer">Ads Settings</a>.</li>
                            <li><strong>Vercel</strong> – Hosting provider. Subject to <a href="https://vercel.com/legal/privacy-policy" className="text-maroon-600 hover:underline dark:text-gold-400" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a>.</li>
                            <li><strong>Google Fonts</strong> – For Tamil and Latin typography. Subject to <a href="https://policies.google.com/privacy" className="text-maroon-600 hover:underline dark:text-gold-400" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</li>
                            <li><strong>Formspree</strong> – For processing contact form submissions. Subject to <a href="https://formspree.io/legal/privacy-policy" className="text-maroon-600 hover:underline dark:text-gold-400" target="_blank" rel="noopener noreferrer">Formspree&apos;s Privacy Policy</a>.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-maroon-900 dark:text-maroon-100">5. Data Retention</h2>
                        <p>
                            We do not store personal data. Any messages sent via the contact form are handled by Formspree
                            and are subject to their data retention policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-maroon-900 dark:text-maroon-100">6. Children&apos;s Privacy</h2>
                        <p>
                            Our website is a general-purpose calendar resource and does not knowingly collect information
                            from children under 13. If you believe your child has submitted information to us, please
                            contact us so we can remove it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-maroon-900 dark:text-maroon-100">7. Your Rights</h2>
                        <p>
                            Since we do not collect personal data by default, there is typically no data to access,
                            correct, or delete. If you have contacted us via the contact form and wish your message to
                            be deleted, please email us and we will process your request promptly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-maroon-900 dark:text-maroon-100">8. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be reflected on this
                            page with an updated &quot;last updated&quot; date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-maroon-900 dark:text-maroon-100">9. Contact</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please{" "}
                            <a href="/contact" className="text-maroon-600 hover:underline dark:text-gold-400">contact us</a>.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
