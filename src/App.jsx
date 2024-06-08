import "./App.css";
import Rate from "./components/Rate";
import { useState } from "react";
import Result from "./components/Result";

function App() {
  const [rate, setRate] = useState();
  const [submit, setSubmit] = useState(false);
  return (
    <>
      {submit ? (
        <Result rate={rate} />
      ) : (
        <Rate setSubmit={setSubmit} rate={rate} setRate={setRate} />
      )}
    </>
  );
}

export default App;
