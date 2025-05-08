import './home.css';
import HomeImage from '../assets/images/shopping-img.jpg';
import FeatureProducts from '../components/ProductFeatures';
import Feature from '../components/Features';



function Home(){

    return(
        <div>
         <div className='grid'>
            <div className="card1">
                <h1>Welcome to the <span>Trendswave</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et rem nihil laborum voluptas totam quo sunt laudantium similique minima vel facilis laboriosam iusto, ducimus alias repudiandae magni commodi aut quis?</p>
            </div>

            <div className="card2">
                <img src={HomeImage} alt='homeimg' />
            </div>
         </div>

         <FeatureProducts />
         <Feature />
        </div>
    )
}

export default Home;