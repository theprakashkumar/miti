import { createDate } from "./utils";
// Add days to a date
export const addDays = (date: string, n: number): Date => {
  const d = createDate(date);
  return createDate(d.setDate(d.getDate() + n));
};

// Add months to a date
const addMonths = (date: string, n: number): Date => {
  const d = createDate(date);
  return createDate(d.setMonth(d.getMonth() + n));
};

// Add years to a date
const addYears = (date: string, n: number) => {
  const d = createDate(date);
  return createDate(d.setFullYear(d.getFullYear() + n));
};
