import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRicette } from "../redux/actions";
import CarouselItems from "./CarouselItems";

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
        <CarouselItems />
      </div>
    </>
  );
};

export default HomePage;
