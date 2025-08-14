import Button from "@/components/button";
import { LogIn, Send } from "lucide-react";

export default function SignUpPage() {
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
          <form className="flex flex-col space-y-4 text-start">
            <div className="flex flex-col  space-y-2">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
           <Button text="Sign In" />
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
