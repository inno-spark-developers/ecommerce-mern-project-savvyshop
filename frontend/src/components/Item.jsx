import { useContext, useState } from "react"
import { FaMinus, FaPlus, FaUpRightAndDownLeftFromCenter } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"


function Item({ product }) {

    const { cartItems, addToCart, removeFromCart, url } = useContext(ShopContext)

  return (
    <div className='shadow-xl'>
        <div className='relative group'>
            <img src={url + "/image/" + product.image} alt="" className="rounded-tl-2xl rounded-tr-2xl" />
            <div className="absolute right-3 bottom-3 flexCenter gap-x-2">
                <Link to={`/product/${product._id}`} className="opacity-0 group-hover:opacity-100 bg-white h-8 w-8 p-2 rounded-full shadow-inner cursor-pointer transition-all duration-500">
                    <FaUpRightAndDownLeftFromCenter/>
                </Link>
                {!cartItems[product._id] ? (
                    <div onClick={() => addToCart(product._id)}  className="flex w-full justify-center opacity-0 group-hover:opacity-100 bg-white transition-all duration-300 items-center gap-1 h-8 p-2 rounded-full shadow-inner cursor-pointer">
                        <FaPlus className="bg-primary text-xl rounded-full"/>
                        <span className="text-secondary font-semibold">Add to Cart</span>
                    </div>
                    ) : (
                    <div className="bg-white rounded-full flexCenter gap-2 h-8">
                        <FaMinus onClick={() => removeFromCart(product._id)} className="bg-primary h-6 w-6 ml-1 p-1 rounded-full cursor-pointer"/>
                        {cartItems[product._id]}
                        <FaPlus onClick={() => addToCart(product._id)} className="bg-secondary mr-1 h-6 w-6 p-1 rounded-full cursor-pointer"/>
                    </div>
                )}
            </div>
        </div>
        <div className='p-3'>
            <div className='flexBetween'>
                <h5 className='text-[16px] font-bold text-gray-900/50'>{product.category}</h5>
                <div className='text-secondary bold-18'>${product.price}</div>
            </div>
            <h4 className='medium-18 mb-1 line-clamp-1'>{product.name}</h4>
            <p className='line-clamp-2'>{product.description}</p>
        </div>
    </div>
  )
}

export default Item
