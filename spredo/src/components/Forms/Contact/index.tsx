"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const ContactForm = () => {
  // States for each input field
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Here you would typically send the form data to a server or handle it otherwise.
    console.log({
      firstName,
      lastName,
      email,
      subject,
      body,
    });
  };

  return (
    <>
      <div className="bg-bread relative flex h-screen w-full bg-cover bg-center justify-between">
        <div className="w-1/3 flex justify-center z-10 items-center p-4 bg-gray-200">
          <div className="ml-12 mb-6" style={{ color: "black" }}>
            <h1 className="text-3xl font-bold pb-3">Send us a message</h1>
            <h2 className="text-2xl mt-6 text-gray-600">
              Reach out to us with any questions you might have, whether you are
              an investor or want to learn more about our product.
            </h2>
            <br></br>
            <h3 className="text-lg">info@spredo.ca</h3>
          </div>
        </div>

        {/* Right column - 2/3 */}
        <div className="w-2/3 px-12 py-6 z-10 h-5/6 justify-center align-center flex mt-14">
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
