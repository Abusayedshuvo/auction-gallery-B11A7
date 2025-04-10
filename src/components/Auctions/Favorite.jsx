import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Favorite = ({ favorites }) => {
  console.log(favorites);
  return (
    <>
      <p className="flex gap-4 items-center font-medium text-3xl">
        <FaRegHeart /> Favorite Items
      </p>
      {favorites.map((favorite) => (
        <div key={favorite.id} className="flex items-center gap-4 my-4">
          <div>
            <img
              className="w-20 h-20 object-cover"
              src={favorite.image}
              alt=""
            />
          </div>
          <div>
            <p> {favorite.title} </p>
            <div className="flex gap-5">
              <p>$ {favorite.currentBidPrice}</p>
              <p>Bids: {favorite.bidsCount}</p>
            </div>
          </div>
          <button>
            <RxCross2 />
          </button>
        </div>
      ))}
    </>
  );
};

export default Favorite;
