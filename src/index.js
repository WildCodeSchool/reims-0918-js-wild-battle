import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import BattleProvider from "./battle_context/BattleProvider";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BattleProvider>
    <App />
  </BattleProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
