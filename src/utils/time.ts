
const date = new Date();
export const time = {
    weekday() {
        const weekdays = date.toLocaleDateString('de-DE', { weekday: "short" });
        return weekdays;
    },

    date() {
        const dates = date.toLocaleDateString('de-DE');
        return dates;
    },

    hour() {
        const hours = date.getHours().toString().padStart(2, "0");
        return hours;
    },

    minute() {
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return minutes;
    },
}