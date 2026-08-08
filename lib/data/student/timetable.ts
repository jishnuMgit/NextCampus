export interface TimetableEntry {
  subject: string;
  teacher: string;
  start: string;
  end: string;
  room: string;
}

export interface TimetableDay {
  day: string;
  date: string;
  entries: TimetableEntry[];
}

export const weeklyTimetable: TimetableDay[] = [
  {
    day: "Monday",
    date: "12 Aug",
    entries: [
      {
        subject: "Mathematics",
        teacher: "Mr. John",
        start: "08:30",
        end: "09:30",
        room: "Room 204",
      },
      {
        subject: "Physics",
        teacher: "Mrs. Anu",
        start: "09:45",
        end: "10:45",
        room: "Room 105",
      },
    ],
  },
  {
    day: "Tuesday",
    date: "13 Aug",
    entries: [
      {
        subject: "English",
        teacher: "Ms. Naina",
        start: "08:30",
        end: "09:30",
        room: "Room 301",
      },
      {
        subject: "Computer Science",
        teacher: "Mr. Rohan",
        start: "11:00",
        end: "12:00",
        room: "Lab 2",
      },
    ],
  },
  {
    day: "Wednesday",
    date: "14 Aug",
    entries: [
      {
        subject: "Chemistry",
        teacher: "Dr. Singh",
        start: "09:00",
        end: "10:00",
        room: "Lab 1",
      },
      {
        subject: "Mathematics",
        teacher: "Mr. John",
        start: "14:00",
        end: "15:00",
        room: "Room 204",
      },
    ],
  },
  {
    day: "Thursday",
    date: "15 Aug",
    entries: [
      {
        subject: "Physics",
        teacher: "Mrs. Anu",
        start: "08:30",
        end: "09:30",
        room: "Room 105",
      },
      {
        subject: "English",
        teacher: "Ms. Naina",
        start: "10:00",
        end: "11:00",
        room: "Room 301",
      },
    ],
  },
  {
    day: "Friday",
    date: "16 Aug",
    entries: [
      {
        subject: "Computer Science",
        teacher: "Mr. Rohan",
        start: "09:30",
        end: "10:30",
        room: "Lab 2",
      },
      {
        subject: "Chemistry",
        teacher: "Dr. Singh",
        start: "12:00",
        end: "13:00",
        room: "Lab 1",
      },
    ],
  },
  {
    day: "Saturday",
    date: "17 Aug",
    entries: [
      {
        subject: "Library",
        teacher: "Ms. Priya",
        start: "10:00",
        end: "11:00",
        room: "Library",
      },
      {
        subject: "Sports",
        teacher: "Mr. Karan",
        start: "14:00",
        end: "15:00",
        room: "Gym",
      },
    ],
  },
];

export const weekLabel = "Week of 12 Aug - 17 Aug";
