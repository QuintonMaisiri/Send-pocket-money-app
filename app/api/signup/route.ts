import { NextResponse } from "next/server";

export async function POST(NextRequest: Request) {
    const { email, password } = await NextRequest.json();
    // Handle user signup logic here
    return NextResponse.json({ message: "User signed up successfully" });
}
