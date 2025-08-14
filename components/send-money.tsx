import { Calculator, Send } from "lucide-react";
import Input from "./input";
import Select from "./select";
import Button from "./button";

export default function SendMoneyComponent() {
  return (
    <div className="p-4 rounded-xl border border-gray-200 space-y-4 bg-white">
      <div className="flex items-center gap-4">
        <Send className="text-primary" />
        <h2 className="text-lg">Send Money</h2>
      </div>
      <p className="text-gray-600">
        Send pocket money to your children studying abroad
      </p>
      <form action="">
        <Input type="text" placeholder="Enter amount" label="Amount" required />
        <Select
          options={[
            { value: "gb", label: "United Kingdom" },
            { value: "zar", label: "South Africa" },
          ]}
          className=""
          required
          label="Country"
          placeholder="Select country"
        />
      </form>
      <hr className="border-t border-gray-300"/>
      <div className="bg-gray-100 p-4 rounded-xl space-y-4">
        <div className="flex items-center gap-4">
          <Calculator />
          <h3>Transaction Summary</h3>
        </div>
         <div className="flex justify-between w-full">
            <p>{`Amount ${10}%:`}</p>
            <p>$100</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Fee:</p>
            <p className="text-red-500">-$10</p>
          </div>
           <div className="flex justify-between w-full">
            <p>Exchange Rates:</p>
            <p>1 USD = 0.75 GBP</p>
          </div>
          <hr className="border-t border-gray-300"/>
           <div className="flex justify-between w-full">
            <p>Recipient receives:</p>
            <p className="text-primary">£100</p>
          </div>
      </div>
      <Button text="Send Now" className="w-full"/>
    </div>
  );
}
