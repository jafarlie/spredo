import { NextResponse } from "next/server";

export async function POST(req) {
  const backend_url =
    process.env.NODE_ENV == "development"
      ? process.env.BACKEND_LOCAL_URL
      : process.env.BACKEND_CLOUD_URL;
  console.log(`${backend_url}api/v1/contact`);
  console.log("Hi");

  const bodyOfRequest = await req.json();
  console.log("bodyOfRequest: ", bodyOfRequest);
  //const { firstName, lastName, email, subject, body } = bodyOfRequest;

  try {
    const result = await fetch(`${backend_url}/api/v1/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyOfRequest),
    });

    const text = await result.text();
    let response = {};
    try {
      response = JSON.parse(text);
      console.log("Server: response: ", response);
    } catch (error) {
      console.error("Failed to parse response:", text);
    }
    //console.log("Server: response: ", response);

    return NextResponse.json({ serverResponse: response }, { status: 200 });
  } catch (err) {
    console.error("Error fetching profiles:", err);
    return NextResponse.json(
      {
        error: err.message,
      },
      { status: err.status || 500 }
    );
  }
}
