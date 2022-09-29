import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NAVIGATION } from "../actions/types";
import "../styles/home.css";
import Profile from "../components/Home/Profile";
import Period from "../components/Home/Period";
import Performance from "../components/Home/Performance";
import Insights from "../components/Home/Insights";
import Analysis from "../components/Home/Analysis";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: NAVIGATION,
      payload: {
        name: "Home",
      },
    });
  }, []);
  return (
    <div className="home">
      <div>
        <Profile />
      </div>
      <div>
        <Period />
      </div>
      <div>
        <Performance />
      </div>
      <div>
        <Insights />
      </div>
      <div>
        <Analysis />
      </div>
    </div>
  );
};

export default Home;
