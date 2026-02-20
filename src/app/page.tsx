import Link from "next/link";
import { Download, Calendar, ArrowRight, Info } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CalendarCard from "@/components/CalendarCard";
import TodayCard from "@/components/TodayCard";
import { getFestivals, getEkadashiDates, getMuhurthamDates, getCalendarData } from "@/lib/data";

export default function Home() {
  const festivals = getFestivals() || [];
  const ekadashi = (getEkadashiDates() || []).slice(0, 5); // Show first 5
  const muhurthams = (getMuhurthamDates() || []).slice(0, 5); // Show first 5

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const majorFestivals = festivals.filter(f => f.type === "Major Festival").slice(0, 4);

  // Server-side: find today's data from calendar (use IST = UTC+5:30)
  const nowIST = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
  const todayDateStr = nowIST.toISOString().split('T')[0]; // YYYY-MM-DD in IST
  const calendarData = getCalendarData();
  const todayMonthData = calendarData?.months?.find(m =>
    m.days.some(d => d.date === todayDateStr)
  );
  const todayDayData = todayMonthData?.days.find(d => d.date === todayDateStr) ?? null;
  const todayData = todayDayData ? {
    ...todayDayData,
    monthNameEn: todayMonthData!.monthNameEn,
    monthIndex: todayMonthData!.monthIndex,
  } : null;

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-maroon-900 py-20 text-center text-white md:py-32">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/pattern.svg')", backgroundSize: "30px" }}></div>
        <div className="relative container mx-auto px-4">
          <span className="mb-4 inline-block rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-medium text-gold-300">
            Year 2026 • 2026 • வருடம் 2026
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl font-tamil">
            Tamil Monthly Calendar 2026
            <span className="block mt-2 text-2xl md:text-4xl text-maroon-200">
              தமிழ் மாத காலண்டர் 2026
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-maroon-100 md:text-xl">
            Free PDF Download | Festivals, Muhurtham, Holidays, and Rasipalan.
            Your complete guide to the Tamil year.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/2026/tamil-calendar-2026.pdf"
              download="Tamil-Calendar-2026.pdf"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-8 py-4 text-base font-bold text-maroon-950 shadow-lg transition-transform hover:scale-105 hover:bg-gold-400 sm:w-auto"
            >
              <Download className="h-5 w-5" />
              Download 2026 PDF
            </a>
            <Link
              href="#calendar-grid"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-bold backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/20 sm:w-auto"
            >
              <Calendar className="h-5 w-5" />
              View Interactive Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Today's Date Card */}
      <TodayCard todayData={todayData} />

      {/* Monthly Calendar Grid */}
      <section id="calendar-grid" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Monthly Calendar 2026"
            subtitle="Select a month to view detailed Tamil calendar"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {months.map((month, index) => (
              <CalendarCard
                key={month}
                monthNameEn={month}
                year={2026}
                monthIndex={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Major Festivals */}
      <section id="festivals" className="bg-maroon-50 py-16 dark:bg-maroon-900/10 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Major Festivals 2026" subtitle="முக்கிய பண்டிகைகள்" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {majorFestivals.map((festival, idx) => (
              <Link
                key={idx}
                href={`/${festival.name.toLowerCase().replace(/\s+/g, '-')}-2026-date`}
                className="group flex flex-col justify-between rounded-xl border border-maroon-100 bg-white p-6 shadow-sm transition-all hover:border-maroon-200 hover:shadow-md dark:border-maroon-800 dark:bg-maroon-900/20"
              >
                <div>
                  <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-maroon-500">
                    {festival.type}
                  </span>
                  <h3 className="mb-2 text-xl font-bold group-hover:text-maroon-700 dark:text-maroon-100">
                    {festival.name}
                  </h3>
                  <div className="mb-4 flex items-center gap-2 text-foreground/70">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(festival.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
                <span className="mt-4 flex items-center text-sm font-medium text-maroon-700 group-hover:translate-x-1 dark:text-gold-400">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/festivals-2026"
              className="inline-flex items-center gap-2 rounded-lg border border-maroon-200 px-6 py-3 font-medium text-maroon-800 hover:bg-maroon-50 dark:border-maroon-700 dark:text-maroon-200 dark:hover:bg-maroon-800"
            >
              View All Festivals <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ekadashi & Muhurtham Split Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Ekadashi */}
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-maroon-900 dark:text-maroon-100">
                  Upcoming Ekadashi 2026
                </h2>
                <Link href="/ekadashi-2026-dates" className="text-sm font-medium text-maroon-600 hover:underline dark:text-gold-400">
                  View All
                </Link>
              </div>
              <div className="overflow-hidden rounded-xl border border-maroon-100 bg-white shadow-sm dark:border-maroon-800 dark:bg-maroon-900/20">
                <table className="w-full text-left text-sm">
                  <thead className="bg-maroon-50 dark:bg-maroon-900/40">
                    <tr>
                      <th className="px-6 py-3 font-semibold text-maroon-900 dark:text-maroon-100">Date</th>
                      <th className="px-6 py-3 font-semibold text-maroon-900 dark:text-maroon-100">Event</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-maroon-100 dark:divide-maroon-800">
                    {ekadashi.map((item, idx) => (
                      <tr key={idx} className="hover:bg-maroon-50/50 dark:hover:bg-maroon-800/20">
                        <td className="px-6 py-3 text-foreground/80">{item.date}</td>
                        <td className="px-6 py-3 font-medium text-maroon-800 dark:text-maroon-200">{item.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Muhurtham */}
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-maroon-900 dark:text-maroon-100">
                  Marriage Muhurtham 2026
                </h2>
                <Link href="/marriage-muhurtham-2026" className="text-sm font-medium text-maroon-600 hover:underline dark:text-gold-400">
                  View All
                </Link>
              </div>
              <div className="overflow-hidden rounded-xl border border-maroon-100 bg-white shadow-sm dark:border-maroon-800 dark:bg-maroon-900/20">
                <table className="w-full text-left text-sm">
                  <thead className="bg-maroon-50 text-maroon-900 dark:bg-maroon-900/40 dark:text-maroon-100">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Date</th>
                      <th className="px-6 py-3 font-semibold">Auspicious Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-maroon-100 dark:divide-maroon-800">
                    {muhurthams.map((item, idx) => (
                      <tr key={idx} className="hover:bg-maroon-50/50 dark:hover:bg-maroon-800/20">
                        <td className="px-6 py-3 text-foreground/80">{item.date}</td>
                        <td className="px-6 py-3 font-medium text-maroon-800 dark:text-maroon-200">{item.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-maroon-50 py-16 dark:bg-maroon-900/10 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Frequently Asked Questions" centered />

          <div className="space-y-4">
            {[
              { q: "What is Tamil Monthly Calendar 2026?", a: "It is a traditional calendar followed by Tamil people tailored for the year 2026, showing festivals, auspicious days, and astrological details." },
              { q: "How to download Tamil Calendar 2026 PDF?", a: "You can download the full 2026 calendar PDF by clicking the 'Download PDF' button in the hero section or individual month PDFs from the monthly grid." },
              { q: "When is Tamil New Year 2026?", a: "Tamil New Year (Puthandu) falls on April 14, 2026." },
              { q: "Which months are good for marriage in 2026?", a: "Typically, Thai, Vaikasi, Aani, and Avani are considered auspicious. Check our Muhurtham section for precise dates." },
              { q: "What is Ekadashi?", a: "Ekadashi is the 11th lunar day, considered sacred for fasting and worship of Lord Vishnu." },
              { q: "What is Muhurtham?", a: "Muhurtham refers to an auspicious time period for conducting important events like weddings, housewarmings, etc." }
            ].map((faq, idx) => (
              <div key={idx} className="rounded-lg bg-white p-6 shadow-sm dark:bg-maroon-900/20">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-maroon-900 dark:text-maroon-100">
                  <Info className="h-4 w-4 text-maroon-500" />
                  {faq.q}
                </h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Tamil Monthly Calendar 2026?",
                "acceptedAnswer": { "@type": "Answer", "text": "It is a traditional calendar followed by Tamil people tailored for the year 2026, showing festivals, auspicious days, and astrological details." }
              },
              {
                "@type": "Question",
                "name": "How to download Tamil Calendar 2026 PDF?",
                "acceptedAnswer": { "@type": "Answer", "text": "You can download the full 2026 calendar PDF by clicking the 'Download PDF' button in the hero section or individual month PDFs from the monthly grid." }
              },
              {
                "@type": "Question",
                "name": "When is Tamil New Year 2026?",
                "acceptedAnswer": { "@type": "Answer", "text": "Tamil New Year (Puthandu) falls on April 14, 2026." }
              }
            ]
          })
        }}
      />
    </div>
  );
}
