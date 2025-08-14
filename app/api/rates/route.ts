import { NextResponse } from "next/server";

export async function GET(NextRequest: Request) {
    const response = await fetch(`${process.env.FX_RATES_API_URL}`);
    const data = await response.json();
    return NextResponse.json(data);
}