/* eslint-disable */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// 1. Festivals Data
const festivals = [
    { date: "2026-01-01", name: "New Year's Day", type: "Holiday" },
    { date: "2026-01-03", name: "Arudra Darshanam", type: "Festival" },
    { date: "2026-01-14", name: "Bhogi Festival", type: "Festival" },
    { date: "2026-01-15", name: "Thai Pongal", type: "Major Festival" },
    { date: "2026-01-16", name: "Maattu Pongal", type: "Festival" },
    { date: "2026-01-16", name: "Thiruvalluvar Day", type: "Holiday" },
    { date: "2026-01-17", name: "Uzhavar Thirunal", type: "Holiday" },
    { date: "2026-01-18", name: "Thai Amavasai", type: "Religious" },
    { date: "2026-01-25", name: "Ratha Sapthami", type: "Festival" },
    { date: "2026-01-26", name: "Republic Day", type: "National Holiday" },
    { date: "2026-02-01", name: "Thai Poosam", type: "Major Festival" },
    { date: "2026-02-15", name: "Maha Shivaratri", type: "Major Festival" },
    { date: "2026-03-02", name: "Maasi Magam", type: "Festival" },
    { date: "2026-03-03", name: "Holi", type: "Festival" },
    { date: "2026-03-14", name: "Karadaiyan Nombu", type: "Religious" },
    { date: "2026-03-19", name: "Ugadi", type: "Festival" },
    { date: "2026-03-27", name: "Rama Navami", type: "Festival" },
    { date: "2026-04-01", name: "Panguni Uthiram", type: "Festival" },
    { date: "2026-04-14", name: "Tamil New Year", type: "Major Festival" },
    { date: "2026-04-14", name: "Dr. Ambedkar Jayanti", type: "National Holiday" },
    { date: "2026-04-20", name: "Akshaya Tritiya", type: "Auspicious" },
    { date: "2026-04-28", name: "Meenakshi Thirukalyanam", type: "Festival" },
    { date: "2026-05-01", name: "May Day", type: "Holiday" },
    { date: "2026-05-01", name: "Chitra Pournami", type: "Festival" },
    { date: "2026-05-30", name: "Vaikasi Visakam", type: "Festival" },
    { date: "2026-06-22", name: "Aani Uthiram", type: "Festival" },
    { date: "2026-08-03", name: "Aadi Perukku", type: "Festival" },
    { date: "2026-08-14", name: "Aadi Pooram", type: "Festival" },
    { date: "2026-08-15", name: "Independence Day", type: "National Holiday" },
    { date: "2026-08-21", name: "Varalakshmi Viratham", type: "Religious" },
    { date: "2026-08-26", name: "Onam", type: "Festival" },
    { date: "2026-08-27", name: "Avani Avittam", type: "Religious" },
    { date: "2026-09-04", name: "Gokulashtami", type: "Festival" },
    { date: "2026-09-14", name: "Vinayagar Chaturthi", type: "Major Festival" },
    { date: "2026-10-02", name: "Gandhi Jayanti", type: "National Holiday" },
    { date: "2026-10-10", name: "Mahalaya Amavasai", type: "Religious" },
    { date: "2026-10-11", name: "Navaratri Begins", type: "Festival" },
    { date: "2026-10-19", name: "Saraswati Puja", type: "Festival" },
    { date: "2026-10-20", name: "Vijaya Dasami", type: "Festival" },
    { date: "2026-11-08", name: "Deepavali", type: "Major Festival" },
    { date: "2026-11-10", name: "Kanda Sashti Begins", type: "Festival" },
    { date: "2026-11-15", name: "Soora Samharam", type: "Festival" },
    { date: "2026-11-24", name: "Karthigai Deepam", type: "Major Festival" },
    { date: "2026-12-20", name: "Vaikunta Ekadasi", type: "Festival" },
    { date: "2026-12-24", name: "Arudra Darshanam", type: "Festival" },
    { date: "2026-12-25", name: "Christmas", type: "Holiday" }
];

fs.writeFileSync(path.join(dataDir, 'festivals-2026.json'), JSON.stringify(festivals, null, 2));

