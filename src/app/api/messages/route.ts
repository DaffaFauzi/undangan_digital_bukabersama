import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyFRsS3T4CyGsEgUf73qj4bF9p2i4qMOlXJwY2Lm1UOQYmLjhuQAOljuor3Ei-Mmm7SHA/exec";

// GET: Fetch all messages
export async function GET() {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "get_messages" }),
    });

    if (!response.ok) throw new Error("Failed to fetch messages");
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}

// POST: Create a new message or handle actions
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Handle delete action
    if (body.action === "delete_message") {
      if (!body.id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "delete_message",
          id: body.id
        }),
      });

      if (!response.ok) throw new Error("Failed to delete message");
      const data = await response.json();
      return NextResponse.json(data);
    }
    
    // Create new message logic
    // Validate
    if (!body.name || !body.message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "create_message",
        name: body.name,
        message: body.message,
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) throw new Error("Failed to send message");
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Messages API Error:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}

