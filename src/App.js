import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./layout/SideBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
