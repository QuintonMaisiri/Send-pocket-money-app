"use client";

import { Calculator, Send } from "lucide-react";
import Input from "./input";
import Select from "./select";
import Button from "./button";
import { useEffect, useState } from "react";
import { feeCharges } from "@/helper/constants";

export default function SendMoneyComponent({
  onMoneySent,
}: {
  onMoneySent: () => void;
}) {
  const [amount, setAmount] = useState("");
  const [country, setCountry] = useState("");
  const [recipient, setRecipient] = useState("");

  const [exchangeRates, setExchangeRates] = useState({});

  const calculateFee = () => {
    if (!amount || !country) return 0;
    const feePercentage = feeCharges[country as keyof typeof feeCharges];
    return (parseFloat(amount) * feePercentage) / 100;
  };

  const receiverAmount = () => {
    if (!amount || !country) return 0;
    const fee = calculateFee();
    const exchangeRate = exchangeRates[country as keyof typeof exchangeRates];
    return (parseFloat(amount) - fee) * (exchangeRate || 1);
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: country,
    }).format(amount);
  };

  const sendMoney = () => {
    const form = document.getElementById("send-money-form") as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const newTransaction = {
      transactionId: `TXN${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      recipient,
      destination: country,
      amountSent: parseFloat(amount),
      amountReceived: receiverAmount().toFixed(2) + " " + country,
      status: "Pending",
    };
    let storedTransactions = JSON.parse(
      localStorage.getItem("transactions") || "[]"
    );
    storedTransactions = [newTransaction, ...storedTransactions];
    localStorage.setItem("transactions", JSON.stringify(storedTransactions));

    onMoneySent();

    setAmount("");
    setCountry("");
    setRecipient("");

    alert("Transaction successful!");
  };

  useEffect(() => {
    async function fetchExchangeRates() {
      const response = await fetch("/api/rates");
      const data = await response.json();

      const mergedRates = data.reduce((acc: any, rate: any) => {
        return { ...acc, ...rate };
      }, {});

      setExchangeRates(mergedRates);
      console.log(mergedRates);
    }
    fetchExchangeRates();
  }, []);

  return (
    <div className="p-4 rounded-xl border border-gray-200 space-y-4 bg-white">
      <div className="flex items-center gap-4">
        <Send className="text-primary" />
        <h2 className="text-lg">Send Money</h2>
      </div>
      <p className="text-gray-600">
        Send pocket money to your children studying abroad
      </p>
      <form action="" id="send-money-form" className="space-y-4">
        <Input
          type="number"
          placeholder="Enter amount"
          label="Amount"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter recipient's name"
          label="Recipient Name"
          minLength={6}
          maxLength={50}
          required
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <Select
          options={[
            { value: "GBP", label: "United Kingdom" },
            { value: "ZAR", label: "South Africa" },
          ]}
          className=""
          required
          label="Country"
          placeholder="Select country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </form>
      <hr className="border-t border-gray-300" />
      {amount && country ? (
        <div className="bg-gray-100 p-4 rounded-xl space-y-4">
          <div className="flex items-center gap-4">
            <Calculator />
            <h3>Transaction Summary</h3>
          </div>
          <div className="flex justify-between w-full">
            <p>Amount:</p>
            <p>{formatAmount(parseFloat(amount))}</p>
          </div>
          <div className="flex justify-between w-full">
            <p>{`Fee ${feeCharges[country as keyof typeof feeCharges]}%:`}</p>
            <p className="text-red-500">-{formatAmount(calculateFee())}</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Exchange Rates:</p>
            <p>
              1 USD = {exchangeRates[country as keyof typeof exchangeRates]}{" "}
              {country}
            </p>
          </div>
          <hr className="border-t border-gray-300" />
          <div className="flex justify-between w-full">
            <p>Recipient receives:</p>
            <p className="text-primary">
              {country === "GBP" ? "£" : "R"}
              {formatAmount(receiverAmount())}
            </p>
          </div>
        </div>
      ) : null}
      <Button text="Send Now" className="w-full" onClick={() => sendMoney()} />
    </div>
  );
}
