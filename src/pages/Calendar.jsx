import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NAVIGATION } from "../actions/types";

const Calendar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: NAVIGATION,
      payload: {
        name: "Calendar",
      },
    });
  }, []);
  return <div className="home">Calendar</div>;
};

export default Calendar;
