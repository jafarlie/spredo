import Image from "next/image";
import SpredoCartridge from "../../public/SpredoCartridges.png";
import Founders from "../../public/AboutUsSection.png";
import SpredoDeviceRed from "../../public/DarkJellyBgRemoved.png";
import { Carousel } from "antd";
import React from "react";
import "../app/landingPage.css";
import Link from "next/link";

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
      <section className="bg-bread lg:pb-0 section-1">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row h-screen w-full md:flex-row">
            {/* Left Div */}
            <div className="landing-page-headers md:order-1 order-2 font-sans flex-grow flex-shrink-0 flex justify-center items-start flex-col p-4 space-y-6 mb-6 lg:w-1/3 md:w-1/3 lg:ml-32 sm:mt-3">
              <h1 className="text-4xl md:text-4xl sm:text-5xl lg:text-6xl font-bold pb-3">
                Reinventing Your Sandwich
              </h1>
              <h2 className=" text-lg sm:text-xl md:text-lg text-gray-600">
                Making a sandwich has never been more fun.
              </h2>
              <button
                style={{ color: "white" }}
                className="landing-page-conversion-button px-4 sm:px-6 lg:px-8 w-full sm:w-3/4 md:w-3/4 lg:w-2/3 py-2 bg-darkJelly rounded-full"
              >
                <Link href="/contact" style={{ color: "white" }}>
                  Treat Yourself Today
                </Link>
              </button>
            </div>
            {/* Right Div */}
            <div
              className="spredo-machine-container-parent flex-grow lg:w-2/3 lg:mr-2 order-1 md:order-2"
              // style={{ position: "relative" }}
            >
              {/* Content for the left div if any */}
              <div className="h-1/5 pt-10 sm:pt-2 pb-10 spredo-machine-container">
                <Image
                  src={SpredoDeviceRed}
                  alt=""
                  className="mt-12 spredo-machine"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-nutty">
        <div className="mx-auto">
          <div className="flex flex-col sm:flex-row w-screen">
            {/* <div className="bg-midnightGreen w-full sm:w-1/2 h-[380px] flex items-center justify-center order-1 sm:order-none">
              <h1
                className="lg:text-3xl sm-text-2xl mb-4 ml-0 sm:ml-24 font-extrabold tracking-wide"
                style={{ color: "#dba76c" }}
              >
                New spreads delivered to your door monthly!
              </h1>
            </div> */}
            <div className="bg-midnightGreen w-full sm:w-1/2 flex items-center justify-center order-1 sm:order-none">
              <h1
                className="lg:text-3xl sm:text-xl mb-4 ml-6 font-extrabold tracking-wide monthlySpreads"
                style={{ color: "#dba76c" }}
              >
                New spreads delivered monthly!
              </h1>
            </div>
            <div className="w-1/2 h-full flex w-1/2 relative h-[450px] overflow-hidden  w-full sm:w-1/2 order-2 sm:order-none">
              <Image
                alt="Sandwich making machine Spredo"
                src={SpredoCartridge}
                style={{ objectFit: "contain", height: "100%", width: "100%" }}
                quality={100}
              ></Image>
            </div>
          </div>

          <div
            className="flex w-full font-bold h-[180px]"
            style={{ color: "white" }}
          >
            <div className="w-1/3 p-4 border-t-2 border-b-2 border-r-2 border-black bg-nutty">
              <div className="bg-blue-400 aspect-w-1 aspect-h-1">
                <h1 className="text-lg sm:text-xl">01</h1>
                <div className="mt-4 sm:mt-9 text-lg sm:text-xl">
                  <span>No More Bread Tearing</span>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-4 bg-midnightGreen border-r-2 border-b-2 border-t-2 border-black">
              <div className="aspect-w-1 aspect-h-1">
                <h1 className="text-lg sm:text-xl">02</h1>
                <div className="mt-4 sm:mt-9 text-lg sm:text-xl">
                  <span>Say No More To Making Mess</span>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-4 border-t-2 border-r-2 border-b-2 bg-darkJelly border-black">
              <div className="bg-blue-300 aspect-w-1 aspect-h-1">
                <h1 className="text-lg sm:text-xl">03</h1>
                <div className="mt-4 sm:mt-9 text-lg sm:text-xl">
                  <span>Forget About Dishwashing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="bg-bread">
        <div className="bg-midnightGreen aboutUs relative mx-auto">
          <div className="h-screen w-full flex">
            {/* Left-hand side */}
            <div className="w-full sm:w-4/4 p-4 mx-4 sm:mx-0">
              <div className="lg:w-1/2 sm:w-full lg:ml-32 sm:ml-4 mt-8">
                <h1
                  className="text-2xl mb-4 font-extrabold tracking-wide"
                  style={{ color: "#dba76c" }}
                >
                  The Story of Two Guys Who were too Lazy to Make a Sandwich
                </h1>
                <p
                  style={{ color: "white" }}
                  className="mt-6 text-md font-bold"
                >
                  It all began in a small apartment kitchen. Zach and Elvin, two
                  friends with a shared passion for culinary adventures, found
                  themselves struggling time and again with the simple act of
                  making a spread sandwich. Whether it was peanut butter
                  clumping unevenly or jam spilling over the sides, their
                  sandwich-making sessions were always a messy affair.
                </p>
                <p
                  style={{ color: "white" }}
                  className="mt-6 text-md font-bold"
                >
                  After countless hours of brainstorming and prototyping, Spredo
                  was born. A solution that not only ensured a perfect spread
                  sandwich every time but also introduced users to a world of
                  diverse flavors through its subscription model. Through
                  Spredo, the duo transformed their sandwich struggles into a
                  culinary revolution, making sandwich-making a joy for many.
                </p>
              </div>
            </div>

            {/* Right-hand side */}
            <div className="hidden sm:block w-1/2 relative">
              <Image
                alt="founders"
                src={Founders}
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
          <div className="h-[550px]">
            <div className="w-full text-center">
              <h1
                className="text-4xl mb-4 font-extrabold tracking-wide"
                style={{ color: "#05393c" }}
              >
                Why Should You Get Spredo?
              </h1>
              <div className="rounded-tl-3xl rounded-br-3xl carouselParentContainer">
                <Carousel style={{ color: "white" }}>
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
