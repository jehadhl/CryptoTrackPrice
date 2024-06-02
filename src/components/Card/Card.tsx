import React from "react";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ selectedCrypto, data }: any) => {
  return (
    <div className="border border-green rounded-xl p-4">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            src={selectedCrypto?.image?.small}
            className="w-[50px]"
            alt="image_"
          />
          <h1 className="text-2xl text-white font-bold">
            {selectedCrypto.name} (
            <span>{selectedCrypto.symbol.toUpperCase()} )</span>
            <span>#{selectedCrypto.market_cap_rank}</span>
          </h1>
        </div>
        <Link
          to={selectedCrypto.links.homepage[0]}
          target="_blank"
          className="bg-green p-2 rounded-xl"
        >
          <FaLink className="text-blueDark text-2xl" />
        </Link>
      </div>
      <div className="my-2 bg-green w-full h-[1px]" />
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-bold">Price</h1>
          <p className="text-white font-bold">
            {data?.current_price} ${" "}
            <span
              className={`${
                data?.price_change_percentage_24h > 0
                  ? "text-green"
                  : data?.price_change_percentage_24h < 0
                  ? "text-red-500"
                  : "text-white"
              }`}
            >
              {data?.price_change_percentage_24h.toFixed(2)}%{" "}
            </span>
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-white font-bold">Total Supply</h1>
          <p className="text-white font-bold">
            {selectedCrypto.market_data.total_supply}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-white font-bold">High 24h</h1>
          <p className="text-white font-bold">
            {selectedCrypto.market_data.high_24h.usd}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-white font-bold">Low 24h</h1>
          <p className="text-white font-bold">
            {selectedCrypto.market_data.low_24h.usd}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
