import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { PreloaderPage } from "./pages/PreloaderPage/PreloaderPage";
import { setupStore } from "./redux/redux";

const AppMain = React.lazy(() => import("./pages/MainPageModel") as any);

const store = setupStore();

function App() {
  
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <React.Suspense fallback={<PreloaderPage />}>
            <AppMain />
          </React.Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
