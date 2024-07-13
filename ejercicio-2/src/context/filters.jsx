import { createContext, useState } from "react";

export const FiltersContext = createContext({

})

export function FiltersProvader({ children }) {
    const [filters, setfilters] = useState({
        category: "all",
        minPrice: 10,
    })
    return (
        <FiltersContext.Provider value={{ filters, setfilters }}>
            {children}
        </FiltersContext.Provider>
    )
}