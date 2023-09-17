import Image from "next/image";
import ContactImage from "../../../../public/Contact.jpg";

const ContactForm = () => {
  return (
    <>
      <div className="relative flex h-screen w-full bg-cover bg-center justify-between">
        <Image
          src={ContactImage}
          alt="Contact Image"
          layout="fill"
          objectFit="cover"
        ></Image>
        <div className="absolute inset-0 opacity-20"></div>
        {/* Left column - 1/3 */}
        <div className="w-1/3 flex justify-center z-10 items-center p-4 bg-gray-200">
          <div className="ml-12" style={{ color: "white" }}>
            <h1 className="text-6xl font-bold pb-3">Send us a message 😎</h1>
            <h2 className="text-2xl mt-6 text-gray-600">
              Reach out to us with any questions you might have, whether you are
              an investor or want to learn more about our product.
            </h2>
          </div>
        </div>

        {/* Right column - 2/3 */}
        <div className="w-2/3 px-12 py-6 z-10 h-5/6 justify-center align-center flex mt-14">
          <form
            className="w-2/3 bg-bread px-3 py-3 rounded-lg"
            style={{ color: "black" }}
          >
            <div className="flex mb-4 space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="p-2 w-full border rounded-md"
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="p-2 w-full border rounded-md"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="body"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Body:
              </label>
              <textarea
                id="body"
                name="body"
                className="p-2 w-full border rounded-md"
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
