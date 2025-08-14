"use client";
import { hashPassword } from "@/helper/util";
import { Send } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if fullName already exists
    if (
      users.some(
        (u: any) =>
          u.fullName === userInfo.fullName || u.email === userInfo.email
      )
    ) {
      alert("Full Name or Email already exists");
      return;
    }

    // Save new user
    const hashedPassword = await hashPassword(userInfo.password);
    users.push({
      fullName: userInfo.fullName,
      email: userInfo.email,
      password: hashedPassword,
    });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(userInfo));
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
        <div className="bg-white rounded-lg shadow-lg p-8 w-[90%] md:w-[80%] space-y-4 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/30 rounded-full mx-auto">
            <Send className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Create Your Account</h2>
          <p>Start sending money to your loved ones abroad</p>
          <form
            className="flex flex-col space-y-4 text-start"
            id="signup-form"
            onSubmit={handleSignup}
          >
            <div className="flex flex-col  space-y-2">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                minLength={6}
                maxLength={50}
                required
                value={userInfo.fullName}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, fullName: e.target.value })
                }
                placeholder="Full Name"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col  space-y-2">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                required
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
                placeholder="Email Address"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                minLength={6}
                id="password"
                value={userInfo.password}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
                placeholder="Password"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <button
              className="bg-primary text-white py-2 rounded-lg"
              type="submit"
            >
              Create Account
            </button>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <a href="/signin" className="text-primary">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
