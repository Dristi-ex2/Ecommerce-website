import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (currElem: any) => {
  const { id, name, image, price, category } = currElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            {/* <p className="card-data-price">{price}</p> */}
            {/* /* to make price good we will write below instead of above */}
            <p className="card-data-price">{<FormatPrice price={price} />}</p>
            {/*we are using props . Here left price can be any name but right name should be
                same describe in the api */}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
