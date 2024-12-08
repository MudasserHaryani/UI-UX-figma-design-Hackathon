import Image from "next/image";
import shop from "../../../../public/banners/shop.png";
import ShopBar from "@/components/ShopBar";
import ShopProducts from "@/components/ShopProducts";
import ShopBar2 from "@/components/ShopBar2";

const ShopPage = () => {
  return (
    <div className="w-full h-auto bg-white poppins">
      <div>
        <Image
          src={shop}
          alt="shop"
          width={1440}
          height={500}
          className="max-w-full h-[250px] md:h-auto pt-20"
        />
      </div>
      <ShopBar />
      <ShopProducts />
      <div className="flex flex-row justify-center items-center gap-4 my-10">
        <button className="bg-[#FBEBB5] h-[60px] w-[60px] rounded-xl ">
          1
        </button>
        <button className="bg-[#FFF9E5] h-[60px] w-[60px] rounded-xl ">
          2
        </button>
        <button className="bg-[#FFF9E5] h-[60px] w-[60px] rounded-xl ">
          3
        </button>
        <button className="bg-[#FFF9E5] h-[60px] w-[98px] rounded-xl ">
          Next
        </button>
      </div>
      <ShopBar2 />
    </div>
  );
};

export default ShopPage;
