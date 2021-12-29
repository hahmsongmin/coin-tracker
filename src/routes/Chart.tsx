import { useQuery } from 'react-query';
import { fetchCoinHistory } from './api';

interface ChartProps {
  coinId: string;
}

interface IohlcvData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IohlcvData>(['ohlcv', coinId], () => fetchCoinHistory(coinId));
  return <h1>Chart</h1>;
}

export default Chart;
