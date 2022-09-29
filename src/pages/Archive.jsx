import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NAVIGATION } from "../actions/types";

const Archive = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: NAVIGATION,
      payload: {
        name: "Archive",
      },
    });
  }, []);

  return <div className="home">Archive</div>;
};

export default Archive;
