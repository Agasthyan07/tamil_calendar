
import fs from 'fs';
import path from 'path';

export type Festival = {
    date: string;
    name: string;
    type: string;
};

export type Ekadashi = {
    date: string;
    name: string;
    type?: string;
};

export type Muhurtham = {
    date: string;
    time: string;
};

export type DayData = {
    day: number;
    date: string;
    dayOfWeek: string;
    tamilMonth: string;
    tamilDay: number;
    festival: string | null;
    isHoliday: boolean;
    isEkadashi: boolean;
    isMuhurtham: boolean;
    content?: string;
};

export type MonthData = {
    monthNameEn: string;
    monthNameTa?: string;
    monthIndex: number;
    year: number;
    days: DayData[];
};

export type CalendarData = {
    months: MonthData[];
};

// Helper to read JSON safely
const readJson = (filename: string) => {
    try {
        // Data is now in src/data
        const filePath = path.join(process.cwd(), 'src', 'data', filename);
        if (!fs.existsSync(filePath)) {
            console.error(`File key not found: ${filePath}`);
            return null;
        }
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error(`Error reading ${filename}:`, error);
        return null;
    }
};

export const getCalendarData = (): CalendarData => {
    return readJson('calendar-2026.json') as CalendarData;
};

export const getFestivals = (): Festival[] => {
    return readJson('festivals-2026.json') as Festival[];
};

export const getEkadashiDates = (): Ekadashi[] => {
    return readJson('ekadashi-2026.json') as Ekadashi[];
};

export const getMuhurthamDates = (): Muhurtham[] => {
    return readJson('muhurtham-2026.json') as Muhurtham[];
};

export const getMonthData = (monthIndex: number): MonthData | undefined => {
    const calendarData = getCalendarData();
    return calendarData?.months?.find(m => m.monthIndex === monthIndex);
};
