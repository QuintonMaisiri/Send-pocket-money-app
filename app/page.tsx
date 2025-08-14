import AdsCarousel from "@/components/ads-carousel";
import SendMoneyComponent from "@/components/send-money";
import TransactionHistory from "@/components/transaction-history";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8 py-8 px-4">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-lg text-gray-600">
          Welcome to your dashboard. Here you can send money to your loved ones
          and view your activity.
        </p>
      </div>
      <div className="lg:flex gap-8 space-y-8 lg:space-y-0">
        <div className="lg:w-1/3">
          <SendMoneyComponent />
        </div>
        <div className="lg:w-2/3">
          <AdsCarousel />
        </div>
      </div>
      <TransactionHistory />
    </div>
  );
}
