import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../../store/cart"
import { getAllProductsThunk } from "../../store/product"
import CartItemCard from "./CartItemCard"


function UserCart() {
    const user = useSelector(state => state.session.user)
    const cartObj = useSelector(state => state.cart.cart)
    const allProducts = useSelector(state => state.product.products)
    const state = useSelector(state => state)
    const cartArray = Object.values(cartObj)
    const dispatch = useDispatch()

    const purchase = () => {
        console.log('made a purchase')
    }

    useEffect(() => {
        dispatch(getCartThunk())
        dispatch(getAllProductsThunk())
    }, [dispatch])

    if (!cartObj || !allProducts) return <p>Loading</p>
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
