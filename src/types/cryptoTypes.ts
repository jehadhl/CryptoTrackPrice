export interface MarketChart {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}
export interface CryptoState {
  loading: boolean;
  error: string | null | undefined;
  selectedCrypto: any | null;
  historicalData: any | null | MarketChart;
}

export interface FetchCryptoDetailsResponse {
  details: any;
  marketChart: MarketChart;
}

export interface CryptoData {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: string;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  initial_price: number;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null;
  symbol: string;
  total_supply: number;
  total_volume: number;
}

export interface CryptosData {
  data: CryptoData[];
  loading: boolean;
  error: null | string;
}

export interface Props {
  data: CryptoData[];
}
