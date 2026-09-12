import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3">
      <button
        className="bg-amber-600 text-white px-8 py-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        {count} items
      </button>
    </div>
  );
};

export default Counter;
