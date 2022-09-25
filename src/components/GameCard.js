import { AiOutlineEye } from "react-icons/ai";
import { MdSlideshow } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

export default function GameCard({ Img, Avatar, ColWidth }) {
  return (
    <div className="box">
      <div className="image">
        <img src={Img} alt="img" />
        <span>Live</span>
        <div className="info">
          <div>
            <AiOutlineEye />
            <span>12K</span>
          </div>
          <div>
            <MdSlideshow />
            <span>CS-GO</span>
          </div>
        </div>
      </div>
      <div className="popular-content">
        <div className="left">
          <img src={Avatar} alt="img" />
        </div>
        <div className="right">
          <AiOutlineCheck />
          <span>KenganC</span>
          <h3>Just Talking With Fans</h3>
        </div>
      </div>
    </div>
  );
}
