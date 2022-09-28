import "../styles/home.css";
import Profile from "../components/Home/Profile";
import Period from "../components/Home/Period";
import Performance from "../components/Home/Performance";
import Insights from "../components/Home/Insights";

const Home = () => {
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
    </div>
  );
};

export default Home;
