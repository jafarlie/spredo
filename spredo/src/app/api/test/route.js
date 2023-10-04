import { NextResponse } from "next/server";

export async function GET(req) {
  fetch("http://3.135.199.208:4000/", {
    method: "GET",
  }).then(() => {
    console.log("Success");
  });

  return NextResponse.json(
    {
      message: "User registered successfully",
    },
    { status: 200 }
  );
}
