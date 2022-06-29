import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const clean = () => setCount(0);

  return {
    count,
    increase,
    decrement,
    clean,
  };
};

export default useCounter;
