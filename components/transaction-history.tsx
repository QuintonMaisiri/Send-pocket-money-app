"use client";

import { transactions } from "@/helper/constants";
import { History } from "lucide-react";
import { use, useState } from "react";

export default function TransactionHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  const totalPages = Math.ceil(transactions.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = transactions.slice(startIndex, startIndex + rowsPerPage);

  const statusColors: Record<string, string> = {
    Completed: "bg-green-100 text-green-800",
    Failed: "bg-red-100 text-red-800",
    Pending: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-4 overflow-x-scroll">
      <div className="flex items-center gap-4">
        <History className="text-gray-400" />
        <div>
          <h3 className="text-lg font-bold">Transaction History</h3>
          <p>View all your past transactions and their status</p>
        </div>
      </div>
      <table className="w-full border-collapse border border-gray-200 text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border border-gray-200">Transaction ID</th>
            <th className="p-3 border border-gray-200">Date</th>
            <th className="p-3 border border-gray-200">Recipient</th>
            <th className="p-3 border border-gray-200">Destination</th>
            <th className="p-3 border border-gray-200">Amount Sent</th>
            <th className="p-3 border border-gray-200">Amount Received</th>
            <th className="p-3 border border-gray-200">Status</th>
          </tr>
        </thead>
        <tbody>{
           currentRows.map((txn) => (
            <tr key={txn.transactionId}>
              <td className="p-3 border border-gray-200">{txn.transactionId}</td>
              <td className="p-3 border border-gray-200">{txn.date}</td>
              <td className="p-3 border border-gray-200">{txn.recipient}</td>
              <td className="p-3 border border-gray-200">{txn.destination}</td>
              <td className="p-3 border border-gray-200">${txn.amountSent.toFixed(2)}</td>
              <td className="p-3 border border-gray-200">
                {txn.amountReceived}
              </td>
              <td className="p-3 border border-gray-200">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[txn.status]}`}
                >
                  {txn.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="stick md:relative top-0 left-0 w-max md:w-full md:flex items-center justify-between text-sm">
        <span>
          Showing {startIndex + 1}-{Math.min(startIndex + rowsPerPage, transactions.length)} of{" "}
          {transactions.length} transactions
        </span>
        <div className="flex gap-1 mt-4 md:mt-0">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-blue-600 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
