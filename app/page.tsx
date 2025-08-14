"use client";
import AdsCarousel from "@/components/ads-carousel";
import Navbar from "@/components/navbar";
import SendMoneyComponent from "@/components/send-money";
import TransactionHistory from "@/components/transaction-history";
import useAuth from "@/hooks/auth";
import { useState } from "react";

export default function Home() {
  const { user, loading } = useAuth();

  const [refreshTransactionsKey, setRefreshTransactionsKey] = useState(0);

  const handleMoneySent = () => {
    setRefreshTransactionsKey((prev) => prev + 1);
  };

  if (loading) return <p className="mt-10">Loading...</p>;

  if (!user) return null;

  return (
    <> 
    <Navbar />
     <div className="space-y-8 py-8 px-4 mx-auto max-w-[1440px] min-h-screen">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-lg text-gray-600">
          Welcome to your dashboard. Here you can send money to your loved ones
          and view your activity.
        </p>
      </div>
      <div className="lg:flex gap-8 space-y-8 lg:space-y-0">
        <div className="lg:w-1/3">
          <SendMoneyComponent onMoneySent={handleMoneySent} />
        </div>
        <div className="lg:w-2/3">
          <AdsCarousel />
        </div>
      </div>
      <TransactionHistory refreshTransactionsKey={refreshTransactionsKey} />
    </div>
    </>
   
  );
}
