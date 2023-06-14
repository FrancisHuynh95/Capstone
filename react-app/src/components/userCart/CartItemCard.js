import { useState, useEffect } from "react"
import { UpdateCartThunk, removeFromCartThunk } from "../../store/cart"
import { useDispatch } from "react-redux"

function CartItemCard({ item, allProducts }) {
    const [quantity, setQuantity] = useState(item.quantity)
    const dispatch = useDispatch()

    const updateCart = () => {
        const updateCartObj = {
            "quantity": +quantity
        }
        dispatch(UpdateCartThunk(item.product_id, updateCartObj))
    }

    const removeCart = () => {
        dispatch(removeFromCartThunk(item.product_id))
    }

    const filteredProducts = (products) => {
        const singleProduct = Object.values(allProducts)?.filter(product => product.id === products.product_id)
        return (
            <>
                <p>{singleProduct[0]?.name}</p>
                <p>$ {(singleProduct[0]?.price * item.quantity)?.toFixed(2)}</p>
            </>
        )
    }
    return (<div className="each-product">
        {filteredProducts(item)}
        <p>productId {item.product_id}</p>
        <p>quantity {item.quantity}</p>
        <input type="number" onChange={e => setQuantity(e.target.value)} value={quantity}></input>
        <div className="update-remove">
            <button onClick={() => updateCart(item.product_id, item.id)}>Update</button>
            <button onClick={() => removeCart(item.product_id)}>Remove</button>
        </div>
    </div>)
}

export default CartItemCard
