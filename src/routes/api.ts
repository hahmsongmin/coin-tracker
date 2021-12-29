const BASE_URL = 'https://api.coinpaprika.com/v1';

export async function fetchCoins() {
  const json = await (await fetch(`${BASE_URL}/coins`)).json();
  return json.slice(0, 100);
}

export async function fetchCoinInfo(coinId: string) {
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
}

export async function fetchCoinTickers(coinId: string) {
  return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
}

export function fetchCoinHistory(coinId: string) {
  const endData = Math.floor(Date.now() / 1000);
  const startDate = endData - 60 * 60 * 24 * 7 * 2; // 2 weeks
  return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endData}`) //
    .then((res) => res.json());
}
