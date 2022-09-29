import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./layout/SideBar";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Group from "./pages/Group";
import Products from "./pages/Products";
import Map from "./pages/Map";
import Gifts from "./pages/Gifts";
import Database from "./pages/Database";
import Users from "./pages/Users";
import Archive from "./pages/Archive";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calendar" element={<Calendar />} />
          <Route exact path="/group" element={<Group />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/map" element={<Map />} />
          <Route exact path="/gifts" element={<Gifts />} />
          <Route exact path="/database" element={<Database />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/archive" element={<Archive />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
