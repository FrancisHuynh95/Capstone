const CREATE_REVIEW = '/REVIEW/CREATE'

const createReview = (review) => {
    return {
        type: CREATE_REVIEW,
        review
    }
}
