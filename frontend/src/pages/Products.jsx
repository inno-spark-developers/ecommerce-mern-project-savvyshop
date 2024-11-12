import { useContext, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router-dom"
import ProductHD from "../components/ProductHD"
import ProductMD from "../components/ProductMD"
import ProductDescription from "../components/ProductDescription"

const Products = () => {

  const { all_products } = useContext(ShopContext)
  const { productId } = useParams()

  
  const product = all_products.find( (e) => e._id===productId)

  if(!product){
    return <div className="h1 pt-28">Product not found</div>
    // or redirect to 404 page 
  }

  return (
    <div>
      <section className="max-padd-container py-20">
        <div className="">
          <ProductHD product={product}/>
          <ProductMD product={product}/>
          <ProductDescription/>
        </div>
      </section>
    </div>
  )
}

export default Products
