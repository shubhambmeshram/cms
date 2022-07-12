// import logo from "./logo.svg";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Navbar from "./component/Navbar";
// import {BrowserRouter} from 'react-router-dom'
import Header from "./component/Header";
import Tiles from "./component/Tiles";

function App() {
  return (
    <div className="App">
      <Header/>
      <Tiles/>
    </div>
  );

}

export default App;
