import { useEffect } from "react";
import { getProfile } from "../redux/actions/utentiActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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

  return <div className="utentiPage"></div>;
};

export default UtentiPage;
