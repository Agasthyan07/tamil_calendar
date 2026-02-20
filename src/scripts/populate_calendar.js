
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../data');
const CALENDAR_FILE = path.join(DATA_DIR, 'calendar-2026.json');
const FESTIVALS_FILE = path.join(DATA_DIR, 'festivals-2026.json');
const EKADASHI_FILE = path.join(DATA_DIR, 'ekadashi-2026.json');
const MUHURTHAM_FILE = path.join(DATA_DIR, 'muhurtham-2026.json');

// Helper to read JSON
const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));

const festivalsData = readJson(FESTIVALS_FILE);
const ekadashiData = readJson(EKADASHI_FILE);
const muhurthamData = readJson(MUHURTHAM_FILE);
const calendarData = readJson(CALENDAR_FILE);

const tamilMonths = [
    { name: "Thai", startDay: 14, startMonth: 0 }, // Jan 14
    { name: "Maasi", startDay: 13, startMonth: 1 }, // Feb 13
    { name: "Panguni", startDay: 15, startMonth: 2 }, // Mar 15
    { name: "Chithirai", startDay: 14, startMonth: 3 }, // Apr 14
    { name: "Vaikasi", startDay: 15, startMonth: 4 }, // May 15
    { name: "Aani", startDay: 15, startMonth: 5 }, // Jun 15
];

function getTamilDate(dateStr) {
    // Parse manually to avoid timezone issues
    const [y, m, d] = dateStr.split('-').map(Number);
    const month = m - 1; // 0-indexed
    const day = d;

    let tamilMonthName = "";
    let tamilDay = 0;

    // Check transition for this month
    const transition = tamilMonths.find(itm => itm.startMonth === month);

    if (transition) {
        if (day >= transition.startDay) {
            tamilMonthName = transition.name;
            tamilDay = day - transition.startDay + 1;
        } else {
            // Logic for previous month continuing
            if (month === 3) { // April (before Apr 14 is Panguni)
                // Panguni started Mar 15.
                // Mar 31 was Panguni 17.
                // Apr 1 is Panguni 18.
                tamilMonthName = "Panguni";
                tamilDay = 17 + day;
            } else if (month === 4) { // May (before May 15 is Chithirai)
                // Chithirai started Apr 14.
                // Apr 14 = Chithirai 1.
                // April has 30 days.
                // Apr 30 = Chithirai 17.
                // May 1 = Chithirai 18.
                tamilMonthName = "Chithirai";
                tamilDay = 17 + day;
            }
        }
    }

    return { tamilMonth: tamilMonthName, tamilDay };
}

function generateMonth(monthIndex, monthName, daysInMonth, startDayOfWeekIndex) {
    const days = [];
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    for (let i = 1; i <= daysInMonth; i++) {
        const dateStr = `2026-${String(monthIndex + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        const dayOfWeekIndex = (startDayOfWeekIndex + (i - 1)) % 7;
        const dayOfWeek = weekDays[dayOfWeekIndex];

        const { tamilMonth, tamilDay } = getTamilDate(dateStr);

        // Find events
        const festival = festivalsData.find(f => f.date === dateStr);
        const isEkadashi = ekadashiData.some(e => e.date === dateStr);
        const isMuhurtham = muhurthamData.some(m => m.date === dateStr);

        let isHoliday = dayOfWeek === "Sunday";
        if (festival && (festival.type === "Holiday" || festival.type === "National Holiday" || festival.type === "Major Festival")) {
            isHoliday = true;
        }

        days.push({
            day: i,
            date: dateStr,
            dayOfWeek: dayOfWeek,
            tamilMonth: tamilMonth,
            tamilDay: tamilDay,
            festival: festival ? festival.name : null,
            isHoliday: isHoliday,
            isEkadashi: isEkadashi,
            isMuhurtham: isMuhurtham
        });
    }

    return {
        monthNameEn: monthName,
        monthIndex: monthIndex,
        year: 2026,
        days: days
    };
}

// Remove valid months if they exist to overwrite them with fixed data
calendarData.months = calendarData.months.filter(m => m.monthIndex !== 3 && m.monthIndex !== 4);

console.log("Generating April 2026...");
calendarData.months.push(generateMonth(3, "April", 30, 3));

console.log("Generating May 2026...");
calendarData.months.push(generateMonth(4, "May", 31, 5));

// Sort
calendarData.months.sort((a, b) => a.monthIndex - b.monthIndex);

fs.writeFileSync(CALENDAR_FILE, JSON.stringify(calendarData, null, 2));
console.log("Calendar data updated successfully.");
