import { useState } from "react";

export const useCryptoDetails = (historicalData: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Calculate indexes for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    historicalData &&
    historicalData.prices.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return {
    currentItems,
    paginate,
    itemsPerPage,
    currentPage,
  };
};
