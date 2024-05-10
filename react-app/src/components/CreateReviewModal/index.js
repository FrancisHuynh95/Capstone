import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import StarRating from "./stars"
import { createReviewThunk } from "../../store/product"
import { useModal } from "../../context/Modal"
import './createReview.css'

const CreateReviewModal = ({ productId }) => {
    const user = useSelector(state => state.session.user)
    const newReview = useSelector(state => state.review)
    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const [review, setReview] = useState('')
    const [stars, setStars] = useState(0)
    const [errors, setErrors] = useState({})


    const onChange = (number) => {
        setStars(parseInt(number));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = {
            "review": review,
            "star_rating": stars,
            "product_id": productId,
            "user_id": user.id
        }

        await dispatch(createReviewThunk(reviewData, productId))
        closeModal()
    }
    useEffect(() => {
        const theError = {}
        if (review.length < 10) theError.review = "Review must be at least 10 characters"
        if (!stars) theError.stars = "Please select the stars"
        setErrors(theError)
    }, [newReview, review, stars])

    return (
        <div className="createReviewModal">
            <form onSubmit={handleSubmit} method="POST">
                <h1 className="createReviewH1">Create a Review</h1>
                {errors && review.length >= 1 && <p className="errors">{errors.review}</p>}

                <div className="review_area">
                    <textarea
                        rows={8}
                        cols={45}
                        placeholder="Write your review here! Review must be at least  10 characters"
                        value={review}
                        onChange={e => setReview(e.target.value)}>
                    </textarea>
                    <div className="createStars">
                        <div className="Stars">
                            <StarRating
                                disabled={false}
                                onChange={onChange}
                                rating={stars}
                            />
                        </div>
                    </div>
                    <div id="buttonDiv">
                        <button
                            id="submitReviewButton"
                            disabled={review.length < 10 || stars === 0 ? true : false}
                            type="submit">Submit Your Review
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateReviewModal
