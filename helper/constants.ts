import { g } from "motion/react-client";

export const dummyTransactions = [
  {
    transactionId: "TXN046539",
    date: "2025-08-14",
    recipient: "Your Child",
    destination: "UK",
    amountSent: 1.0,
    amountReceived: "0.7110000000000001 GBP",
    status: "Completed",
  },
  {
    transactionId: "TXN001",
    date: "2025-08-14",
    recipient: "John Doe",
    destination: "United Kingdom",
    amountSent: 538.0,
    amountReceived: "382.52 GBP",
    status: "Completed",
  },
  {
    transactionId: "TXN002",
    date: "2025-08-11",
    recipient: "Sarah Smith",
    destination: "South Africa",
    amountSent: 274.0,
    amountReceived: "4549.77 ZAR",
    status: "Failed",
  },
  {
    transactionId: "TXN003",
    date: "2025-08-08",
    recipient: "Michael Johnson",
    destination: "United Kingdom",
    amountSent: 131.0,
    amountReceived: "93.14 GBP",
    status: "Failed",
  },
  {
    transactionId: "TXN004",
    date: "2025-08-05",
    recipient: "Emma Wilson",
    destination: "South Africa",
    amountSent: 156.0,
    amountReceived: "2590.38 ZAR",
    status: "Pending",
  },
  {
    transactionId: "TXN005",
    date: "2025-08-02",
    recipient: "John Doe",
    destination: "United Kingdom",
    amountSent: 330.0,
    amountReceived: "234.63 GBP",
    status: "Failed",
  },
  {
    transactionId: "TXN006",
    date: "2025-07-30",
    recipient: "Sarah Smith",
    destination: "South Africa",
    amountSent: 453.0,
    amountReceived: "7522.07 ZAR",
    status: "Failed",
  },
  {
    transactionId: "TXN007",
    date: "2025-07-27",
    recipient: "Michael Johnson",
    destination: "United Kingdom",
    amountSent: 450.0,
    amountReceived: "319.95 GBP",
    status: "Completed",
  },
  {
    transactionId: "TXN008",
    date: "2025-07-24",
    recipient: "Emma Wilson",
    destination: "South Africa",
    amountSent: 433.0,
    amountReceived: "7189.96 ZAR",
    status: "Failed",
  },
  {
    transactionId: "TXN009",
    date: "2025-07-21",
    recipient: "John Doe",
    destination: "United Kingdom",
    amountSent: 537.0,
    amountReceived: "381.81 GBP",
    status: "Failed",
  },
  {
    transactionId: "TXN010",
    date: "2025-07-18",
    recipient: "Sarah Smith",
    destination: "South Africa",
    amountSent: 126.0,
    amountReceived: "2092.23 ZAR",
    status: "Failed",
  },
  {
    transactionId: "TXN011",
    date: "2025-07-15",
    recipient: "Michael Johnson",
    destination: "United Kingdom",
    amountSent: 66.0,
    amountReceived: "46.93 GBP",
    status: "Pending",
  },
  {
    transactionId: "TXN012",
    date: "2025-07-12",
    recipient: "Emma Wilson",
    destination: "South Africa",
    amountSent: 480.0,
    amountReceived: "7970.4 ZAR",
    status: "Pending",
  },
  {
    transactionId: "TXN013",
    date: "2025-07-09",
    recipient: "John Doe",
    destination: "United Kingdom",
    amountSent: 401.0,
    amountReceived: "285.11 GBP",
    status: "Completed",
  },
  {
    transactionId: "TXN014",
    date: "2025-07-06",
    recipient: "Sarah Smith",
    destination: "South Africa",
    amountSent: 426.0,
    amountReceived: "7073.73 ZAR",
    status: "Failed",
  },
];

export const specialOffers = [
  {
    heading: "Limited Time Offer",
    description: "Get 20% off your next transaction",
    cta: "Claim Offer",
  },
  {
    heading: "Refer a Friend",
    description: "Give your friends a discount and earn rewards",
    cta: "Refer Now",
  },
  {
    heading: "Seasonal Promotion",
    description: "Enjoy special rates during the holiday season",
    cta: "Learn More",
  },
  {
    heading: "Cashback Offer",
    description: "Get 5% cashback on your next transaction",
    cta: "Claim Cashback",
  },
];

export const colorGradients = [
  "from-[#0D3A0D] to-[#145214]", // Dark green shades blending with primary
  "from-[#011E27] to-[#023B4C]", // Dark blue shades blending with secondary
  "from-[#0A2F2F] to-[#024D4D]", // Teal-dark gradient
  "from-[#1C3A17] to-[#2E5823]", // Earthy green-dark gradient
  "from-[#123B4C] to-[#022731]", // Deep blue to your secondary
  "from-[#145214] to-[#0D3A0D]", // Primary-inspired dark gradient
];

export const feeCharges = {
  GBP: 10,
  ZAR: 20,
};
