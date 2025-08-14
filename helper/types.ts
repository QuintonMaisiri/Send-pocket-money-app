export type Transaction = {
  transactionId: string;
  date: string;
  recipient: string;
  destination: string;
  amountSent: number;
  amountReceived: number;
  status: "Completed" | "Failed" | "Pending";
};