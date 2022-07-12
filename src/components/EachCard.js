import React from "react";
import "./EachCard.css";

export default function EachCard({ cardProp, choiceProp, flippedProp, disabledProp}) {
  const handleClick = () => {
    if(!disabledProp) choiceProp(cardProp);
  };
  return (
    <div>
      <div className="card" key={cardProp.id}>
        <div className={flippedProp ? "flipped" : ""}>
          <img src={cardProp.src} alt="card front" className="front" />
          <img
            src="/img/cover.png"
            alt="card cover"
            className="back"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
