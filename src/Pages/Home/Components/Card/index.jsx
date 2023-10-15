/* eslint-disable react/prop-types */
import "./Cards.scss";
const Card = (props) => {
  return (
    <div className={`card-wrapper ${props?.className}`}>
      <div className="flag">
        <img src={props?.value?.flag} alt="" />
      </div>
      <div className="details">
        <h5>{props?.value?.name}</h5>
        <p>{props?.value?.region}</p>
      </div>
    </div>
  );
};

export default Card;
