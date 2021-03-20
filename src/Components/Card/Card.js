import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img
        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
        alt=""
      />
      <div className="card__info">
        <h2>Lorem</h2>
        <h4>lorem ipsum wrfwsrfwrfwrfw</h4>
        <h3>Rp 345.000</h3>
      </div>
    </div>
  );
}

export default Card;
