const GET_CART = '/SESSION/GET_CART'
const ADD_TO_CART = 'session/ADD_TO_CART'
const UPDATE_CART = 'session/ADD_TO_CART'
const DELETE_CART = 'session/ADD_TO_CART'

const getCart = (cart) => ({
    type: GET_CART,
    cart
})

const addToCart = (user) => ({
	type: ADD_TO_CART,
	user
})
const UpdateCart = (user) => ({
	type: UPDATE_CART,
	user
})
const DeleteFromart = (user) => ({
	type: DELETE_CART,
	user
})

const normalized = (cart) => {
    let newObj = {}
    cart.cart.forEach(cart => {
        newObj[cart.id] = cart
    })
    return newObj
}

export const getCartThunk = () => async(dispatch) => {
    const res = await fetch (`/carts/`)

    if(res.ok){
        const newRes = await res.json()
        await dispatch(getCart(newRes))
        return newRes
    } else {
        console.log('error in getting cart')
        return {"message": "F"}
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
        const response = await res.json()
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
        console.log('res is okay :D')
        const response = await res.json()
        await dispatch(getCartThunk())
        return response
    } else {
        console.log('res is not okay D:')
        const error = await res.json()
        return error
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


const initalState = { cart: {}}
const cartReducer = (state = initalState, action) => {
    let newState;
    switch(action.type) {
        case GET_CART:
            newState = {cart: {}}
            action.cart.forEach(cart => { newState.cart[cart.id] = cart})
            return newState
    // case GET_SINGLE_PRODUCT:
    //     newState = {products: {}, singleProduct: {}}
    //     newState.singleProduct[action.product.id] = action.product
    //     return newState
    // case CREATE_PRODUCT:
    //     newState = {products: {...state.products}, singleProduct: {...state.singleProduct}}
    //     newState.singleProduct[action.product.id] = action.product
    //     return newState
    // case DELETE_PRODUCT:
    //     newState = {products: {...state.products}, singleProduct: {...state.singleProduct}}
    //     delete newState.singleProduct[action.id]
    //     delete newState.products[action.id]
    //     return newState
        default:
            return state;
    }
}

export default cartReducer
