import { useState } from "react";
// import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import { SidebarData } from "./sidebarData";
const SideBar = () => {
  const [selected, setSelected] = useState("Home");
  return (
    <div className="sidebar">
      <div className="img-div">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="item-list-block">
        {SidebarData.map((item, ind) => {
          return (
            <div
              className={
                selected === item.title
                  ? "menu-item item-selected"
                  : "menu-item"
              }
              key={"menu_item_" + ind}
            >
              <img src={item.src} alt={item.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
