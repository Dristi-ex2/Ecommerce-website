import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

type StarProps = {
  stars: number;
  reviews: number;
};

function Star({ stars, reviews }: StarProps) {
  const ratingArray = Array.from({ length: 5 }, (_, index) => {

    debugger;
    let number = index + 1;
    let halfNumber = index + 0.5;

    return (
      <span key={index}>
        {stars >= number ? (
          <FaStar color="orange" />
        ) : stars >= halfNumber ? (
          <FaStarHalfAlt color="orange" />
        ) : (
          <AiOutlineStar color="orange" />
        )}
      </span>
    );
  });

  return (
    <div className="icon-style">
      <div className="starstyling">{ratingArray}</div>
      <p>{reviews} customer reviews</p>
    </div>
  );
}

export default Star;
