import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Tiles from "./component/Tiles";
import { Routes, Route } from "react-router-dom";
import OpdDetails from "./component/OpdDetails";
import Header from "./component/Header";
import Spinner from "./component/Spinner";
const LazyAbout = React.lazy(() => import("./component/About"));
// import UserData from "./component/UserData";
const LazyLoading = React.lazy(() => import("./component/UserData"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/cms" element={<Tiles />}></Route>
        <Route path="/opd" element={<OpdDetails />}></Route>
        <Route
          path="/UserData"
          element={
            <React.Suspense fallback={<Spinner/>}>
              <LazyLoading />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/About"
          element={
            <React.Suspense fallback={<Spinner/>}>
              <LazyAbout />
            </React.Suspense>
          }
        ></Route>
        {/* <Route path="/Spinner" element={<Spinner/>}></Route> */}
      </Routes>
    </>
  );
}

export default App;
