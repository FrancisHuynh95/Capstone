import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../../store/cart"
import { getAllProductsThunk } from "../../store/product"


function UserCart() {
    const user = useSelector(state => state.session.user)
    const cartObj = useSelector(state => state.cart.cart)
    const allProducts = useSelector(state => state.product.products)
    const cartArray = Object.values(cartObj)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartThunk())
        dispatch(getAllProductsThunk())
    }, [dispatch])

    const filteredProducts = (products) => {
        const singleProduct = Object.values(allProducts).filter(product => product.id === products.id)
        return (
            <>
                <p>{singleProduct[0]?.name}</p>
                <label>Quantity <input type="number"></input></label>
            </>
        )
    }

    const updateCart = () => {
        console.log('updateCart')
    }

    const removeCart = () => {
        console.log('remove')
    }

    const purchase = () => {
        console.log('made a purchase')
    }


    if (!cartObj || !allProducts) return <p>Loading</p>
    return (
        <>
            <h1>User Cart</h1>
            <p>Products</p>
            <p>{user?.firstName}</p>
            {user && cartArray.map(cart =>
                <div className="each-product">
                    {filteredProducts(cart)}
                    <p>productId {cart.product_id}</p>
                    <p>quantity {cart.quantity}</p>
                    <div className="update-remove">
                        <button onClick={() => updateCart(cart.product_id)}>Update</button>
                        <button onClick={() => removeCart(cart.product_id)}>Remove</button>
                    </div>
                </div>
            )}
            <button onClick={() => purchase()}>Make the purchase</button>
        </>
    )
}

export default UserCart
