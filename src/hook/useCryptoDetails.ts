import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCryptoDetails = (id: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState({});
  const [historicalData, setHistoricalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [detailsResponse, marketChartResponse] = await Promise.all([
          axios.get(`https://api.coingecko.com/api/v3/coins/${id}`),
          axios.get(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
            {
              params: {
                vs_currency: "usd",
                days: 1,
              },
            }
          ),
        ]);
        setSelectedCrypto(detailsResponse.data);
        setHistoricalData(marketChartResponse.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch crypto details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return { loading, error, selectedCrypto, historicalData };
};

export default useFetchCryptoDetails;
