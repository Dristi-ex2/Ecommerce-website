
import Product from "./Product";
import '../Styling/gridview.css'

function GridView({products}:any){
    return (
        <div>
            <div className="grid-three-column">
                {products.map((currElem:any)=>{
                    return <Product key={currElem.id}
                     {...currElem} />;
                })}
            </div>
        </div>
    )
}

export default GridView