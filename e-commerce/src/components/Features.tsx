import '../Styling/feature.css';
import FastDelivery from '../assets/images/services1.svg';
import SecurePayment from '../assets/images/services1.svg';
import MoneyBack from '../assets/images/services1.svg';
import  OnlineSupport from '../assets/images/services1.svg';



function Feature(){
    return(
        <div>
             <section id="blog">
         <div className="blog-grid">
            <div className="blog1">
                <img src={FastDelivery} alt="blog1-img" />
                <p className="blog-p">Fast & Free Delivery</p>
                <p className="blog-p2">Free delivery on all orders</p>
            </div>
    
            <div className="blog1">
                <img src={SecurePayment } alt="blog2-img" />
                <p className="blog-p">Secure Payment</p>
                <p className="blog-p2">Free delivery on all orders</p>
            </div>
    
            <div className="blog1">
                <img src={MoneyBack} alt="blog3-img" />
                <p className="blog-p">Money Back Guarantee</p>
                <p className="blog-p2">Free delivery on all orders</p>
            </div>
    
            <div className="blog1">
                <img src={OnlineSupport} alt="blog4-img" />
                <p  className="blog-p">Online Support</p>
                <p className="blog-p2">Free delivery on all orders</p>
            </div>
         </div>
        
    </section>
        </div>
    )
}

export default Feature;