// 2. Ekadashi Data (Approximate based on 11th lunar day - simplistic generation or manual list)
// Using a placeholder list based on 2026 pattern (roughly every 14-15 days) from online sources
const ekadashiDates = [
    "2026-01-14", "2026-01-29",
    "2026-02-12", "2026-02-27",
    "2026-03-14", "2026-03-29",
    "2026-04-12", "2026-04-28",
    "2026-05-12", "2026-05-27",
    "2026-06-11", "2026-06-26",
    "2026-07-10", "2026-07-25",
    "2026-08-09", "2026-08-24",
    "2026-09-07", "2026-09-22",
    "2026-10-07", "2026-10-22",
    "2026-11-05", "2026-11-20",
    "2026-12-05", "2026-12-20"
];

const ekadashiData = ekadashiDates.map(date => ({ date, name: "Ekadashi" }));
fs.writeFileSync(path.join(dataDir, 'ekadashi-2026.json'), JSON.stringify(ekadashiData, null, 2));

// 3. Muhurtham Data (Sample dates - would need real panchangam for accuracy)
// Placeholder auspicious dates
const muhurthamData = [
    { date: "2026-01-22", time: "09:00 AM - 10:30 AM" },
    { date: "2026-01-25", time: "06:00 AM - 07:30 AM" },
    { date: "2026-02-04", time: "10:30 AM - 12:00 PM" },
    { date: "2026-02-19", time: "07:30 AM - 09:00 AM" },
    { date: "2026-03-05", time: "09:00 AM - 10:30 AM" },
    { date: "2026-04-16", time: "06:00 AM - 07:30 AM" },
    { date: "2026-05-21", time: "09:00 AM - 10:30 AM" },
    { date: "2026-06-04", time: "10:30 AM - 12:00 PM" },
    { date: "2026-08-20", time: "07:30 AM - 09:00 AM" },
    { date: "2026-09-03", time: "09:00 AM - 10:30 AM" },
    { date: "2026-11-12", time: "06:00 AM - 07:30 AM" },
    { date: "2026-12-06", time: "09:00 AM - 10:30 AM" }
];
fs.writeFileSync(path.join(dataDir, 'muhurtham-2026.json'), JSON.stringify(muhurthamData, null, 2));

// 4. Monthly Calendar Data
const tamilMonths = [
    { nameEn: "Thai", nameTa: "தை", startDay: 14, startMonth: 0 }, // Jan 14
    { nameEn: "Maasi", nameTa: "மாசி", startDay: 13, startMonth: 1 }, // Feb 13
    { nameEn: "Panguni", nameTa: "பங்குனி", startDay: 15, startMonth: 2 }, // Mar 15
    { nameEn: "Chithirai", nameTa: "சித்திரை", startDay: 14, startMonth: 3 }, // Apr 14
    { nameEn: "Vaikasi", nameTa: "வைகாசி", startDay: 15, startMonth: 4 }, // May 15
    { nameEn: "Aani", nameTa: "ஆனி", startDay: 15, startMonth: 5 }, // Jun 15
    { nameEn: "Aadi", nameTa: "ஆடி", startDay: 17, startMonth: 6 }, // Jul 17
    { nameEn: "Avani", nameTa: "ஆவணி", startDay: 17, startMonth: 7 }, // Aug 17
    { nameEn: "Purattasi", nameTa: "புரட்டாசி", startDay: 17, startMonth: 8 }, // Sep 17
    { nameEn: "Aippasi", nameTa: "ஐப்பசி", startDay: 18, startMonth: 9 }, // Oct 18
    { nameEn: "Karthigai", nameTa: "கார்த்திகை", startDay: 17, startMonth: 10 }, // Nov 17
    { nameEn: "Margazhi", nameTa: "மார்கழி", startDay: 16, startMonth: 11 } // Dec 16
];

