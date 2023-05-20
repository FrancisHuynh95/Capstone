const GET_ALL_PRODUCTS = '/GETALLPRODUCTS'
const GET_SINGLE_PRODUCT = '/GETSINGLEPRODUCT'
const CREATE_PRODUCT = "/CREATEPRODUCT"
const DELETE_PRODUCT = "/DELETEPRODUCT"
const UPDATE_PRODUCT = '/UPDATEPRODUCT'
const ADD_REVIEW = '/ADDREVIEW'
const DELETE_REVIEW = '/DELETEREVIEW'

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

const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        id
    }
}

const updateProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
        product
    }
}

const create_Review = (reviews) => {
    return {
        type: ADD_REVIEW,
        reviews
    }
}

const delete_review = (id) => {
    return {
        type :DELETE_REVIEW,
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
    console.log('thunk has been initialized', product)
    const response = await fetch(`/products/new`, {
        method: 'POST',
        body: product
    })
    console.log("after response", response)
    if(response.ok){
        console.log("Response is okay!!!!!!!")
        const newProduct = await response.json()
        console.log("before dispatch", newProduct)
        await dispatch(createProduct(newProduct))
        console.log("Response dispatched", newProduct)
    } else {
        return ("Response is not okay!!!!!!!")
    }
}

export const deleteProductThunk = (id) => async (dispatch) => {
    console.log('INITIATED THE THUNK', id)
    const response = await fetch(`/products/${id}`, {
        method: "DELETE"
    })
    console.log('before res.ok', response)
    if(response.ok){
        console.log('inside res.ok')
        const deleted = await response.json()
        await dispatch(deleteProduct(id))
    } else {
        console.log("SOMETHING WRONG WITH THUNK")
        return "DID NOT DELETE"
    }
}

export const updateProductThunk = (formData, productId) => async (dispatch) => {
    console.log('inside the thunk', formData)
    console.log('inside the thunk', productId)
    const response = await fetch(`/products/${productId}`, {
        method: "PUT",
        body: formData
    })
    console.log('Is the res okay?', response)
    if(response.ok){
        console.log("RES IS OKAY")
    } else {
        console.log("RES IS NOT OKAY")
    }
}
export const createReviewThunk = (review) => async (dispatch) => {
    console.log('create review thunk be thunkin', review)
    const res = await fetch('/reviews/new', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    if(res.ok){
        const response = await res.json()
        console.log(response)
        await dispatch(create_Review(response))
    } else {
        return "CREATE REVIEW THUNK ERROR"
    }
}

export const deleteReviewThunk = (id) => async(dispatch) => {
    const res = await fetch(`/reviews/${id}`, {
        method:"DELETE"
    })
    if(res.ok){
        const response = await res.json()
        await dispatch(deleteReviewThunk(id))
    }
}

const initalState = { products: {}, singleProduct: {}}
const productReducer = (state = initalState, action) => {
    let newState;
    switch(action.type) {
        case GET_ALL_PRODUCTS:
            newState = {products: {}, singleProduct: {}}
            action.products.forEach(product => { newState.products[product.id] = product})
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
        case ADD_REVIEW:
            newState = {products: {...state.products}, singleProduct: {...state.singleProduct}}
            console.log(newState.singleProduct.reviews)
            console.log(action.reviews)
            newState.singleProduct.reviews[action.reviews.id] = action.reviews
            return newState
        case DELETE_REVIEW:
            newState = {products: {...state.products}, singleProduct: {...state.singleProduct}}
            newState.singleProduct.reviews.map((review,i) => {
                if(review.id === action.id){
                review.splice(i,1)
            }})
            return newState
        default:
            return state;
    }
}
export default productReducer
