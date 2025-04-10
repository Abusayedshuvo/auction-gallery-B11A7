import React, { Suspense, useState } from "react";
import Table from "./Table";
import Favorite from "./Favorite";
const loadData = fetch("bidItems.json").then((res) => res.json());
import { ToastContainer, toast } from "react-toastify";

const Auctions = () => {
  const [favorites, setFavorites] = useState([]);
  const [totalBid, setTotalBid] = useState(0);

  const handleBid = (bid, event) => {
    const isAlready = favorites.find((item) => item.id == bid.id);
    if (isAlready) {
      return;
    }
    const newFavorite = [...favorites, bid];
    setFavorites(newFavorite);
    toast("Favorite Item is added");

    const updatedBid = totalBid + bid.currentBidPrice;
    setTotalBid(updatedBid);

    const btn = event.target.parentNode;
    btn.setAttribute("disabled", "");
    btn.classList.add("text-red-500");

    // const findFavorites = favorites.find((item) => item.id == bid.id);
  };

  const handleFavorite = (id) => {
    const filterFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(filterFavorites);
    const findFavorites = favorites.find((item) => item.id == id);

    const updatedBid = totalBid - findFavorites.currentBidPrice;
    setTotalBid(updatedBid);
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="bg-[#f4f4f4] px-4 xl:px-36 py-20 xl:py-32">
        <p className="text-3xl font-medium mb-2">Active Auctions</p>
        <p>Discover and bid on extraordinary items</p>
        <div className="grid grid-cols-12 gap-5 mt-5">
          <div className=" col-span-12 xl:col-span-9">
            <div className="bg-white p-5 rounded-lg">
              <Suspense fallback={<h1>Loading ............</h1>}>
                <Table loadData={loadData} handleBid={handleBid}></Table>
              </Suspense>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-3">
            <div className="bg-white p-5 rounded-lg">
              <Favorite
                favorites={favorites}
                handleFavorite={handleFavorite}
                totalBid={totalBid}
              ></Favorite>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auctions;
