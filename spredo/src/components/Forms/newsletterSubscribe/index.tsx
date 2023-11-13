"use client";
import { HandRaisedIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Space } from "antd";
import Alert from "antd/es/alert/Alert";
import { useState } from "react";
import Spinner from "@/components/Spinner";

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [serverError, setServerError] = useState("");
  const [serverResponseType, setServerResponseType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    console.log("email: ", email);
    const emailValid = checkEmailValidity();
    if (emailValid) {
      setIsLoading(true);
      const user = {
        email: email,
        userDeviceMetadata: {
          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,
        },
      };
      let response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user }),
      });

      if (!response.ok) {
        setServerError("Oops, something went wrong. Try again!");
        setServerResponseType("error");
        setIsLoading(false);
      } else {
        setServerError("Successfully added to Spredo newsletter.");
        setServerResponseType("success");
        setEmail("");
        setIsLoading(false);
      }
    } else {
      setServerError("Invalid email.");
    }
  };

  const checkEmailValidity = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setServerError("");
  };

  return (
    <div
      className="relative bg-midnightGreen isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32"
      style={{ color: "white" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              We will send you updates on the upcoming flavors, deals and much
              more.
            </p>
            {serverError && (
              <div className="flex">
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Alert
                    message={serverError}
                    type={
                      serverResponseType === "success" ? "success" : "error"
                    }
                    closable
                    onClose={onClose}
                  />
                </Space>
              </div>
            )}
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={email}
                autoComplete="email"
                style={{ color: "black" }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              {isLoading ? (
                <Spinner></Spinner>
              ) : (
                <button
                  type="submit"
                  onClick={() => handleSubmit()}
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 bg-darkJelly"
                >
                  Subscribe
                </button>
              )}
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div
                className="rounded-md p-2 ring-white"
                style={{ color: "white", border: "0.5px solid white" }}
              >
                <LockClosedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">
                Privacy Protection
              </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Rest assured we will not be sharing the information you provide
                with any third-party organizations.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div
                className="rounded-md bg-white/5 p-2 ring-white/10"
                style={{ color: "white", border: "0.5px solid white" }}
              >
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                We promise not to spam your inbox with our newsletters. Expect a
                maximum of one post per week.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 bg-midnightGreen"
        aria-hidden="true"
      ></div>
    </div>
  );
}
