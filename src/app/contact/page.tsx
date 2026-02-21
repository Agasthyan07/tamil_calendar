import type { Metadata } from "next";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Contact Tamil Monthly Calendar 2026 team for feedback, corrections, or suggestions about our Tamil calendar, festival dates, and muhurtham information.",
    alternates: { canonical: "https://tamildailycalendar.vercel.app/contact" },
};

export default function ContactPage() {
    return (
        <div className="bg-background py-16 md:py-24">
            <div className="container mx-auto max-w-4xl px-4">

                <div className="mb-12 text-center">
                    <span className="mb-4 inline-block rounded-full bg-maroon-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-maroon-700 dark:bg-maroon-900/40 dark:text-maroon-300">
                        Contact Us
                    </span>
                    <h1 className="mb-4 text-4xl font-bold text-maroon-900 dark:text-maroon-100 md:text-5xl">
                        Get In Touch
                    </h1>
                    <p className="mx-auto max-w-xl text-lg text-foreground/70">
                        Have a suggestion, spotted an error in our calendar data, or want to contribute?
                        We&apos;d love to hear from you.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="rounded-2xl border border-maroon-100 bg-white p-6 shadow-sm dark:border-maroon-800 dark:bg-maroon-900/10">
                            <h2 className="mb-6 text-xl font-bold text-maroon-900 dark:text-maroon-100">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-maroon-500" />
                                    <div>
                                        <p className="font-semibold text-maroon-900 dark:text-maroon-100">Email</p>
                                        <a href="mailto:contact@tamildailycalendar.vercel.app" className="text-sm text-maroon-600 hover:underline dark:text-gold-400">
                                            contact@tamildailycalendar.vercel.app
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-maroon-500" />
                                    <div>
                                        <p className="font-semibold text-maroon-900 dark:text-maroon-100">Region</p>
                                        <p className="text-sm text-foreground/70">Tamil Nadu, India</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-maroon-500" />
                                    <div>
                                        <p className="font-semibold text-maroon-900 dark:text-maroon-100">Response Time</p>
                                        <p className="text-sm text-foreground/70">Within 2–3 working days</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-maroon-50 p-6 dark:bg-maroon-900/20">
                            <h3 className="mb-3 flex items-center gap-2 font-bold text-maroon-900 dark:text-maroon-100">
                                <MessageCircle className="h-5 w-5 text-maroon-500" />
                                What to contact us about
                            </h3>
                            <ul className="space-y-2 text-sm text-foreground/70">
                                {[
                                    "Incorrect festival or muhurtham dates",
                                    "Missing festivals or observances",
                                    "Calendar data for 2027 and beyond",
                                    "Suggestions for new features",
                                    "Partnership or collaboration",
                                    "General feedback",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-maroon-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-2xl border border-maroon-100 bg-white p-6 shadow-sm dark:border-maroon-800 dark:bg-maroon-900/10">
                        <h2 className="mb-6 text-xl font-bold text-maroon-900 dark:text-maroon-100">Send a Message</h2>
                        <form
                            action="https://formspree.io/f/your-form-id"
                            method="POST"
                            className="space-y-4"
                        >
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-maroon-900 dark:text-maroon-100" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full rounded-lg border border-maroon-200 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-maroon-500 focus:ring-2 focus:ring-maroon-200 dark:border-maroon-700 dark:focus:border-maroon-500"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-maroon-900 dark:text-maroon-100" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full rounded-lg border border-maroon-200 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-maroon-500 focus:ring-2 focus:ring-maroon-200 dark:border-maroon-700 dark:focus:border-maroon-500"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-maroon-900 dark:text-maroon-100" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    placeholder="e.g. Incorrect festival date"
                                    className="w-full rounded-lg border border-maroon-200 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-maroon-500 focus:ring-2 focus:ring-maroon-200 dark:border-maroon-700 dark:focus:border-maroon-500"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-maroon-900 dark:text-maroon-100" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Describe your feedback or question..."
                                    className="w-full rounded-lg border border-maroon-200 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-maroon-500 focus:ring-2 focus:ring-maroon-200 dark:border-maroon-700 dark:focus:border-maroon-500 resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-maroon-900 py-3 font-bold text-white transition-transform hover:scale-[1.02] hover:bg-maroon-800 dark:bg-maroon-700"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
