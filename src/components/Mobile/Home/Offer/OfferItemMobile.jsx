import Image from "next/image";
// Import Images
import offer from "#/images/offer-2.png";

const OfferItemMobile = () => {
  return (
    <div className="bg-white rounded-lg pt-4 pb-10 px-4 mt-3">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <h5 className="text-primary font-normal tracking-[0.5px] text-base">
            Write the offer here
          </h5>
          <p className="my-1 text-sm">Any description (lorem ipsum)</p>
          <button className="text-sm py-2 px-8 bg-primary text-white rounded-sm mt-3 font-medium">
            Get The Offer
          </button>
        </div>
        <div>
          <Image
            className="w-full"
            src={offer}
            alt="offer-img"
            width={100}
            height={80}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default OfferItemMobile;
