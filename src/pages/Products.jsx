import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NAVIGATION } from "../actions/types";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: NAVIGATION,
      payload: {
        name: "Products",
      },
    });
  }, []);
  return <div className="home">Products</div>;
};

export default Products;
