import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyFRsS3T4CyGsEgUf73qj4bF9p2i4qMOlXJwY2Lm1UOQYmLjhuQAOljuor3Ei-Mmm7SHA/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.nama || !body.institusi || !body.jabatan || !body.status) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Forward to Google Apps Script
    // Note: We don't use 'no-cors' here because we are on the server
    const payload = { ...body, action: "rsvp" };
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Google Script Error:", text);
      return NextResponse.json(
        { error: "Failed to submit to Google Sheets" },
        { status: response.status }
      );
    }

    const data = await response.json().catch(() => ({ status: "success" }));

    return NextResponse.json(data);
  } catch (error) {
    console.error("RSVP API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
