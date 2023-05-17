const GET_ALL_PRODUCTS = '/GETALLPRODUCTS'
const GET_SINGLE_PRODUCT = '/GETSINGLEPRODUCT'
const CREATE_PRODUCT = "CREATEPRODUCT"

const getProducts = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
        products: products
    }
}

const getSingleProduct = (product) => {
    return {
        type: GET_SINGLE_PRODUCT,
        product
    }
}

const createProduct = (product) => {
    return {
        type: CREATE_PRODUCT,
        product
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

export const getSingleProductThunk = (id) => async (dispatch) => {
    console.log('Inside the thunk', id)
    const response = await fetch(`/products/${id}`)
    if(response.ok){
        const product = await response.json()
        await dispatch(getSingleProduct(product))
    } else {
        return ('RESPONSE IS NOT OK')
    }
}

export const createProductThunk = (product) => async (dispatch) => {
    const response = await fetch(`/products/new`, {
        method: 'POST',
        body: product
    })
    if(response.ok){
        const newProduct = await response.json()
        await dispatch(createProduct(newProduct))
    } else {
        return ("Response is not okay!!!!!!!")
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
        case GET_SINGLE_PRODUCT:
            newState = {products: {...state.products}, singleProduct: {...state.singleProduct}}
            newState.singleProduct[action.product.id] = action.product
            return newState
        case CREATE_PRODUCT:
            newState = {products: {...state.products}, singleProduct: {...state.singleProduct}}
            newState.singleProduct[action.product.id] = action.product
            return newState
        default:
            return state;
    }
}

export default productReducer
