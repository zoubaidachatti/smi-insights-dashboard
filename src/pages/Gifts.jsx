import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NAVIGATION } from "../actions/types";

const Gifts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: NAVIGATION,
      payload: {
        name: "Gifts",
      },
    });
  }, []);
  return <div className="home">Gifts</div>;
};

export default Gifts;
