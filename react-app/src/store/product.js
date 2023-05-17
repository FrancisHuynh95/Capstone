const GET_ALL_PRODUCTS = '/GETALLPRODUCTS'

const getProducts = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
        products: products
    }
}


export const getAllProductsThunk = () => async (dispatch) => {
    console.log('GET ALL PRODUCTS THUNK')
    const response = await fetch('/products/')
    console.log('BEFORE RESPONSE.OK',response)
    if(response.ok){
        console.log('AFTER RESPONSE.OK',response)
        const newProducts = await response.json()
        console.log('newProducts ==================>',newProducts)
        await dispatch(getProducts(newProducts))
    } else {
        console.log('RESPONSE IS NOT OK')
    }
}

const initalState = { products: {}, singleProduct: {}}
const productReducer = (state = initalState, action) => {
    let newState;
    switch(action.type) {
        case GET_ALL_PRODUCTS:
            newState = {products: {...state.products}, singleProduct: {...state.singleProduct}}
            console.log('IN THE REDUCER', newState)
            console.log('action.products', action.products)
            // action.products.forEach(product => { newState.products[product.id] = product})

            return newState
        default:
            return state;
    }
}

export default productReducer
