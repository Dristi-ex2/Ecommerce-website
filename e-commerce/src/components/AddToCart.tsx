import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import IncreDecre from "./IncreDecre";
import { NavLink } from "react-router-dom";

type ProductType = {
  id: string;
  colors: string[];
  stock: number;
};

type AddToCartProps = {
  product: ProductType;
};

function AddToCart({ product }: AddToCartProps) {
  const { id, colors, stock } = product;
  const [colortick, setColortick] = useState(colors[0]);
  const[amount ,setAmount]=useState(1);

  const setDecrease=()=>{
    amount>1?setAmount(amount-1):setAmount(1);
  }

  const setIncrease=()=>{
    amount<stock?setAmount(amount+1):setAmount(stock)
  }

  return (
    <div className="colors">
      <p>Colors:</p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {colors.map((currColor, index) => (
          <button
            key={index}
            onClick={() => setColortick(currColor)}
            style={{
              backgroundColor: currColor,
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              border: colortick === currColor ? "2px solid black" : "1px solid #ccc",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "12px",
            }}
            className={colortick === currColor ? "btnStyle active" : "btnStyle"}
            title={currColor}
          >
            {colortick === currColor && <FaCheck />}
          </button>

         
        ))}
        
      </div>
      {/* add to cart */}
          <IncreDecre 
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
          />

          <NavLink to="/cart">
          <button className="addtocart">Add To Cart</button>
          </NavLink>
    </div>
  );
}

export default AddToCart;
