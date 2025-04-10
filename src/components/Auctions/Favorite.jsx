import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Favorite = ({ favorites, handleFavorite, totalBid }) => {
  return (
    <>
      <p className="flex gap-4 items-center font-medium text-3xl">
        <FaRegHeart /> Favorite Items
      </p>
      {favorites.map((favorite, index) => (
        <div key={index} className="flex my-4 justify-between items-start">
          <div className="flex gap-4">
            <img
              className="w-20 h-20 object-cover"
              src={favorite.image}
              alt=""
            />

            <div>
              <p> {favorite.title} </p>
              <div className="flex gap-5">
                <p>$ {favorite.currentBidPrice}</p>
                <p>Bids: {favorite.bidsCount}</p>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer"
            onClick={() => handleFavorite(favorite.id)}
          >
            <RxCross2 />
          </button>
        </div>
      ))}

      <div className="flex justify-between text-2xl mt-10">
        <p>Total bids Amount</p>
        <p>$ {totalBid} </p>
      </div>
    </>
  );
};

export default Favorite;
