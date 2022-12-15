import "./App.css";
import React, { useState } from "react";

import Input from "./Components/Box";
import Output from "./Components/BoxList";

export default function App() {
  // create state to hold all boxes
  const [boxObj, setBox] = useState([
    // {
    //   color: "blue",
    //   width: 100,
    //   height: 200
    // },
    // {
    //   color: "red",
    //   width: 100,
    //   height: 120
    // },
    // {
    //   color: "green",
    //   width: 100,
    //   height: 100
    // }
  ]);
  console.log("\nApp.js -> boxObj (state) ===>", boxObj);

  const makeNewBox = (newBox) => {
    console.log("\nAPP.JS >>>> newBox", newBox);
    // setBox(newBox)
    const newArr = [...boxObj];
    newArr.push(newBox);
    setBox(newArr);
  };
  return (
    <div className="App">
      <h1>box generator</h1>
      {/* <p>boxes state: {JSON.stringify(boxObj)}</p> */}
      <hr />
      <Input boxObj={boxObj} onNewBox={makeNewBox} />
      <Output boxObj={boxObj} />
    </div>
  );
}
