import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


function UserCart() {
    const user = useSelector(state => state.session.user)
    return (
        <>
            <h1>User Cart</h1>
            <p>Products</p>
            <p>{user.firstName}</p>
            {user && user.cart.map(cart =>
                <div>
                    <p>{cart.name}</p>
                    <p>{cart.price}</p>
                </div>
            )}
        </>
    )
}

export default UserCart
