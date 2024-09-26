"use client";

import { useState } from "react";

export default function Counter() {
const [count, setCount] = useState(1);


  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <p className=" mr-3 text-center">{count}</p>
      <div className="flex justify-center ">
        <button 
          onClick={decrement}
          disabled={count === 1}
          className="
          hover:bg-slate-400
          active: bg-pink-300
          rounded w-8 
          focus:outline-none focus-right-2
          disabled:bg-red-500"> - </button>
        </div>
        <button 
          onClick={increment}
          disabled={count === 20}
          className="
          hover:bg-slate-400
          active: bg-pink-300
          rounded w-8
          focus:outline-none focus-right-2
          disabled:bg-red-500"> + </button>
    </div>
  );
}