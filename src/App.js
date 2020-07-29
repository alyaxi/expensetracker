import React from "react";
import "./App.css";
// import Expensetracker from './expenseTracker'
import Child from "./Child";
import { TranscationProvider } from "./transContext";

function App() {
  return (
    <TranscationProvider>
      <Child />
    </TranscationProvider>
  )
}
// console.log(App);
export default App;
