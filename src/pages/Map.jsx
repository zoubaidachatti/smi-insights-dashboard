import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NAVIGATION } from "../actions/types";

const Map = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: NAVIGATION,
      payload: {
        name: "Map",
      },
    });
  }, []);
  return <div className="home">Map</div>;
};

export default Map;
