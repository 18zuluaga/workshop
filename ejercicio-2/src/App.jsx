import {  useEffect, useState } from "react"
import { Products } from "./components/products"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"



function App() {
  const [ products, setProducts ] = useState([])
  const { filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)
  
  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products').then(response => response.json()).then(data => {setProducts(data)});
  },[])
  return (
    <CartProvider>
      <Header></Header>
      <Cart />
      <Products products={filteredProducts}/>
      <Footer />
    </CartProvider>
  )
}

export default App
