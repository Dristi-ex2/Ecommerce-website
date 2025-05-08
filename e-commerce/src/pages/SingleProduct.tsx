import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "../context/productcontext";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import FormatPrice from "../Helpers/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import "../Styling/singleproduct.css";
import Star from '../components/Star';
import AddToCart from "../components/AddToCart";


const API = "https://api.pujakaitem.com/api/products";
function SingleProduct() {

  
  const { getSingleProduct, isSingleLoading, singleProduct }: any =
    useProductContext();
  // console.log(SingleProduct); //get all data

  const { id } = useParams(); //used to extract id

  const {
    id: alias, //it means i have rename or change name of id
    //so that i will not get confuse with above code
    name,
    company,
    price,
    description,
    category,
    stock,
    reviews,
    stars,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`); //get id we write in localhost
  }, []);

  //code for reloading in pagenavigation
  if (isSingleLoading) {
    return <div className="pageloading">.....LOADING......</div>;
  }
  // ......................................................
  return (
    <PageNavigation title={name}>
      <div className="container">
        <div className="grid-two-columns">
          <div className="product-images">
          {image && Array.isArray(image) && (
        <MyImage img={image} />
)}
          </div>

          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews= {reviews}/>
            <p>
              <span>MRP: </span>
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p>
              <span>Deal of the Day:</span> <FormatPrice price={price} />
            </p>
            <p><span>Description:</span> {description}</p>

            <div className="product-data-icons">
              <div className="iconsdiv">
                <div className="delivery">
                  <TbTruckDelivery />
                </div>
                <p>Free Delivery</p>
              </div>

              <div className="iconsdiv">
                <div className="delivery">
                  <TbReplace />
                </div>
                <p>30 days Replacement</p>
              </div>

              <div className="iconsdiv">
                <div className="delivery">
                  <TbTruckDelivery />
                </div>
                <p>Fast Delivery</p>
              </div>

              <div className="iconsdiv">
                <div className="delivery">
                  <MdSecurity />
                </div>
                <p>Year Warranty</p>
              </div>
            </div>

            <div>
              <p><span>Available:</span> {stock ? "In Stock" : "Not Available"}</p>
              <p><span>ID:</span> {alias}</p>
              <p><span>Brand:</span> {company}</p>
            </div>

            <div>
              <hr />
              {stock >0 && <AddToCart product={singleProduct}/>}
            </div>

            
          </div>
        </div>
      </div>
    </PageNavigation>
  );
}

export default SingleProduct;

//NOTE-> getSingleProduct is already defined in the productcontext
//we are just calling it here to use its properties wriiten
//in that file.To call we have to write
// const{getSingleProduct, isSingleLoading, SingleProduct}:any=useProductContext();
//because we want isloading and singleproduct(means all data)
//thats why we are destructuring  it also
