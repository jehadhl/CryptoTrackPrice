import React from "react";

const TableHistory = ({ currentItems, historicalData }: any) => {
  return (
    <table className="w-full rounded-lg ">
      <thead className="text-[14px]  capitalize">
        <tr>
          <th
            scope="col"
            className=" text-white text-sm text-left font-medium  capitalize"
          >
            Date
          </th>
          <th
            scope="col"
            className="  text-white text-sm text-left font-medium  capitalize"
          >
            Price (USD)
          </th>
          <th
            scope="col"
            className=" text-white text-sm text-left font-medium  capitalize"
          >
            Volume
          </th>
          <th
            scope="col"
            className="  text-white text-sm text-left font-medium  capitalize"
          >
            Market Cap
          </th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((data: any, index: any) => (
          <tr key={index}>
            <td className=" py-2  text-white text-sm   font-bold">
              {new Date(data[0]).toLocaleString()}
            </td>
            <td className=" py-2  text-white text-sm   font-bold">
              ${data[1].toFixed(2)}
            </td>
            <td className=" py-2  text-white text-sm   font-bold">
              {historicalData.total_volumes[index][1].toFixed(2)}
            </td>
            <td className=" py-2  text-white text-sm   font-bold">
              {historicalData.market_caps[index][1].toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableHistory;
