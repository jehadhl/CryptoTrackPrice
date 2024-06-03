import TableSketlon from "../shared/TableSketlon";
import { useAppSelector } from "../store/hook";
import useWebSocket from "../hook/useSocket";
import TableCryptos from "../components/Tables/TableCryptos";

const HomePage = () => {
  const { data, loading, error } = useAppSelector(
    (state: any) => state.cryptos
  );

  useWebSocket();

  if(error ) {
    return (<TableSketlon />)
  }

  return (
    <div className="max-w-[1440px] mx-auto  pt-20">
      <h1 className="text-white text-6xl font-bold text-center">
        Market Watch
      </h1>

      {loading ? <TableSketlon /> : <TableCryptos data={data} />}
    </div>
  );
};
export default HomePage;
