import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );

ReactDOM.render(
  <div>
    <h1>My Fav Foods</h1>
    <ul>
      <li>bacon</li>
      <li>pizza</li>
      <li>cream</li>
    </ul>
  </div>,
  document.getElementById("root")
);
