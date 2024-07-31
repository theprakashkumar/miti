import { createDate } from "./utils";

// Get the day of the week
export const getDay = (date: string): string => {
  const d: Date = createDate(date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[d.getDay()];
};

// Get the month of the year
export const getMonth = (date: string): string => {
  const d = createDate(date);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[d.getMonth()];
};
