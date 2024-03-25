import { WrapperModal } from "./Modal.styled";

export const Modal = ({ props }) => {
  const { name, rating, reviews, location, price, gallery, description } =
    props;
  return (
    <div>
      <WrapperModal>
        <h2>{name}</h2>
        <p>
          {rating} ({reviews} Reviews)
        </p>
        <p>{location}</p>
        {/* <span>€ {price}</span> */}
        <p>€ {price}</p>

        <img src={gallery[0]} width="300" />
        <img src={gallery[1]} width="300" />
        <img src={gallery[2]} width="300" />
        <p>{description}</p>
        <a href="">Features</a>
        <a href="">Reviews</a>
      </WrapperModal>
    </div>
  );
};
