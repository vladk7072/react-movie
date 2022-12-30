import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { PreloaderPage } from "./pages/PreloaderPage/PreloaderPage";

const AppMain = React.lazy(() => import("./pages/MainPageModel") as any);


function App() {

  return (
    <div className="app">
        <BrowserRouter>
          <React.Suspense fallback={<PreloaderPage />}>
            <AppMain />
          </React.Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
