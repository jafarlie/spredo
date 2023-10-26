"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Alert, Space } from "antd";

const ContactForm = () => {
  // States for each input field
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [serverPostMessage, setServerPostMessage] = useState("");
  const [serverResponseType, setServerResponseType] = useState("");

  // Event handlers
  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const object = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: subject,
      body: body,
    };
    let data = await fetch("/api/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    });
    let { serverResponse } = await data.json();
    if (serverResponse) {
      setServerPostMessage(serverResponse.message);
      setServerResponseType("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setBody("");
      setTimeout(() => {
        setServerPostMessage("");
      }, 4000);
    } else {
      setServerPostMessage(serverResponse.message);
      setServerResponseType("error");
      setTimeout(() => {
        setServerPostMessage("");
      }, 4000);
    }
    console.log("Contact page, server response: ", serverResponse);
  };

  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setServerPostMessage("");
  };

  return (
    <>
      <div className="flex bg-bread pt-12 pl-14">
        {serverPostMessage && (
          <div className="flex">
            <Space direction="vertical" style={{ width: "100%" }}>
              <Alert
                message={serverPostMessage}
                type={serverResponseType === "success" ? "success" : "error"}
                closable
                onClose={onClose}
              />
            </Space>
          </div>
        )}
      </div>
      <div className="bg-bread relative flex flex-col md:flex-row h-screen w-full bg-cover bg-center justify-between">
        <div className="w-full md:w-1/3 flex justify-center z-10 items-center p-4 md:p-4 bg-gray-200">
          <div className="ml-12 mb-6" style={{ color: "black" }}>
            <h1 className="text-3xl font-bold pb-3">Send us a message</h1>
            <h2 className="text-2xl mt-6 text-gray-600">
              Reach out to us with any questions you might have, whether you are
              an investor or want to learn more about our product.
            </h2>
            <h3 className="text-lg">info@spredo.ca</h3>
          </div>
        </div>

        {/* Right column - 2/3 */}
        <div className="w-full md:w-2/3 px-4 md:px-12 py-6 z-10 justify-center align-center flex">
          <form
            onSubmit={handleSubmit}
            className="w-2/3 px-3 py-3 rounded-lg border-2"
            style={{ color: "black" }}
          >
            <div className="flex mb-4 space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  required
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  className="p-2 w-full border rounded-md bg-bread"
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className="p-2 w-full border rounded-md bg-bread"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="p-2 w-full border rounded-md bg-bread"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={subject}
                onChange={handleSubjectChange}
                className="p-2 w-full border rounded-md bg-bread"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="body"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Body*
              </label>
              <textarea
                id="body"
                name="body"
                required
                minLength={120}
                value={body}
                onChange={handleBodyChange}
                className="p-2 w-full border rounded-md bg-bread"
                rows={5}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{ color: "white" }}
              className="px-8 text-lg w-1/2 py-2 bg-darkJelly rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
