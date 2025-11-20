import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import ChildComponent from "./components/ChildComponent";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <FunctionalComponent />
      <ClassComponent />
    </>
  );
}

export default App;
