import { useState, useEffect } from "react"
import { AddToCartThunk, UpdateCartThunk, removeFromCartThunk } from "../../store/cart"
import { useDispatch } from "react-redux"


function CartItemCard({ item, allProducts }) {
    const [quantity, setQuantity] = useState(item.quantity)
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    const updateCart = () => {
        let errorObj = {}
        if(+quantity <= 0){
            errorObj.price = "The quantity must be at least 1."
        }
        if(Object.values(errorObj).length === 0){
            setErrors(errorObj)
            const updateCartObj = {
                "quantity": +quantity
            }
            dispatch(UpdateCartThunk(item.product_id, updateCartObj))
        } else {
            setErrors(errorObj)
            setQuantity(item.quantity)

        }
    }

    const removeCart = () => {
        dispatch(removeFromCartThunk(item.product_id))
    }

    const filteredProducts = (products) => {
        const singleProduct = Object.values(allProducts)?.filter(product => product.id === products.product_id)
        return (
            <>
                {errors.price && <p className="errors">{`${errors.price}`}</p>}
                <p className="product_name">{singleProduct[0]?.name}</p>
                <p className="quantityxprice">$ {`${(singleProduct[0]?.price * item.quantity).toFixed(2)} `}</p>
            </>
        )
    }
    return (<div className="each-product">
        {filteredProducts(item)}
        <div className="userInteraction">
        Quantity <input className="quantitySelector" type="number" onChange={e => setQuantity(e.target.value)} value={quantity}></input>
        <div className="update-remove">
            <button className="updateCartButton" onClick={() => updateCart(item.product_id, item.id)}>Update</button>
            <button className="removeCartButton" onClick={() => removeCart(item.product_id)}>Remove</button>
        </div>
        </div>
    </div>)
}

export default CartItemCard
