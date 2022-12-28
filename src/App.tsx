import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { MainPageModel } from "./pages/MainPageModel";

function App() {

  

  return (
    <div className="app">
      <BrowserRouter>
        <MainPageModel />
      </BrowserRouter>
    </div>
  );
}

export default App;
