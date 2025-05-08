
import FilterSection from "../components/FilterSection";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";
import '../Styling/products.css';

function Products(){
    return (
        <div className="productcards-grid">
            <div>
                <FilterSection />
            </div>

            <div className="product-view-sort">
                <div className="sort-filter">
                    <Sort />
                </div>

                <div className="main-product">
                    <ProductList />
                </div>
            </div>
        </div>
    )
}

export default Products;