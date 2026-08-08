export type FeeStatus = "Paid" | "Partially Paid" | "Pending" | "Overdue";

export interface FeeBreakdownItem {
  id: number;
  feeType: string;
  amount: number;
  paid: number;
  balance: number;
  dueDate: string;
  status: FeeStatus;
}

export interface PaymentHistoryItem {
  id: number;
  date: string;
  amount: number;
  method: string;
  reference: string;
}

export interface FeeSummary {
  totalFees: number;
  paid: number;
  pending: number;
  overdue: number;
  dueDate: string;
}

export const feeSummary: FeeSummary = {
  totalFees: 12500,
  paid: 7800,
  pending: 4200,
  overdue: 500,
  dueDate: "12 Aug 2026",
};

export const feeBreakdown: FeeBreakdownItem[] = [
  {
    id: 1,
    feeType: "Tuition Fee",
    amount: 6000,
    paid: 6000,
    balance: 0,
    dueDate: "05 Jul 2026",
    status: "Paid",
  },
  {
    id: 2,
    feeType: "Exam Fee",
    amount: 1800,
    paid: 1200,
    balance: 600,
    dueDate: "10 Aug 2026",
    status: "Partially Paid",
  },
  {
    id: 3,
    feeType: "Library Fee",
    amount: 900,
    paid: 0,
    balance: 900,
    dueDate: "12 Aug 2026",
    status: "Pending",
  },
  {
    id: 4,
    feeType: "Transport Fee",
    amount: 1500,
    paid: 0,
    balance: 1500,
    dueDate: "08 Aug 2026",
    status: "Overdue",
  },
  {
    id: 5,
    feeType: "Lab Fee",
    amount: 2300,
    paid: 600,
    balance: 1700,
    dueDate: "15 Aug 2026",
    status: "Pending",
  },
];

export const paymentHistory: PaymentHistoryItem[] = [
  {
    id: 1,
    date: "02 Jul 2026",
    amount: 3500,
    method: "Online",
    reference: "PAY-1048",
  },
  {
    id: 2,
    date: "18 Jul 2026",
    amount: 2500,
    method: "Bank Transfer",
    reference: "TRF-2241",
  },
  {
    id: 3,
    date: "25 Jul 2026",
    amount: 1800,
    method: "Card",
    reference: "CRD-3389",
  },
];

export const academicYears = ["2024-25", "2025-26"];
