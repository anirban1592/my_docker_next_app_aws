import Image from 'next/image';
import Clickme from './components/Clickme';
import Product from './components/Product';

export default function Home() {
  return (
    <div>
      Hello
      <div>
        <Clickme></Clickme>
        <div>
          <Product></Product>
        </div>
      </div>
    </div>
  );
}
