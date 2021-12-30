import { useQuery } from 'react-query';
import { fetchCoinHistory } from './api';
import ApexChart from 'react-apexcharts';

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
  const { isLoading, data } = useQuery<IohlcvData[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId));
  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: 'Price',
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: 'dark',
            },
            stroke: {
              curve: 'smooth',
              width: 5,
            },
            grid: {
              show: false,
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisBorder: { show: false },
              axisTicks: { show: false },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
