export type HomeworkStatus = "Pending" | "Submitted" | "Overdue" | "Completed";

export interface HomeworkItem {
  id: number;
  subject: string;
  title: string;
  description: string;
  assignedDate: string;
  dueDate: string;
  teacher: string;
  status: HomeworkStatus;
  priority: "High" | "Medium" | "Low";
}

export const homeworkItems: HomeworkItem[] = [
  {
    id: 1,
    subject: "Mathematics",
    title: "Trigonometry Practice",
    description:
      "Solve the set of 15 problems from Chapter 7 and submit the worked solutions.",
    assignedDate: "04 Aug 2026",
    dueDate: "10 Aug 2026",
    teacher: "Mr. John",
    status: "Pending",
    priority: "High",
  },
  {
    id: 2,
    subject: "Physics",
    title: "Lab Report Draft",
    description:
      "Prepare a draft for the pendulum experiment observations and conclusion.",
    assignedDate: "02 Aug 2026",
    dueDate: "09 Aug 2026",
    teacher: "Mrs. Anu",
    status: "Submitted",
    priority: "Medium",
  },
  {
    id: 3,
    subject: "English",
    title: "Essay Revision",
    description:
      "Revise the essay on environmental conservation with references.",
    assignedDate: "01 Aug 2026",
    dueDate: "08 Aug 2026",
    teacher: "Ms. Naina",
    status: "Overdue",
    priority: "High",
  },
  {
    id: 4,
    subject: "Computer Science",
    title: "Python Functions",
    description:
      "Complete the coding exercise on recursion and function arguments.",
    assignedDate: "05 Aug 2026",
    dueDate: "12 Aug 2026",
    teacher: "Mr. Rohan",
    status: "Completed",
    priority: "Low",
  },
  {
    id: 5,
    subject: "Chemistry",
    title: "Reaction Notes",
    description:
      "Summarize the acid-base reactions and add one diagram for each.",
    assignedDate: "06 Aug 2026",
    dueDate: "13 Aug 2026",
    teacher: "Dr. Singh",
    status: "Pending",
    priority: "Medium",
  },
];

export const homeworkStats = {
  total: homeworkItems.length,
  pending: 2,
  submitted: 1,
  overdue: 1,
};

export const subjectOptions = [
  "All",
  "Mathematics",
  "Physics",
  "English",
  "Computer Science",
  "Chemistry",
];
export const statusOptions = [
  "All",
  "Pending",
  "Submitted",
  "Overdue",
  "Completed",
];
export const dueDateOptions = ["All", "This week", "Next week", "Overdue"];
