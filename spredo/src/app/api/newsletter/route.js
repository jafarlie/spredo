import { NextResponse } from "next/server";
import { DynamoDB } from "aws-sdk";

const dynamoDB = new DynamoDB.DocumentClient({
  credentials: {
    accessKeyId: process.env.AWS_IAM_USER_ACCESS_KEY ?? "",
    secretAccessKey: process.env.AWS_IAM_USER_SECRET_ACCESS_KEY ?? "",
  },
  region: "us-east-1",
});

export async function POST(req) {
  const body = await req.json();
  const { email, userDeviceMetadata } = body.user;
  console.log("API NEWSLETTER, email: ", email);
  const params = {
    TableName: "NewsletterSubscription",
    Item: {
      email: email,
      createdAt: new Date().toISOString(),
      userDeviceMetadata: userDeviceMetadata,
    },
  };
  console.log("PARAMS: ", params);
  try {
    const data = await dynamoDB.put(params).promise();
    console.log("DATA from Dynamodb: ", data);
    if (data) {
      return NextResponse.json(
        {
          response: "OK",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log("ERROR: ", error);
    return NextResponse.json(
      { response: null },
      { status: error.status || 500 }
    );
  }
}
