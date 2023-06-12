const GET_CART = '/SESSION/GET_CART'
const ADD_TO_CART = 'session/ADD_TO_CART'

const getCart = (cart) => ({
    type: GET_CART,
    cart
})

const addToCart = (user) => ({
	type: ADD_TO_CART,
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
    const res = await fetch (`/carts`)
}


const initalState = { cart: {}}
const cartReducer = (state = initalState, action) => {
    let newState;
    switch(action.type) {
        case ADD_TO_CART:
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
