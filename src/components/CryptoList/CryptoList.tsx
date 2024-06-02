import { Link } from "react-router-dom";

const CryptoList = ({ items }: any) => {
  return (
    <>
      <td
        className={
          "py-4 px-2 text-white text-sm text-center w-[200px] font-bold"
        }
      >
        {Number(items.market_cap_rank)}
      </td>
      <td className="py-4 px-2 text-white text-sm text-center gap-4 font-bold flex justify-center items-center">
        <img src={items.image} className="w-10 h-10" />
        <div className="flex items-center w-[120px] gap-1">
          {items.symbol.toUpperCase()}{" "}
          <span className="text-white text-xs">({items.name})</span>
        </div>
      </td>
      <td
        className={
          "py-4 px-2 text-white text-sm text-center w-[200px] font-bold"
        }
      >
        {Number(items.current_price).toFixed(4)} $
      </td>

      <td
        className={`py-4 px-2 text-sm text-center font-bold ${
          items.price_change_percentage_24h > 0
            ? "text-green"
            : items.price_change_percentage_24h < 0
            ? "text-red-500"
            : "text-white"
        }`}
      >
        {items.price_change_percentage_24h.toFixed(2)} %
      </td>
      <td className="py-4 px-2 text-white text-sm text-center  font-bold">
        {Number(items.total_volume)}
      </td>
      <td className="py-4 px-2 text-white text-sm text-center  font-bold">
        {Number(items.market_cap)} $
      </td>
      <td className="py-4 px-2 text-white text-sm text-center  font-bold">
        <Link
          to={`/details/${items.id}`}
          className="border-green border py-2 rounded-full px-4 text-sm font-bold text-green"
        >
          Details
        </Link>
      </td>
    </>
  );
};

export default CryptoList;
