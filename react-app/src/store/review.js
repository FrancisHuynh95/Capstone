const GETREVIEW = '/GETTHEREVIEWPLEASE'

const GET_ALL_REVIEWS = (id) => {
    return  {
        type: GETREVIEW,
        id
    }
}
const GET_SINGLE_REVIEW = (id) => {
    return  {
        type: GETREVIEW,
        id
    }
}
const CREATE_REVIEW = (id) => {
    return  {
        type: GETREVIEW,
        id
    }
}
const DELETE_REVIEW = (id) => {
    return  {
        type: GETREVIEW,
        id
    }
}

export const getReviewThunk = () => async (dispatch) => {
    const res = await fetch('/reviews/')
    console.log(res)
    if(res.ok){
        const response = await res.json()
        await dispatch(GET_ALL_REVIEWS(response))
    } else {
        return "Uh Oh"
    }
}

const initalState = { reviews: {}, singleReview: {}}
const reviewReducer = (state = initalState, action) => {
    let newState;
    switch(action.type) {
        case GET_ALL_REVIEWS:
            newState = {reviews: {}, singleReview: {}}
            action.reviews.forEach(review => { newState.reviews[review.id] = review})
            return newState
        case GET_SINGLE_REVIEW:
            newState = { reviews: {}, singleReview: {}}
            newState.singleReview[action.review.id] = action.review
            return newState
        case CREATE_REVIEW:
            newState = {reviews: {...state.reviews}, singleReview: {...state.singleReview}}
            newState.singleReview[action.review.id] = action.review
            return newState
        case DELETE_REVIEW:
            newState = {reviews: {...state.reviews}, singleReview: {...state.singleReview}}
            delete newState.singleReview[action.id]
            delete newState.reviews[action.id]
            return newState
        default:
            return state;
    }
}
export default reviewReducer
