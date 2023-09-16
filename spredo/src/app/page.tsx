import Image from "next/image";
import nespressoMachine from "../../public/NespressoMachine.png";
import sandwichMaking from "../../public/sandwichmaking.jpg";
import storyOfFounders from "../../public/StoryOfFounders.jpg";

export default function Home() {
  return (
    <>
      <section className="bg-bread">
        <div className="container mx-auto px-4">
          <div className="h-screen w-screen flex">
            {/* Left Div */}
            <div className="font-sans bg-gray-300 w-1/2 h-full flex justify-center items-start flex-col p-4 space-y-6 mb-6">
              <h1 className="text-6xl font-bold pb-3">
                Reinventing Your Sandwich
              </h1>
              <h2 className="text-2xl text-gray-600">
                Making a sandwich has never been more fun.
              </h2>
              <button
                style={{ color: "white" }}
                className="px-8 text-lg w-1/2 py-2 bg-darkJelly rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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
      <section className="bg-bread mt-6">
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
                fill-opacity="1"
                d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,128C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
