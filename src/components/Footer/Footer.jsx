import React from "react";

const Footer = () => {
  return (
    <div className="text-center bg-white py-10 xl:py-20 text-black">
      <img className="mx-auto" src="logo.png" alt="" />
      <div className="text-xl my-2 space-x-3">
        <a href="#">Bid.</a>
        <a href="#">Win.</a>
        <a href="#">Own.</a>
      </div>
      <div className="mb-5">
        <a href="#"> Home </a>
        <a href="#"> Auctions </a>
        <a href="#"> Categories </a>
        <a href="#"> How to works</a>
      </div>
      <p>© 2025 AuctionHub. All rights reserved.</p>
    </div>
  );
};

export default Footer;
