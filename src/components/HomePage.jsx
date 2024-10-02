import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRicette } from "../redux/actions/ricetteActions";
import CarouselItems from "./CarouselItems";
import { Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  const dispatch = useDispatch();
  const ricetteList = useSelector((state) => state.ricette.ricette);

  useEffect(() => {
    dispatch(getRicette());
  }, [dispatch]);

  return (
    <>
      <div className="homePage"></div>
      <div className="striscia mt-4">
        <CarouselItems />
      </div>
      <hr className="border border-5 mt-4" />
      <div className="middleHome mt-4">
        <Container>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
