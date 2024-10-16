import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CarouselItems = () => {
  const ricette = useSelector((state) => state.ricette.ricette.content);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleCarouselClick = (ricetta) => {
    {
      isAuthenticated ? navigate(`/ricetta/${ricetta.id}`) : alert("Devi registrarti per vedere le ricette 🤪");
    }
  };

  return (
    <div className="carousel">
      {ricette && ricette.length > 0 ? (
        ricette.map((ricetta) => (
          <div className="item" key={ricetta.id}>
            <Image src={ricetta.immaginePiatto} alt={ricetta.titolo} onClick={() => handleCarouselClick(ricetta)} />
          </div>
        ))
      ) : (
        <p>No ricette available</p>
      )}
    </div>
  );
};

export default CarouselItems;
