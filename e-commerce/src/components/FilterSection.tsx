import { useFilterContext } from "../context/filterContext";
import "../Styling/filterSection.css";

function FilterSection() {
  const {
    filters: { text, category, color },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  //to get unique data of each field
  const getUniqueData = (data: any[], attr: string) => {
    let newVal = data.map((currElem) => {
      return currElem[attr];
    });

    if (attr === "colors") {
      // return (newVal=["All",...new Set([].concat(...newVal))]); //it will store all possible colors present in api without having duplicates
      newVal = newVal.flat();
    }

    return (newVal = ["All", ...new Set(newVal)]);
  };

  //we need unique data to dispaly category
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors"); //here colors is written because in api colors is there
  console.log(colorsOnlyData);

  return (
    <div>
      <div className="filter-search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="text"
            value={text}
            placeholder="SEARCH"
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div className="filter-color-style">
          {categoryOnlyData.map((currElem, index) => {
            return (
              <button
                key={index}
                type="button"
                value={currElem}
                name="category"
                onClick={updateFilterValue}
              >
                {currElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="company-category">
        <h3>Company</h3>
        <div>
          <form>
            <select name="company" id="comp" onChange={updateFilterValue}>
              {companyOnlyData.map((currElem, index) => {
                return (
                  <option key={index} value={currElem}>
                    {currElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>

      <div className="filter_colors">
        <h3>Colors</h3>

        <div className="filter-colors-style">
          {colorsOnlyData.map((currColor, index) => {
            return (
              <button
                key={index}
                value={currColor}
                type="button"
                name="color" //note this name should be equal to name you have declared in filtercontext.tsx color===color
                style={{ backgroundColor: currColor }}
                className="btnStyle"
                onClick={updateFilterValue}
              >
                {color === currColor ? " " : null};{/* {currColor} */}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
