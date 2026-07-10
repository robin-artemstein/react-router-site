import React, { useState } from 'react';

export default function Pricing() {
    // Initialize state with a default value of 1
    const [count, setCount] = useState<number>(1);

    // Handle increment logic
    const handleIncrement = (): void => {
        setCount((prev) => prev + 1);
    };

    // Handle decrement logic with a lower boundary of 1
    const handleDecrement = (): void => {
        setCount((prev) => (prev > 1 ? prev - 1 : 1));
    };

  return (
    <div className="flex flex-col gap-2">
        <div className="font-bold text-xl text-white">Pricing...</div>
        <div className="font-medium text-lg text-white">It's about time to talk about $$$.</div>
        <div className="font-medium text-lg text-white">When the state is pricing in string.</div>
        <div className="font-medium text-lg text-white">This component will be loaded.</div>
        <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl shadow-md">
        {/* Decrement Button */}
        <button
          onClick={handleDecrement}
          disabled={count <= 1}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-800 font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Decrease value"
        >
          －
        </button>

        {/* Display Block */}
        <div className="w-16 h-12 flex items-center justify-center bg-gray-100 text-xl font-semibold text-gray-900 rounded-lg border border-gray-200">
          {count}
        </div>

        {/* Increment Button */}
        <button
          onClick={handleIncrement}
          className="w-10 h-10 flex items-center justify-center bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold rounded-lg transition-colors"
          aria-label="Increase value"
        >
          ＋
        </button>
      </div>
    </div>
  );
}