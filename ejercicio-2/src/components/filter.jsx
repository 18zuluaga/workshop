import { useFilters } from '../hooks/useFilters'
import './Filters.css'
import { useId } from 'react'
export function Filters () {
    const { setfilters, filters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    
    const handleChangeMinPrice = (e) => {
        setfilters(prevState => ({ ...prevState, minPrice: e.target.value }))
    }

    const handleChangeCategory = (e) => {
        setfilters(prevState => ({ ...prevState, category: e.target.value }))
    }
    
    return (
        <section className="filters">

            <div>
                <label htmlFor={minPriceFilterId }>Precio minimo</label>
                <input type="range" onChange={handleChangeMinPrice} value={filters.minPrice} id={minPriceFilterId } min="0" max="100"/>
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categorias</label>
                <select name="category" onChange={handleChangeCategory} id={categoryFilterId}>
                    <option value="all" defaultValue="true">Todas</option>
                    <option value="Clothes">ropa</option>
                    <option value="Electronics">Electronicos</option>
                    <option value="Furniture">Muebles</option>
                    <option value="Shoes">Zapatos</option>
                    <option value="Miscellaneous">Otros</option>
                </select>
            </div>
        </section>
    )
}