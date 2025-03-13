import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)} className="p-2">
      <i className={`bi ${liked ? "bi-heart-fill text-red-500" : "bi-heart text-gray-400"} text-2xl`}></i>
    </button>
  );
};

export default LikeButton;
