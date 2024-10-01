import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRicette } from "../redux/actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const ricetteList = useSelector((state) => state.ricette.ricette);

  useEffect(() => {
    dispatch(getRicette());
  }, [dispatch]);

  return (
    <>
      <div className="homePage"></div>
      <div className="striscia">
        <div className="carousel">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
