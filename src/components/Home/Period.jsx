import "../../styles/period.css";
import { BsCalendar4 } from "react-icons/bs";
const Period = () => {
  return (
    <div className="period">
      <div className="period-title">Period</div>
      <div className="period-content">
        <div className="period-text">Summary dashboard: Drope facts</div>
        <div className="period-buttons-block">
          <div className="left-buttons">
            <button>Customize a period</button>
            <button>Select a period</button>
          </div>
          <div>
            <button>
              <div className="btn-grp">
                <BsCalendar4 /> Tout
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Period;
