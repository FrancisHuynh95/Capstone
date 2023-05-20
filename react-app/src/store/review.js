// const CREATE_REVIEW = '/REVIEW/CREATE'
// const ALL_REVIEW = '/REVIEW/GET'

// const getReviews = (review) => {
//     return {
//         type:ALL_REVIEW,
//         review
//     }
// }

// const createReview = (review) => {
//     return {
//         type: CREATE_REVIEW,
//         review: review
//     }
// }

// export const getReviewThunk = (review) => async (dispatch) => {
//     const res = await fetch ('/reviews/all')
// }

// export const createReviewThunk = (review) => async (dispatch) => {
//     console.log('create review thunk be thunkin', review)
//     const res = await fetch('/reviews/new', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(review)
//     })
//     if(res.ok){
//         const response = await res.json()
//         await dispatch(createReview(response))
//     } else {
//         return "CREATE REVIEW THUNK ERROR"
//     }
// }

// const initialState = {reviews: {}, singleReview: {}}
// const reviewReducer = (state = initialState, action) => {
// let newState;
//     switch(action.type){
//         case CREATE_REVIEW:
//             console.log('in the reducer', action.review)
//         newState = {...state, reviews: {...state.reviews}, singleReview: {...state.singleReview}}
//         newState.reviews[action.review.id] = action.review
//         return newState
//         default:
//             return state;
//     }
// }

// export default reviewReducer
