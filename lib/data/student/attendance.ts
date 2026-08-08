export type AttendanceStatus =
  | "Present"
  | "Absent"
  | "Late"
  | "Leave"
  | "Holiday";

export interface AttendanceSummary {
  overall: number;
  present: number;
  absent: number;
  late: number;
  leave: number;
  holiday: number;
}

export interface MonthlyAttendancePoint {
  month: string;
  present: number;
  absent: number;
  late: number;
  leave: number;
}

export interface SubjectAttendanceItem {
  subject: string;
  totalClasses: number;
  present: number;
  absent: number;
  percentage: number;
  status: string;
}

export interface AttendanceCalendarEvent {
  date: string;
  status: AttendanceStatus;
}

export const attendanceSummary: AttendanceSummary = {
  overall: 94.8,
  present: 118,
  absent: 6,
  late: 4,
  leave: 3,
  holiday: 2,
};

export const monthlyAttendance: MonthlyAttendancePoint[] = [
  { month: "Jan", present: 18, absent: 2, late: 1, leave: 1 },
  { month: "Feb", present: 17, absent: 2, late: 1, leave: 1 },
  { month: "Mar", present: 19, absent: 1, late: 1, leave: 0 },
  { month: "Apr", present: 16, absent: 2, late: 1, leave: 1 },
  { month: "May", present: 20, absent: 1, late: 0, leave: 0 },
  { month: "Jun", present: 18, absent: 1, late: 1, leave: 1 },
];

export const subjectAttendance: SubjectAttendanceItem[] = [
  {
    subject: "Mathematics",
    totalClasses: 42,
    present: 40,
    absent: 2,
    percentage: 95.2,
    status: "Good",
  },
  {
    subject: "Physics",
    totalClasses: 38,
    present: 36,
    absent: 2,
    percentage: 94.7,
    status: "Good",
  },
  {
    subject: "Computer Science",
    totalClasses: 35,
    present: 33,
    absent: 1,
    percentage: 94.3,
    status: "Good",
  },
  {
    subject: "English",
    totalClasses: 40,
    present: 37,
    absent: 2,
    percentage: 92.5,
    status: "Stable",
  },
  {
    subject: "Chemistry",
    totalClasses: 34,
    present: 31,
    absent: 2,
    percentage: 91.2,
    status: "Stable",
  },
];

export const calendarEvents: AttendanceCalendarEvent[] = [
  { date: "01", status: "Present" },
  { date: "02", status: "Present" },
  { date: "03", status: "Late" },
  { date: "04", status: "Present" },
  { date: "05", status: "Holiday" },
  { date: "06", status: "Present" },
  { date: "07", status: "Absent" },
  { date: "08", status: "Present" },
  { date: "09", status: "Present" },
  { date: "10", status: "Leave" },
  { date: "11", status: "Present" },
  { date: "12", status: "Present" },
  { date: "13", status: "Present" },
  { date: "14", status: "Present" },
  { date: "15", status: "Holiday" },
  { date: "16", status: "Present" },
  { date: "17", status: "Absent" },
  { date: "18", status: "Present" },
  { date: "19", status: "Present" },
  { date: "20", status: "Present" },
  { date: "21", status: "Late" },
  { date: "22", status: "Present" },
  { date: "23", status: "Present" },
  { date: "24", status: "Present" },
  { date: "25", status: "Present" },
  { date: "26", status: "Holiday" },
  { date: "27", status: "Present" },
  { date: "28", status: "Present" },
  { date: "29", status: "Absent" },
  { date: "30", status: "Present" },
];

export const academicYears = ["2024-25", "2025-26"];
export const attendanceMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
];
