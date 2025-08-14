"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAuth() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (!storedUser) {
      router.push("/signin"); 
    } else {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, [router]);

  return { user, loading };
}
