const GET_CART = '/SESSION/GET_CART'

const getCart = (cart) => ({
    type: GET_CART,
    cart
})

// const normalized = (cart) => {
//     let newObj = {}
//     cart.cart.forEach(cart => {
//         newObj[cart.id] = cart
//     })
//     return newObj
// }

export const getCartThunk = () => async(dispatch) => {
    const res = await fetch (`/carts/`)

    if(res.ok){
        const newRes = await res.json()
        await dispatch(getCart(newRes))
        return newRes
    } else {
        return {"Error": "Failed to retrieve cart"}
    }
}

export const AddToCartThunk = (productId, amount) => async(dispatch) => {
    const res = await fetch(`/carts/product/${productId}/${amount}`, {
        method:"POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(productId, amount)
    })
    if(res.ok){
        await dispatch(getCartThunk())
    } else {
        return {"Error": "There was an error adding to the cart"}
    }
}
export const UpdateCartThunk = (productId, amount) => async(dispatch) => {
    const res = await fetch(`/carts/product/${productId}`, {
        method:"PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(amount)
    })
    if(res.ok){
        const response = await res.json()
        await dispatch(getCartThunk())
        return response
    } else {
        return {"Error": "There was a problem updating the cart"}
    }
}

export const removeFromCartThunk = (productId) => async(dispatch) => {
    const res = await fetch(`/carts/product/${productId}`, {
        method: 'DELETE'
    })
    if(res.ok){
        dispatch(getCartThunk())
        return {'message': "Successfully deleted"}
    } else {
        return {'message': "Error occurred"}
    }
}

export const removeAllFromCartThunk = () => async(dispatch) => {
    const res = await fetch(`/carts/product/purchase`, {
        method: 'DELETE'
    })
    if(res.ok){
        dispatch(getCartThunk())
        return {'message': "Successfully deleted"}
    } else {
        return {'message': "Error occurred"}
    }
}


const initalState = { cart: {}}
const cartReducer = (state = initalState, action) => {
    let newState;
    switch(action.type) {
        case GET_CART:
            newState = {cart: {}}
            action.cart.forEach(cart => { newState.cart[cart.id] = cart})
            return newState
        default:
            return state;
    }
}

export default cartReducer
