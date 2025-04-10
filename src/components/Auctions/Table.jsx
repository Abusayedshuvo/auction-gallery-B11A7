import React, { use } from "react";
import { FaRegHeart } from "react-icons/fa";

const Table = ({ loadData, handleBid }) => {
  const bidItems = use(loadData);
  return (
    <>
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left">
            <th>Items</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th className="text-center">Bid Now</th>
          </tr>
        </thead>
        <tbody className="text-[#0E2954]">
          {bidItems?.map((bid) => (
            <tr key={bid.id}>
              <td>
                <div className="xl:flex gap-3">
                  <img
                    className="w-14 xl:w-20 h-14 xl:h-20 object-cover"
                    src={bid.image}
                    alt=""
                  />
                  <p> {bid.title}</p>
                </div>
              </td>
              <td> ${bid.currentBidPrice} </td>
              <td> {bid.timeLeft} </td>
              <td className="text-center">
                <button
                  className="cursor-pointer disabled:cursor-no-drop"
                  onClick={() => handleBid(bid, event)}
                >
                  <FaRegHeart />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
