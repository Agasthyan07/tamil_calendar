export type PanchangamDayData = {
    dayOfWeek: string;
    rahuKalam: string;
    yamagandam: string;
    kuligai: string;
    nallaNeram: string;
    gowriNallaNeram: string;
};

const panchangamData: Record<string, PanchangamDayData> = {
    "Sunday": {
        dayOfWeek: "Sunday",
        rahuKalam: "4:30 PM - 6:00 PM",
        yamagandam: "12:00 PM - 1:30 PM",
        kuligai: "3:00 PM - 4:30 PM",
        nallaNeram: "7:30 AM - 8:30 AM",
        gowriNallaNeram: "2:30 PM - 3:30 PM"
    },
    "Monday": {
        dayOfWeek: "Monday",
        rahuKalam: "7:30 AM - 9:00 AM",
        yamagandam: "10:30 AM - 12:00 PM",
        kuligai: "1:30 PM - 3:00 PM",
        nallaNeram: "6:30 AM - 7:30 AM",
        gowriNallaNeram: "4:30 PM - 5:30 PM"
    },
    "Tuesday": {
        dayOfWeek: "Tuesday",
        rahuKalam: "3:00 PM - 4:30 PM",
        yamagandam: "9:00 AM - 10:30 AM",
        kuligai: "12:00 PM - 1:30 PM",
        nallaNeram: "10:30 AM - 11:30 AM",
        gowriNallaNeram: "12:00 PM - 1:00 PM"
    },
    "Wednesday": {
        dayOfWeek: "Wednesday",
        rahuKalam: "12:00 PM - 1:30 PM",
        yamagandam: "7:30 AM - 9:00 AM",
        kuligai: "10:30 AM - 12:00 PM",
        nallaNeram: "9:30 AM - 10:30 AM",
        gowriNallaNeram: "6:30 PM - 7:30 PM"
    },
    "Thursday": {
        dayOfWeek: "Thursday",
        rahuKalam: "1:30 PM - 3:00 PM",
        yamagandam: "6:00 AM - 7:30 AM",
        kuligai: "9:00 AM - 10:30 AM",
        nallaNeram: "10:30 AM - 11:30 AM",
        gowriNallaNeram: "12:00 PM - 1:00 PM"
    },
    "Friday": {
        dayOfWeek: "Friday",
        rahuKalam: "10:30 AM - 12:00 PM",
        yamagandam: "3:00 PM - 4:30 PM",
        kuligai: "7:30 AM - 9:00 AM",
        nallaNeram: "6:30 AM - 7:30 AM & 1:00 PM - 2:00 PM",
        gowriNallaNeram: "4:00 PM - 5:00 PM"
    },
    "Saturday": {
        dayOfWeek: "Saturday",
        rahuKalam: "9:00 AM - 10:30 AM",
        yamagandam: "1:30 PM - 3:00 PM",
        kuligai: "6:00 AM - 7:30 AM",
        nallaNeram: "7:30 AM - 8:30 AM",
        gowriNallaNeram: "1:30 PM - 2:30 PM"
    }
};

/**
 * Returns the fixed standard timings for everyday based on Day of Week.
 * Valid inputs: 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
 */
export const getPanchangamForDay = (dayOfWeek: string): PanchangamDayData | null => {
    return panchangamData[dayOfWeek] || null;
};
