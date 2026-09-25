export interface AccountActivity {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  status: "Completed" | "Pending";
}

export const checkingAccount = {
  name: "Everyday Checking",
  number: "•••• 4821",
  balance: 12480.65,
  available: 11980.65,
  type: "Checking account",
  opened: "Opened Mar 2021",
  interest: "0.10% APY",
};

export const accountActivity: AccountActivity[] = [
  { id: 1, date: "Aug 27, 2026", description: "Northline Energy", category: "Utilities", amount: -86.42, status: "Pending" },
  { id: 2, date: "Aug 26, 2026", description: "Salary deposit", category: "Income", amount: 4200, status: "Completed" },
  { id: 3, date: "Aug 25, 2026", description: "Fresh Market", category: "Groceries", amount: -128.34, status: "Completed" },
  { id: 4, date: "Aug 23, 2026", description: "Rainy Day Savings", category: "Transfer", amount: -425, status: "Completed" },
  { id: 5, date: "Aug 22, 2026", description: "Metro Transit", category: "Transport", amount: -42.8, status: "Completed" },
];

export const budgetCategories = [
  { name: "Housing", limit: 2200, actual: 1980, trend: "On track", detail: "Rent and home services" },
  { name: "Food and groceries", limit: 650, actual: 704, trend: "Over budget", detail: "Groceries and dining" },
  { name: "Transport", limit: 400, actual: 265, trend: "On track", detail: "Fuel, transit, and rides" },
  { name: "Leisure", limit: 300, actual: 186, trend: "Under budget", detail: "Subscriptions and events" },
];

export const statements = [
  { id: "aug-2026", period: "August 2026", account: "Everyday Checking", date: "Aug 27, 2026", dateTime: "2026-08-27", pages: 4, size: "248 KB" },
  { id: "jul-2026", period: "July 2026", account: "Everyday Checking", date: "Jul 31, 2026", dateTime: "2026-07-31", pages: 5, size: "302 KB" },
  { id: "jun-2026", period: "June 2026", account: "Everyday Checking", date: "Jun 30, 2026", dateTime: "2026-06-30", pages: 4, size: "271 KB" },
  { id: "may-2026", period: "May 2026", account: "Rainy Day Savings", date: "May 31, 2026", dateTime: "2026-05-31", pages: 2, size: "156 KB" },
];

export const cardActivity = [
  { merchant: "Fresh Market", date: "Aug 25, 2026", amount: -128.34 },
  { merchant: "Metro Transit", date: "Aug 22, 2026", amount: -42.8 },
  { merchant: "Streamline", date: "Aug 18, 2026", amount: -16.99 },
];
