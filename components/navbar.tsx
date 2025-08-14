'use client';
import { LogOut } from "lucide-react";
import Button from "./button";

export default function Navbar() {
  const signout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/signin";
  };

  return (
    <nav className="p-4 bg-white shadow  w-full">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center hidden md:flex">
        <div className="flex items-center gap-2">
          <div className="text-white bg-primary w-max px-2 py-4 rounded-2xl font-black text-xl">
            SPM
          </div>
          <div className="text-primary font-black text-lg">
            Send Pocket Money
          </div>
        </div>
        <div className="flex items-center gap-4">
          Welcome Back
          <Button text="Log Out" onClick={signout} />
        </div>
      </div>

      {/* Mobile nav */}

      <div className="max-w-[1440px] mx-auto flex justify-between items-center md:hidden">
        <div className="flex items-center gap-2">
          <div className="text-white bg-primary w-max px-2 py-4 rounded-2xl font-black text-md">
            SPM
          </div>
          <div className="text-primary font-black text-sm">
            Send Pocket Money
          </div>
        </div>
         <LogOut onClick={signout} />
      </div>
    </nav>
  );
}
