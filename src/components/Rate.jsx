import React, { useState } from "react";
import "./rate.css";
import StarImg from "/images/icon-star.svg";

export default function Rate({ setSubmit, rate, setRate }) {
  const buttons = [1, 2, 3, 4, 5];

  return (
    <div className="rateContainer">
      <div className="imageContainer">
        <img src={StarImg} alt="Star Img" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttonsContainer">
        {buttons.map((item) => (
          <button
            key={item}
            onClick={() => setRate(item)}
            style={{ backgroundColor: rate === item ? "orange" : "" }}
          >
            {item}
          </button>
        ))}
      </div>
      <button onClick={() => rate && setSubmit(true)} className="submitBtn">
        SUBMIT
      </button>
    </div>
  );
}
