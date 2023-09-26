import Image from "next/image";
import nespressoMachine from "../../public/NespressoMachine.png";
import sandwichMaking from "../../public/sandwichmaking.jpg";
import storyOfFounders from "../../public/StoryOfFounders.jpg";
import { Carousel } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
  height: "300px",
  marginTop: "50px",
  color: "white",
  lineHeight: "160px",
  textAlign: "center",
  background: "#dba76c",
};

const data = [
  {
    name: "Ustin Zarubin",
    position: "CEO, Streamdal",
    review:
      "Seems like everyone enjoys the unique spreads offered by Spredo. The device is work of art, simple in design and use. Definitely recommend having this device in your kitchen.",
  },
  {
    name: "Kyle Grishenko",
    position: "CEO, ActionHomeServices",
    review:
      "Our team is always on the go and Spredo is something we needed. The portable device makes our live easy and the Spredo flavours are just amazing.",
  },
  {
    name: "Joshua Wattson",
    position: "CEO, SimpliDesign",
    review:
      "Rarely do you come across something that exceeds your expectations right out of the box. This does that and then some. Highly recommend!",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-bread">
        <div className="mx-auto">
          <div className="h-screen w-screen flex">
            {/* Left Div */}
            <div className="font-sans bg-gray-300 w-1/2 h-full flex justify-center items-start flex-col p-4 space-y-6 mb-6 ml-24">
              <h1 className="text-6xl font-bold pb-3">
                Reinventing Your Sandwich
              </h1>
              <h2 className="text-2xl text-gray-600">
                Making a sandwich has never been more fun.
              </h2>
              <button
                style={{ color: "white" }}
                className="px-8 text-xl w-1/2 py-2 bg-darkJelly rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Treat Yourself Today
              </button>
            </div>
            {/* Right Div */}
            <div className="bg-gray-200 w-1/2 h-full">
              {/* Content for the left div if any */}
              <Image
                src={nespressoMachine}
                alt=""
                width={500}
                height={500}
                className="mt-24"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto">
          <div className="w-full flex relative h-[350px] overflow-hidden">
            <Image
              alt="Sandwich making machine Spredo"
              src={sandwichMaking}
              layout="fill"
              objectFit="cover"
              quality={100}
            ></Image>
          </div>
          <div
            className="flex w-full font-bold h-[150px]"
            style={{ color: "white" }}
          >
            <div className="w-1/3 p-4 bg-darkJelly">
              <div className="bg-blue-400 aspect-w-1 aspect-h-1">
                <h1 className="text-xl">01</h1>
                <div className="mt-9 text-xl">
                  <span>No More Bread Tearing</span>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-4 bg-nutty">
              <div className="aspect-w-1 aspect-h-1">
                <h1 className="text-xl">02</h1>
                <div className="mt-9 text-xl">
                  <span>Say No More To Making Mess</span>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-4 bg-midnightGreen">
              <div className="bg-blue-300 aspect-w-1 aspect-h-1">
                <h1 className="text-xl">03</h1>
                <div className="mt-9 text-xl">
                  <span>Forget About Dishwashing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="bg-bread">
        <div className="bg-midnightGreen relative mx-auto">
          <div className="h-screen w-full flex">
            {/* Left-hand side */}
            <div className="w-1/2 p-4">
              <div className="w-1/2 ml-32 mt-16">
                <h1
                  className="text-4xl mb-4 font-extrabold tracking-wide"
                  style={{ color: "#dba76c" }}
                >
                  The Story of Two Guys Who were too Lazy to Make a Sandwich
                </h1>
                <p
                  style={{ color: "white" }}
                  className="mt-12 text-lg font-bold"
                >
                  Your content here. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vivamus lacinia odio vitae vestibulum. Your
                  content here. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                </p>
              </div>
            </div>

            {/* Right-hand side */}
            <div className="w-1/2 relative">
              <Image
                alt="founders"
                src={storyOfFounders}
                className="absolute top-0 bottom-0 w-auto h-full object-cover"
              ></Image>
            </div>
            <svg
              className="absolute bottom-0 w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#fff7e1"
                fillOpacity="1"
                d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,128C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <section className="bg-bread">
        <div className="container mx-auto px-4">
          <div className="h-[450px]">
            <div className="w-full text-center">
              <h1
                className="text-4xl mb-4 font-extrabold tracking-wide"
                style={{ color: "#05393c" }}
              >
                Why Should You Get Spredo?
              </h1>
              <div
                style={contentStyle}
                className="rounded-tl-3xl rounded-br-3xl"
              >
                <Carousel style={{ color: "white" }} autoplay>
                  {data.map((customer, idx) => (
                    <div key={idx} className="p-4 rounded shadow-lg">
                      <div className="text-center">
                        <h2 className="text-2xl font-semibold">
                          {customer.name}
                        </h2>
                        <p className="text-gray-500">{customer.position}</p>
                      </div>
                      <div className="mt-24 mb-12 text-xl">
                        <p className="text-gray-800">
                          &quot;{customer.review}&quot;
                        </p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
