import React, { useState } from "react";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    return setIsLiked(!isLiked);
  };

  const likedStyle = {
    color: "red",
  };

  return (
    <p style={{ cursor: "pointer" }} onClick={toggleLike}>
      {isLiked ? (
        <i className="fa-solid fa-heart" style={likedStyle}></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}
    </p>
  );
};

export default LikeButton;
