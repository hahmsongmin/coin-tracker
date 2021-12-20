import { useParams } from 'react-router-dom';

interface RouteParams {
  coinId: string;
}

function Coin() {
  // const { coinId } = useParams<{ coinId: string }>();
  const { coinId }: RouteParams = useParams();
  console.log(coinId);
  return <h1>Coin : {coinId}</h1>;
}

export default Coin;
