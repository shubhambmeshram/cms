import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Tiles from "./component/Tiles";
import { Routes, Route } from "react-router-dom";
import OpdDetails from "./component/OpdDetails";
import Header from "./component/Header";
import UserData from "./component/UserData";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Tiles />}></Route>
        <Route path="/opd" element={<OpdDetails />}></Route>
        <Route path="/UserData" element={<UserData/>}></Route>
      </Routes>
    </>
  );
}

export default App;
