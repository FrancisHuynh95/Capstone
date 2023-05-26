import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import StarRating from "./stars"
import { getAllProductsThunk, updateReviewThunk } from "../../store/product"
import { useModal } from "../../context/Modal"
import { useSelector } from "react-redux"
import "./updateReview.css"


const UpdateReviewModal = ({ product_id, review_id }) => {
    const user = useSelector(state => state.session.user)
    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const [review, setReview] = useState("")
    const [stars, setStars] = useState(0)
    const [error, setError] = useState({})
    const singleProduct = useSelector(state => state.product.singleProduct)
    const singleProductObj = Object.values(singleProduct)
    const reviewArray = singleProductObj[0].reviews

    useEffect(() => {
        const errorObj = {}
        if (review.length < 10) errorObj.review = "Review must be at least 10 characters!"
        setError(errorObj)
    }, [review, stars])
    const onChange = (number) => {
        setStars(parseInt(number));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        const reviewData = {
            "review": review,
            "star_rating": stars,
            "product_id": product_id,
            "user_id": user.id
        }
        await dispatch(updateReviewThunk(reviewData, product_id, review_id))
        closeModal()
    }
    return (
        <div className="updateReviewModal">
            <form onSubmit={handleSubmit} method="PUT">
                <h1 className="updateReviewModalH1">Update Your Review</h1>
                {error && review.length >= 1 && <p className="errors">{error.review}</p>}
                <div className="review_area">
                    <textarea rows={8} cols={45} placeholder="Write your review here!" value={review} onChange={e => setReview(e.target.value)}></textarea>
                    <div className="updateReviewStars">
                        <div className="Stars">
                            <StarRating
                                disabled={false}
                                onChange={onChange}
                                rating={stars}
                            />
                        </div>
                    </div>
                    <div id="buttonDiv">
                        <button id="submitReviewButton" disabled={review.length < 10 || stars === 0 ? true : false} type="submit">Submit Your Review</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateReviewModal
