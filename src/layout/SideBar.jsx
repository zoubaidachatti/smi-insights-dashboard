import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.css";
import { SidebarData } from "./sidebarData";
const SideBar = () => {
  const navigation = useSelector((state) => state.navigate);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const changeNav = (path) => {
    navigate(path);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsActive(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);
  return (
    <div ref={wrapperRef} className={isActive ? "sidebar-active" : "sidebar"}>
      <div className={isActive ? "img-div-active" : "img-div"}>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="item-list-block">
        {SidebarData.map((item, ind) => {
          return (
            <div
              className={
                `${
                  navigation.states.name === item.title ? "item-selected" : ""
                }` + `${isActive ? " menu-item-active" : " menu-item"}`
              }
              key={"menu_item_" + ind}
              onClick={() => {
                if (isActive) {
                  changeNav(item.path);
                } else {
                  setIsActive(true);
                  changeNav(item.path);
                }
              }}
            >
              <img src={item.src} alt={item.title} />
              {isActive && <div className="menu-item-title">{item.title}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
