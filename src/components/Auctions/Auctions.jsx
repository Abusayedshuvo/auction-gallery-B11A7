import React, { Suspense, useState } from "react";
import Table from "./Table";
import Favorite from "./Favorite";
const loadData = fetch("bidItems.json").then((res) => res.json());
import { ToastContainer, toast } from "react-toastify";

const Auctions = () => {
  const [favorites, setFavorites] = useState([]);

  const handleBid = (bid, event) => {
    const newFavorite = [...favorites, bid];
    setFavorites(newFavorite);
    toast("Favorite Item is added");
    const btn = event.target.parentNode;
    btn.setAttribute("disabled", "");
    const findBid = favorites.find((item) => item.id == bid.id);
    console.log(findBid);
  };

  const handleFavorite = (id) => {
    const filterFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(filterFavorites);
    console.log(id);
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="bg-[#f4f4f4] xl:px-36 py-32">
        <p className="text-3xl font-medium mb-2">Active Auctions</p>
        <p>Discover and bid on extraordinary items</p>
        <div className="grid grid-cols-12 gap-5 mt-5">
          <div className="col-span-9">
            <div className="bg-white p-5 rounded-lg">
              <Suspense fallback={<h1>Loading ............</h1>}>
                <Table loadData={loadData} handleBid={handleBid}></Table>
              </Suspense>
            </div>
          </div>
          <div className="col-span-3">
            <div className="bg-white p-5 rounded-lg">
              <Favorite
                favorites={favorites}
                handleFavorite={handleFavorite}
              ></Favorite>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auctions;
