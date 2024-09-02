import { Link } from "react-router-dom";
import "./SwiperCard.css";

const SwiperCard = (props) => {
  return (
    <div className="swiper-card">
      <h4>{props.title}</h4>
      <Link to={`https://github.com/iliyan-ivanov/${props.name}`} className="swiper-card-photo">
        <img src={props.img} />
      </Link>
    </div>
  );
};

export default SwiperCard;