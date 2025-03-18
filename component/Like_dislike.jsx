import React, { useState } from "react";

const Like_dislike = () => {
  const [like, setLike] = useState(true);
  return (
    <div>
      <img
        onClick={() => setLike(!like)}
        style={{ width: 50, height: 50 }}
        src={like ? "../data/images/like.png" : "../data/images/dislike.png"}
        alt=""
      />
    </div>
  );
};

export default Like_dislike;
