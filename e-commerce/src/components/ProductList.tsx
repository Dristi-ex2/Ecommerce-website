import { useFilterContext } from "../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

function ProductList(){
    const {filter_products,grid_view} =useFilterContext();

    
  // console.log("FILTERED PRODUCTS TO SHOW:", filter_products);

  if (filter_products.length === 0) {
    return <h2>No matching products found</h2>;
  }

    if(grid_view){
        return <GridView products={filter_products} />
    }

    if(grid_view===false){
        return <ListView products={filter_products} />
    }
}

export default ProductList;