import React from "react";
import useCounter from "../../hooks";
import "../../styles/styles.css";

const Counter = () => {
  const { count, increase, decrement, clean } = useCounter();

  return (
    <div className="container">
      <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
        {count}
      </h1>
      <button onClick={increase}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={clean}>C</button>
    </div>
  );
};

export default Counter;
