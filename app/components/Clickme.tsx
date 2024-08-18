'use client';

import { useState } from 'react';

export default function Clickme() {
  const [num, setNum] = useState(0);

  const clickHandler = async () => {
    setNum((prev) => prev + 1);
  };

  return (
    <div>
      Home {num}
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}
