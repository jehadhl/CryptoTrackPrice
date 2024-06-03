import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CryptosData } from "../../types/cryptoTypes";

export const fetchCryptos = createAsyncThunk(
  "cryptos/fetchCryptos",
  async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 5,
          page: 1,
          sparkline: false,
        },
      }
    );
    return response.data;
  }
);

const initialState: CryptosData = {
  data: [],
  loading: false,
  error: null,
};

const cryptosSlice = createSlice({
  name: "cryptos",
  initialState,
  reducers: {
    updatePrices: (state : any, action : any) => {
      const newData = state.data.map((crypto: any) => {
        const newPrice =
          action.payload[crypto.id.replace("binancecoin", "binance-coin")] ||
          crypto.current_price;

        // console.log(
        //   newPrice,
        //   "helahekkasidiaosdsdhaskj",
        //   action.payload[crypto.id.replace("binancecoin", "binance-coin")]
        // );
        const updatedCrypto = {
          ...crypto,
          current_price: newPrice,
        };

        // Recalculate the price_change_percentage_24h
        if (crypto.current_price && crypto.price_change_percentage_24h) {
          const previousPrice =
            crypto.current_price /
            (1 + crypto.price_change_percentage_24h / 100);
          updatedCrypto.price_change_percentage_24h =
            ((newPrice - previousPrice) / previousPrice) * 100;
        }

        return updatedCrypto;
      });

      state.data = newData;
    },
  },
  extraReducers: (builder : any) => {
    builder
      .addCase(fetchCryptos.pending, (state: any) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCryptos.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCryptos.rejected, (state: any) => {
        state.loading = false;
      });
  },
});

export const { updatePrices } = cryptosSlice.actions;

export const selectCryptoById = (state: any, cryptoId: any) =>
  state.cryptos.data.find((crypto: any) => crypto.id === cryptoId);

export default cryptosSlice.reducer;
