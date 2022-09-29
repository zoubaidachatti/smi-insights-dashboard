import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NAVIGATION } from "../actions/types";

const Database = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: NAVIGATION,
      payload: {
        name: "Database",
      },
    });
  }, []);
  return <div className="home">Database</div>;
};

export default Database;
