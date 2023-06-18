const GET_ALL_PRODUCTS = '/GETALLPRODUCTS'
const GET_SINGLE_PRODUCT = '/GETSINGLEPRODUCT'
const CREATE_PRODUCT = "/CREATEPRODUCT"
const DELETE_PRODUCT = "/DELETEPRODUCT"
const ALL_REVIEWS = '/ALLREVIEW'
const GET_FILTERED_PRODUCTS = '/GET_FILTERED_PRODUCTS'

const getProducts = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
        products: products
    }
}

const getFilteredProducts = (products) => {
    return {
        type: GET_FILTERED_PRODUCTS,
        products
    }
}

const allReviews = (reviews) => {
    return {
        type: ALL_REVIEWS,
        reviews: reviews
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

const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        id
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
export const getAllReviewsThunk = (id) => async (dispatch) => {
    const response = await fetch(`/reviews/${id}`)
    if(response.ok){
        const newReviews = await response.json()
        await dispatch(allReviews(newReviews))
    } else {
        return ('RESPONSE IS NOT OK')
    }
}

export const getSingleProductThunk = (id) => async (dispatch) => {
    const response = await fetch(`/products/${id}`)
    if(response.ok){
        const product = await response.json()
        await dispatch(getSingleProduct(product))
        return product
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
export const getFilteredProductThunk = (keyword) => async (dispatch) => {
    const response = await fetch(`/products/${keyword}`)
    if(response.ok){
        const newProduct = await response.json()
        dispatch(getFilteredProducts(newProduct))
    } else {
        return ("Response is not okay!!!!!!!")
    }
}

export const deleteProductThunk = (id) => async (dispatch) => {
    const response = await fetch(`/products/${id}`, {
        method: "DELETE"
    })
    if(response.ok){
        const deleted = await response.json()
        await dispatch(deleteProduct(id))
        dispatch(getAllProductsThunk())
    } else {
        return "DID NOT DELETE"
    }
}

export const updateProductThunk = (formData, productId) => async (dispatch) => {
    const response = await fetch(`/products/${productId}`, {
        method: "PUT",
        body: formData
    })
    if(response.ok){
        await dispatch(getAllProductsThunk())
    } else {
        return
    }
}
export const createReviewThunk = (review, productId) => async (dispatch) => {
    const res = await fetch('/reviews/new', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    if(res.ok){
        const response = await res.json()
        await dispatch(getAllProductsThunk())
        return response;
    } else {
        return "CREATE REVIEW THUNK ERROR"
    }
}

export const deleteReviewThunk = (id, productId) => async(dispatch) => {
    const res = await fetch(`/reviews/${id}`, {
        method:"DELETE"
    })
    if(res.ok){
        const response = await res.json()
        await dispatch(getSingleProductThunk(productId))
    }
}

export const updateReviewThunk = (reviewData, productId, id ) => async (dispatch) => {
    const res = await fetch(`/reviews/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewData)
    })
    console.log('checking the res', res)
    if(res.ok){
        const response = await res.json()
        await dispatch(getAllProductsThunk())
        return response
    } else {
        console.log('RES IS NOT OKAY')
    }
}

const initalState = { products: {}, singleProduct: {}, filteredProduct: {}}
const productReducer = (state = initalState, action) => {
    let newState;
    switch(action.type) {
        case GET_ALL_PRODUCTS:
            newState = {products: {}, singleProduct: {}}
            action.products.forEach(product => { newState.products[product.id] = product})
            return newState
        case GET_FILTERED_PRODUCTS:
            newState = {products: {}, singleProduct: {}, filteredProduct: {}}
            action.products.forEach(product => { newState.filteredProduct[product.id] = product})
            return newState
        case GET_SINGLE_PRODUCT:
            newState = {products: {}, singleProduct: {}}
            newState.singleProduct[action.product.id] = action.product
            return newState
        case CREATE_PRODUCT:
            newState = {products: {...state.products}, singleProduct: {...state.singleProduct}}
            newState.singleProduct[action.product.id] = action.product
            return newState
        case DELETE_PRODUCT:
            newState = {products: {...state.products}, singleProduct: {...state.singleProduct}}
            delete newState.singleProduct[action.id]
            delete newState.products[action.id]
            return newState
        default:
            return state;
    }
}
export default productReducer
