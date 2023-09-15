import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="h-screen w-screen flex">
          {/* Left Div */}
          <div className="bg-gray-300 w-1/2 h-full flex justify-center items-center flex-col p-4 space-y-4">
            <h1 className="text-4xl font-bold">Reinventing Your Sandwich</h1>
            <h2 className="text-2xl text-gray-600">
              Making a sandwich has never been more fun!
            </h2>
            <button
              style={{ color: "white" }}
              className="px-8 w-1/2 py-2 bg-darkJelly rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Treat Yourself Today
            </button>
          </div>
          {/* Right Div */}
          <div className="bg-gray-200 w-1/2 h-full">
            {/* Content for the left div if any */}
          </div>
        </div>
      </div>
    </>
  );
}
