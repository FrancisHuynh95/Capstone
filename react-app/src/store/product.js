const GET_ALL_PRODUCTS = '/GETALLPRODUCTS'

const getProducts = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
        products: products
    }
}

export const getAllProductsThunk = () => async (dispatch) => {
    const response = await fetch('/products/')
    if(response.ok){
        const newProducts = await response.json()
        await dispatch(getProducts(newProducts))
    } else {
        return ('RESPONSE IS NOT OK')
    }
}

const initalState = { products: {}, singleProduct: {}}
const productReducer = (state = initalState, action) => {
    let newState;
    switch(action.type) {
        case GET_ALL_PRODUCTS:
            newState = {products: {...state.products}, singleProduct: {...state.singleProduct}}
            action.products.forEach(product => { newState.products[product.id] = product})
            return newState
        default:
            return state;
    }
}

export default productReducer
