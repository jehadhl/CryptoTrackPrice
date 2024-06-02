// src/hooks/useWebSocket.js
import { useEffect } from "react";
import { useAppDispatch } from "../store/hook";
import { fetchCryptos, updatePrices } from "../store/features/cryptosSlice";
import { useLocation } from "react-router-dom";

const useWebSocket = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCryptos());
    const ws = new WebSocket(
      "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,tether,solana,binance-coin"
    );

    const interval = setInterval(() => {
      ws.send("ping"); // Send a ping to keep the connection alive fo 30 second
    }, 30000);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      dispatch(updatePrices(data));
    };

    return () => {
      clearInterval(interval);
      ws.close();
    };
  }, [dispatch]);
};

export default useWebSocket;
