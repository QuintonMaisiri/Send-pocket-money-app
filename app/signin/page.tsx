"use client";

import Button from "@/components/button";
import { hashPassword } from "@/helper/util";
import { LogIn, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const [signinInfo, setSigninInfo] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const hashedPassword = await hashPassword(signinInfo.password);
    const user = users.find((u: any) => u.email === signinInfo.email);
    if (!user) {
      alert("User not found");
      return;
    }
    if (user.password !== hashedPassword) {
      alert("Incorrect password");
      return;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    router.push("/");
  };

  return (
    <div className="flex">
      <div className="hidden md:flex items-center justify-center w-1/2 h-screen">
        <div>
          <h2 className="text-6xl font-black text-primary">SPM</h2>
          <p className="text-3xl">
            Easy Remittance,
            <br /> Happy Kids
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-[80%] space-y-4 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/30 rounded-full mx-auto">
            <LogIn className="text-primary" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Welcome Back</h2>
            <p>Miss them? Sign in</p>
          </div>
          <form
            className="flex flex-col space-y-4 text-start"
            onSubmit={handleSignIn}
            id="signin-form"
          >
            <div className="flex flex-col  space-y-2">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                required
                value={signinInfo.email}
                onChange={(e) =>
                  setSigninInfo({ ...signinInfo, email: e.target.value })
                }
                placeholder="Email Address"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                value={signinInfo.password}
                onChange={(e) =>
                  setSigninInfo({ ...signinInfo, password: e.target.value })
                }
                placeholder="Password"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <button
              className="bg-primary text-white py-2 rounded-lg"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <p className="text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-primary">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
