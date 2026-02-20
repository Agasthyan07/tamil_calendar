import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Tamil Monthly Calendar 2026. Learn how we collect, use, and protect your information.",
    alternates: { canonical: "https://tamil-calendar-2026.vercel.app/privacy-policy" },
};

const lastUpdated = "February 20, 2026";
const siteUrl = "https://tamil-calendar-2026.vercel.app";

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
                        <h2 className="text-xl font-bold text-maroon-900 dark:text-maroon-100">3. Analytics & Cookies</h2>
                        <p>
                            We may use privacy-friendly analytics tools (such as Vercel Analytics) to understand aggregate
                            traffic patterns. These tools may collect anonymous data such as page views, browser type,
                            and country. No personally identifiable information is collected or stored.
                        </p>
                        <p>
                            We use minimal cookies only for theme preference (light/dark mode). No tracking or advertising
                            cookies are set.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-maroon-900 dark:text-maroon-100">4. Third-Party Services</h2>
                        <p>Our website may use the following third-party services:</p>
                        <ul className="list-disc pl-6 space-y-1 text-foreground/80">
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
