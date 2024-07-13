import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export function useFilters (){
  
    // const [ filters, setfilters ] = useState({
    //   category: "all",
    //   minPrice: 0,
    // })
  
    const { filters, setfilters } = useContext(FiltersContext)
  
    const filterProducts = (products) => {
      return products.filter((product) => {
        return product.price >= filters.minPrice && (filters.category === "all" || product.category.name === filters.category)
      })
    }
  
    return { setfilters, filterProducts, filters }
  }