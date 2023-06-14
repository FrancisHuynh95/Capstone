import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartThunk, removeAllFromCartThunk } from "../../store/cart"
import { getAllProductsThunk } from "../../store/product"
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


    function getTotalPrice(){
        let total = {}
        let allTotal = 0;
        cartArray.forEach(product => {
            let productId = product.product_id
            total[product.product_id] = allProducts[productId]?.price * product.quantity
        })
        for(let price in total){
            allTotal += total[price]
        }
        return allTotal
    }
    console.log('PRICE HAHAHAHAHA',getTotalPrice())

    if (!cartObj || !allProducts) return <p>Loading</p>
    if (isPurchase) return <p>Thank You For Your Purchase!</p>
    return (
        <>
            <h1>User Cart</h1>
            <p>Products</p>
            <div>
                {user && cartArray.length > 0 ? cartArray.map(cart =>
                    <CartItemCard item={cart} allProducts={allProducts} />
                ) : <p>There are no items in your cart</p>}
            </div>
            {cartArray.length > 0 ? <button onClick={() => purchase()}>Make the purchase</button> : null}
            <p className="totalPrice">Cart Total: ${`${getTotalPrice()}`}</p>
        </>
    )
}

export default UserCart
