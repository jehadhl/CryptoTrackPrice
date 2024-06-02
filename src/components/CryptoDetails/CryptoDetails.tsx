import React from "react";
import { useCryptoDetails } from "./CryptoDetails.hook";
import { Pagination } from "antd";
import TableHistory from "../Tables/TableHistory";
import Card from "../Card/Card";

const CryptoDetails = ({ selectedCrypto, historicalData, data }: any) => {
  const { currentItems, itemsPerPage, paginate, currentPage } =
    useCryptoDetails(historicalData);

  return (
    <React.Fragment>
      {selectedCrypto && historicalData && (
        <div className="grid grid-cols-12 gap-4 my-8 h-full ">
          <div className="col-span-8 my-4">
            <p className="text-white">
              {selectedCrypto.description.en.substring(0, 300)}
              ....
            </p>
            <h3 className="text-green py-4 font-bold text-base">
              Historical Price and Volume Data (Last 24h)
            </h3>
            {/* Table */}
            <TableHistory
              currentItems={currentItems}
              historicalData={historicalData}
            />
            {/* Pagination */}
            <div className="flex justify-center my-4" id="antdPagination">
              <Pagination
                total={historicalData.prices.length}
                pageSize={itemsPerPage}
                current={currentPage}
                onChange={paginate}
                showSizeChanger={false}
              />
            </div>
          </div>
          <div className="col-span-4">
            <Card data={data} selectedCrypto={selectedCrypto} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CryptoDetails;
