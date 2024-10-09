import { useEffect } from "react";
import { getProfile } from "../redux/actions/utentiActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CarouselItems from "./CarouselItems";
import { Col, Container, Row } from "react-bootstrap";

const UtentiPage = () => {
  const utente = useSelector((state) => state.utente);
  const params = useParams();
  const dispatch = useDispatch();
  console.log(params);

  useEffect(() => {
    if (params.id) {
      dispatch(getProfile(params.id));
    }
  }, [dispatch, params.id]);

  console.log(utente);

  return (
    <>
      <div className="utentiPage"></div>
      <div className="striscia ">
        <CarouselItems />
      </div>
      <hr className="border border-5 mt-4" />
      <div className="middleHome text-center f-lato-thin">
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

export default UtentiPage;
