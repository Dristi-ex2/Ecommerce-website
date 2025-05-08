// {} //object destrucyuring
import {useProductContext} from '../context/productcontext';
import Product from './Product';
import '../Styling/productfeature.css';
const FeatureProducts=()=>{
    const {isLoading, featureProducts}=useProductContext()


    //agar data nhi mila toh
    if(isLoading){
        return <div className='loading'>....Loading Please wait....</div>
    }

    return(
                <div className='Features'>
                <h1>Our Feature Services</h1>
        
                <div className="Features-cards">

                    {featureProducts.map((currElem)=>{
                        return <Product key={currElem.id} {...currElem} />;
                    })}

                </div>
                </div>
)}

export default FeatureProducts;