// Helper to get Tamil date
function getTamilDate(date) {
    const d = new Date(date);
    const month = d.getMonth();
    const day = d.getDate();

    // Find the current Tamil month
    // Logic: if current date is before startDay of current month's Tamil month, it's previous Tamil month
    // Example: Jan 10 is Margazhi, Jan 15 is Thai

    // This is a simplified logic. Real calculation requires traversing.
    // For 2026 specifically:

    let tMonthIndex = -1;
    let tDate = 1;

    // Check if we are in the "current" english month's start-of-new-tamil-month or previous
    // Actually, let's just use a look-up or simplistic offset

    // Iterate to find the correct Tamil span
    // We need to know previous Tamil month end date to calculate day... 
    // Simplified: 
    // Jan 1 - Jan 13: Margazhi (starts mid-Dec)
    // Jan 14 - Feb 12: Thai
    // ...

    // Let's define the start dates of Tamil months in 2026 exactly (approx)
    // Margazhi 2025 starts Dec 16, 2025.
    // Thai starts Jan 14 (or 15?) 2026. (Pongal is Jan 15, usually Thai 1)

    // Let's assume standard start dates for 2026 based on the festival list (Pongal Jan 15 => Thai 1 is Jan 15, NOT Jan 14 in some years. Let's assume Jan 15 for safety if Pongal is Jan 15)
    // Actually standard rule: Pongal = Thai 1.

    const tamilMonthStarts2026 = [
        { name: "Margazhi", start: new Date("2025-12-16"), days: 30 }, // Ends Jan 14
        { name: "Thai", start: new Date("2026-01-15"), days: 30 },  // Starts Jan 15
        { name: "Maasi", start: new Date("2026-02-13"), days: 30 },
        { name: "Panguni", start: new Date("2026-03-15"), days: 30 },
        { name: "Chithirai", start: new Date("2026-04-14"), days: 31 },
        { name: "Vaikasi", start: new Date("2026-05-15"), days: 31 },
        { name: "Aani", start: new Date("2026-06-15"), days: 31 },
        { name: "Aadi", start: new Date("2026-07-17"), days: 31 },
        { name: "Avani", start: new Date("2026-08-17"), days: 31 },
        { name: "Purattasi", start: new Date("2026-09-17"), days: 30 },
        { name: "Aippasi", start: new Date("2026-10-18"), days: 30 },
        { name: "Karthigai", start: new Date("2026-11-17"), days: 29 },
        { name: "Margazhi", start: new Date("2026-12-16"), days: 30 }
    ];

    // Find the segment
    let currentTM = tamilMonthStarts2026[0];
    for (let i = 0; i < tamilMonthStarts2026.length; i++) {
        if (d >= tamilMonthStarts2026[i].start) {
            currentTM = tamilMonthStarts2026[i];
        } else {
            break;
        }
    }

    const diffTime = Math.abs(d - currentTM.start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return { month: currentTM.name, day: diffDays + 1 }; // +1 because start date is day 1
}

const calendarData = { months: [] };
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (let m = 0; m < 12; m++) {
    const monthData = {
        monthNameEn: monthNames[m],
        monthIndex: m, // 0-11
        year: 2026,
        days: []
    };

    const daysInMonth = new Date(2026, m + 1, 0).getDate();

    for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `2026-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const dateObj = new Date(2026, m, d);
        const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'long' });

        const tDate = getTamilDate(dateObj);

        // Find if holiday/festival
        const festival = festivals.find(f => f.date === dateStr);
        const ekadashi = ekadashiData.find(e => e.date === dateStr);
        const muhurtham = muhurthamData.find(mu => mu.date === dateStr);

        monthData.days.push({
            day: d,
            date: dateStr,
            dayOfWeek: dayOfWeek,
            tamilMonth: tDate.month,
            tamilDay: tDate.day,
            festival: festival ? festival.name : null,
            isHoliday: festival ? (festival.type === "Holiday" || festival.type === "National Holiday" || festival.type === "Major Festival") : (dayOfWeek === "Sunday"),
            isEkadashi: !!ekadashi,
            isMuhurtham: !!muhurtham
        });
    }
    calendarData.months.push(monthData);
}

fs.writeFileSync(path.join(dataDir, 'calendar-2026.json'), JSON.stringify(calendarData, null, 2));

console.log("Data generation complete.");
