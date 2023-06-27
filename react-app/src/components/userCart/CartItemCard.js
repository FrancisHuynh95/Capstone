import { useState, useEffect } from "react"
import { AddToCartThunk, UpdateCartThunk, getCartThunk, removeFromCartThunk } from "../../store/cart"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getAllProductsThunk } from "../../store/product"


function CartItemCard({item}) {
    const allProductsObj = useSelector(state => state.product.products)
    const cartObj = useSelector(state => state.cart.cart)
    const cartArray = Object.values(cartObj)
    const allProducts = Object.values(allProductsObj)
    const [quantity, setQuantity] = useState(item.quantity)
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllProductsThunk())
        setQuantity(item.quantity)
    }, [dispatch, cartArray.length])

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

    const removeCart = async () => {
        await dispatch(removeFromCartThunk(item.product_id))
        dispatch(getCartThunk())
    }

    const filteredProducts = (products) => {
        const singleProduct = Object.values(allProducts)?.filter(product => product.id === products.product_id)
        return (
            <>
                <div className="productInfo">
                {errors.price && <p className="errors">{`${errors.price}`}</p>}
                <p className="cart_product_name">{singleProduct[0]?.name}</p>
                <p className="quantityxprice">$ {`${(singleProduct[0]?.price * item.quantity).toFixed(2)} `}</p>
                <img className="cartImg" src={`${singleProduct[0]?.product_img1}`}></img>
                </div>
            </>
        )
    }
    return (<div className="each-product">
        {filteredProducts(item)}
        <div className="userInteraction">
        Quantity: <input className="quantitySelector" type="number" onChange={e => setQuantity(e.target.value)} value={quantity}></input>
        <div className="update-remove">
            <button className="updateCartButton" onClick={() => updateCart(item.product_id, item.id)}>Update</button>
            <button className="removeCartButton" onClick={() => removeCart(item.product_id)}>Remove</button>
        </div>
        </div>
    </div>)
}

export default CartItemCard
