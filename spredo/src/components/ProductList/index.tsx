/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MV55dIIN7rr
 */
import Image from "next/image";
import PeanutButterProduct from "../../../public/PeanutButterNew.png";
import StrawberryJamProduct from "../../../public/StrawberryJamProduct.png";
import AlmondButterProduct from "../../../public/AlmondButter.png";
import CherryJamProduct from "../../../public/CherryJam.png";
import ApricotJamProduct from "../../../public/ApricotJam.png";
import VeryBerryJamProduct from "../../../public/VeryBerry.png";
import PeanutFreeProduct from "../../../public/PeanutFree.png";
import GreenOliveTepanadeProduct from "../../../public/GreenOliveTepanade.png";
import GenovesePestoProduct from "../../../public/GenovesePesto.png";

const ProductListComponent = () => {
  return (
    <>
      <div className="mx-auto max-w-2xl text-center mt-32 mb-24">
        <h2
          className="text-3xl font-bold tracking-tighter sm:text-5xl"
          style={{ color: "#640223" }}
        >
          Our Products
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Through Spredo you will have access to a world of Spreads thanks to
          our partnerships with various manufacturers. Enjoy your Spredo!
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 md:p-6">
        <div className="group overflow-hidden rounded-lg bg-white dark:bg-gray-950">
          <span className="sr-only">Insane Peanut Butter</span>
          <Image
            alt="Spredo Insane Peanut Butter Spread"
            className="object-cover w-full h-100" // This sets the width and height
            src={PeanutButterProduct}
            width={undefined} // Ensuring Next.js Image uses className for layout
            height={undefined}
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg md:text-xl">
              Insane Peanut Butter
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-md">
              Indulge in the creamy and rich flavor of our Spredo peanut butter.
              Will keep you coming for more!
            </p>
          </div>
        </div>

        <div className="group overflow-hidden rounded-lg bg-white dark:bg-gray-950">
          <span className="sr-only">Spredo Yum Strawberry Jam Spread</span>
          <Image
            alt="Spredo Yum Strawberry Jam Spread"
            className="object-cover w-full h-100" // This sets the width and height
            src={StrawberryJamProduct}
            width={undefined} // Ensuring Next.js Image uses className for layout
            height={undefined}
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg md:text-xl">Yum Strawberry</h3>
            <p className="text-md text-gray-500 dark:text-gray-400">
              Strawberry Yum is a celebration of simplicity and joy. Enjoy the
              freshness and sweet tang of our strawberry flavor.
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <span className="sr-only">Spredo Almond Butter Spread</span>
          <Image
            alt="Spredo Almond Butter Spread"
            className="object-cover w-full h-100" // This sets the width and height
            src={AlmondButterProduct}
            width={undefined} // Ensuring Next.js Image uses className for layout
            height={undefined}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Almond Butter</h3>
            <p className="text-md text-gray-500 dark:text-gray-400">
              The exquisite almond butter will satisfy your taste buds.
              Healthier than ever!
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg mt-6">
          <span className="sr-only">Spredo Cherry Berry Jam Spread</span>
          <Image
            alt="Spredo Cherry Berry Jam Spread"
            className="object-cover w-full h-100" // This sets the width and height
            src={CherryJamProduct}
            width={undefined} // Ensuring Next.js Image uses className for layout
            height={undefined}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Cherry Berry</h3>
            <p className="text-md text-gray-500 dark:text-gray-400">
              This classic will bring back the memories of childhood. Enjoy the
              sweet and sour cherry flavor.
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg mt-6">
          <span className="sr-only">Golden Orchard Apricot Jam</span>
          <Image
            alt="Golden Orchard Apricot Jam"
            className="object-cover w-full h-100" // This sets the width and height
            src={ApricotJamProduct}
            width={undefined} // Ensuring Next.js Image uses className for layout
            height={undefined}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">
              Golden Orchard Apricot Jam
            </h3>
            <p className="text-md text-gray-500 dark:text-gray-400">
              Each spread is a harmonious blend of rich flavors and velvety
              textures, capturing the essence of golden summer mornings.
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg mt-6">
          <span className="sr-only">Spredo Very Berry Jam Spread</span>
          <Image
            alt="Spredo Very Berry Jam Spread"
            className="object-cover w-full h-100" // This sets the width and height
            src={VeryBerryJamProduct}
            width={undefined} // Ensuring Next.js Image uses className for layout
            height={undefined}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Very Berry Jam</h3>
            <p className="text-md text-gray-500 dark:text-gray-400">
              A symphony of sweet and tart flavors, crafted from a carefully
              selected blend of ripe, juicy berries.
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg mt-6">
          <span className="sr-only">Spredo No Nut Butter Spread</span>
          <Image
            alt="Spredo No Nut Butter Spread"
            className="object-cover w-full h-100" // This sets the width and height
            src={PeanutFreeProduct}
            width={undefined} // Ensuring Next.js Image uses className for layout
            height={undefined}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">No Nut Butter</h3>
            <p className="text-md text-gray-500 dark:text-gray-400">
              Made from high-quality soybeans, this buttery delight captures the
              essence of traditional nut butter without any peanuts.
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg mt-6">
          <span className="sr-only">Spredo Green Olive Tepanade Spread</span>
          <Image
            alt="Spredo Green Olive Tepanade Spread"
            className="object-cover w-full h-100" // This sets the width and height
            src={GreenOliveTepanadeProduct}
            width={undefined} // Ensuring Next.js Image uses className for layout
            height={undefined}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">
              Green Olive Tepanade
            </h3>
            <p className="text-md text-gray-500 dark:text-gray-400">
              Rich, savory flavors of finely chopped green olives with the
              subtle tang of lemon and the aromatic warmth of garlic.
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg mt-6">
          <span className="sr-only">Spredo Genovese Pesto Spread</span>
          <Image
            alt="Spredo Genovese Pesto Spread"
            className="object-cover w-full h-100" // This sets the width and height
            src={GenovesePestoProduct}
            width={undefined} // Ensuring Next.js Image uses className for layout
            height={undefined}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">Genovese Pesto</h3>
            <p className="text-md text-gray-500 dark:text-gray-400">
              This is a classic Italian delight, capturing the essence of fresh
              Genovese basil, rich olive oil, and aromatic garlic.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListComponent;
