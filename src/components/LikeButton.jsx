import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (liked) {
      setLiked(false);
      setCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setCount((prev) => prev + 1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${liked ? "bg-red-500 text-white" : "bg-slate-100 text-slate-600"}`}
    >
      {liked ? "♥ Liked" : "♡ Like"} · {count}
    </button>
  );
}

export default LikeButton;
