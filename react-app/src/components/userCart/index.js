import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartThunk, removeAllFromCartThunk } from "../../store/cart"
import {getAllProductsThunk} from "../../store/product"
import CartItemCard from "./CartItemCard"

function UserCart() {
    const user = useSelector(state => state.session.user)
    const cartObj = useSelector(state => state.cart.cart)
    const allProducts = useSelector(state => state.product.products)
    const [isPurchase, setIsPurchase] = useState(false)
    const cartArray = Object.values(cartObj)
    const dispatch = useDispatch()

    const purchase = () => {
        setIsPurchase(true)
        dispatch(removeAllFromCartThunk())
    }

    useEffect(() => {
        dispatch(getCartThunk())
        dispatch(getAllProductsThunk())
    }, [dispatch])


    if (!cartObj || !allProducts) return <p>Loading</p>
    if(isPurchase) return <p>Thank You For Your Purchase!</p>
    return (
        <>
            <h1>User Cart</h1>
            <p>Products</p>
            <p>{user?.firstName}</p>

            {user && cartArray.map(cart =>
                <CartItemCard item={cart} allProducts={allProducts} />
                )}
            <button onClick={() => purchase()}>Make the purchase</button>
        </>
    )
}

export default UserCart
