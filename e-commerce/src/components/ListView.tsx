import '../Styling/listvew.css'
import { NavLink } from 'react-router-dom';

function ListView({products}:any){
    return <div>
        <div className="listviewcards">
            {
                products.map((currElem:any)=>{
                    const {id,name,image,price,description} =currElem;

                    return(
                        <div className="grid-two-columns" key={id}>
                            <figure>
                                <img src={image} alt={name} />
                            </figure>

                            <div className='listdata'>
                                <p><span>Name:</span> {name}</p>
                                <p><span>Price:</span> {price}</p>
                                <p><span>Description:</span> {description.slice(0,90)}...</p>

                            <NavLink to= {`/singleproduct/${id}`}>
                                <button>Read More</button>
                                </NavLink>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
}


export default ListView;