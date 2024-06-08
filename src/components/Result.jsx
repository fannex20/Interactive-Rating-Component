import React from "react";
import "./result.css";
import illustrationImg from "/images/illustration-thank-you.svg";

export default function Result({ rate }) {
  return (
    <div className="resultContainer">
      <img src={illustrationImg} alt="illustration Img" />
      <div className="selectedContainer">
        <span>You selected {rate} out of 5</span>
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
