import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url(../Banner-min.jpg)] bg-cover bg-right px-4 xl:px-36 py-20 xl:py-52 text-white">
      <div className="max-w-[640px]">
        <p className="text-5xl font-semibold  mb-5">
          Bid on Unique Items from Around the World
        </p>
        <p className="mb-10">
          Discover rare collectibles, luxury goods, and vintage treasures in our
          curated auctions
        </p>
        <button className="bg-white text-black px-10 py-4 rounded-full font-medium">
          Explore Auctions
        </button>
      </div>
    </div>
  );
};

export default Banner;
