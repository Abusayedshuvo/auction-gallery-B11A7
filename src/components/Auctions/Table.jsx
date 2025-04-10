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
        <tbody className="text-[#0E2954] border-t">
          {bidItems?.map((bid) => (
            <tr key={bid.id}>
              <td>
                <div className="flex gap-3">
                  <img
                    className="w-20 h-20 object-cover"
                    src={bid.image}
                    alt=""
                  />
                  <p> {bid.title}</p>
                </div>
              </td>
              <td> {bid.currentBidPrice} </td>
              <td> {bid.timeLeft} </td>
              <td className="text-center">
                <button
                  className="cursor-pointer"
                  onClick={() => handleBid(bid)}
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
