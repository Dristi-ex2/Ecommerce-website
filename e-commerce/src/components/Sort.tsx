import { BsFillGridFill, BsList } from "react-icons/bs";
import '../Styling/sort.css'
import { useFilterContext } from "../context/filterContext";

function Sort(){

    const {grid_view,setGridView,setListView,filter_products ,sorting} =useFilterContext();
    return(
        <div>
            <div className="three-column-grid">
                <div className="first-column-grid">
                    <button className={grid_view ? "active sort-btn" : "sort-btn"} onClick={setGridView}>
                        <BsFillGridFill className="icon"/></button>
                        
                    <button className={!grid_view ? "active sort-btn" : "sort-btn"} onClick={setListView}>
                        <BsList className="icon"/>
                    </button>

                </div>
                <div className="second-column-grid">{`${filter_products.length } Products Available`}</div>
                <div className="third-column-grid">
                    <form action="#">
                        {/* <label htmlFor="sort"></label> */}
                        <select name="sort" id="sort" onChange={(e) => sorting(e.target.value)}>

                            <option value="lowest">Price(lowest)</option>
                            <option value="highest">Price(Highest)</option>
                            <option value="a-z">Price(a-z)</option>
                            <option value="z-a">Price(z-a)</option>

                        </select>
                    </form>
                </div>

            </div>
            </div>
    )
}

export default Sort;