import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import axios, { AxiosResponse } from "axios";
import useFetchCryptoDetails from "./hook/useCryptoDetails";

describe("render app", () => {
  it("render app  successfully", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const linkElement = screen.getByText("Market Watch");
    expect(linkElement).toBeInTheDocument();
  });
});

jest.mock("axios");

describe("useFetchCryptoDetails", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches crypto details successfully", async () => {
    const id = "bitcoin";
    const mockDetailsResponse = {
      data: { name: "Bitcoin" /* other crypto details */ },
    };
    const mockMarketChartResponse = {
      data: {
        /* mock market chart data */
      },
    };

    (axios.get as jest.MockedFunction<typeof axios.get>)
      .mockResolvedValueOnce(mockDetailsResponse as AxiosResponse)
      .mockResolvedValueOnce(mockMarketChartResponse as AxiosResponse);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchCryptoDetails(id)
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.selectedCrypto).toEqual({});
    expect(result.current.historicalData).toBe(null);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.selectedCrypto).toEqual(mockDetailsResponse.data);
    expect(result.current.historicalData).toEqual(mockMarketChartResponse.data);
  });

  it("handles error when fetching crypto details", async () => {
    const id = "bitcoin";
    const errorMessage = "Failed to fetch crypto details";

    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(
      new Error(errorMessage)
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchCryptoDetails(id)
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.selectedCrypto).toEqual({});
    expect(result.current.historicalData).toBe(null);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(errorMessage);
    expect(result.current.selectedCrypto).toEqual({});
    expect(result.current.historicalData).toBe(null);
  });
});
