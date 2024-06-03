import React from "react";
import CryptoDetails from "../components/CryptoDetails/CryptoDetails";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { selectCryptoById } from "../store/features/cryptosSlice";
import { useSelector } from "react-redux";
import useWebSocket from "../hook/useSocket";
import useFetchCryptoDetails from "../hook/useCryptoDetails";
import Loading from "../components/Loading/Loading";

const DetailsPage = () => {
  const id: any = useParams(); 
   
  const { historicalData, selectedCrypto, loading, error }: any = useFetchCryptoDetails(id.symbol);
  const data = useSelector((state) => selectCryptoById(state, id.symbol));


  console.log(data)


  useWebSocket();

  if (loading) return <Loading />;
  if (error) return <div className="text-white">Error: {error}</div>;

  return (
    <React.Fragment>
      <div className="max-w-[1440px] mx-auto  py-20 w-[90vw]  h-screen ">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-4 items-center">
              <Link to={"/"}>
                <FaArrowLeftLong className="text-green border border-green p-4 rounded-full w-12 h-12" />{" "}
              </Link>
              <h1 className="text-3xl text-white font-bold">
                {selectedCrypto.name} ({selectedCrypto.symbol?.toUpperCase()}){" "}
                Historical Data
              </h1>
            </div>
            <p className="text-white mt-2 font-semibold">
              {selectedCrypto.name} Historical Price Information
            </p>
          </div>

          <Link
            to={selectedCrypto?.links?.whitepaper}
            target="_blank"
            className="bg-green p-4 font-bold rounded-xl h-[60px] flex justify-center items-center"
          >
            White Pepar
          </Link>
        </div>
        <CryptoDetails
          selectedCrypto={selectedCrypto}
          historicalData={historicalData}
          data={data}
        />
      </div>
    </React.Fragment>
  );
};

export default DetailsPage;
