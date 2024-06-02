import React from "react";
import CryptoList from "../CryptoList/CryptoList";
import { Props } from "../../types/cryptoTypes";

const TableCryptos = ({ data }: Props) => {
  return (
    <table className="my-8 w-full rounded-lg h-full">
      <thead className="text-[14px]  capitalize">
        <tr>
          <th
            scope="col"
            className="py-6 px-4 text-white text-sm text-center font-medium  capitalize"
          >
            Rank
          </th>
          <th
            scope="col"
            className="py-6 px-4 text-white text-sm text-center font-medium  capitalize"
          >
            Name
          </th>

          <th
            scope="col"
            className="py-6 px-4 text-white text-sm text-center font-medium  capitalize"
          >
            Price
          </th>
          <th
            scope="col"
            className="py-6 px-4 text-white text-sm text-center font-medium  capitalize"
          >
            Changes
          </th>
          <th
            scope="col"
            className="py-6 px-4 text-white text-sm text-center font-medium  capitalize"
          >
            Volume 24h
          </th>
          <th
            scope="col"
            className="py-6 px-4 text-white text-sm text-center font-medium  capitalize"
          >
            Market Cap
          </th>
          <th
            scope="col"
            className="py-6 px-4 text-white text-sm text-center font-medium  capitalize"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: number) => {
          return (
            <tr key={index} className="h-[40px] row-spacing">
              <CryptoList items={item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableCryptos;
