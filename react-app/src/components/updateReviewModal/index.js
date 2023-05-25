import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import StarRating from "./stars"
import { getSingleProductThunk, updateReviewThunk } from "../../store/product"
import { useModal } from "../../context/Modal"
import { useSelector } from "react-redux"


const UpdateReviewModal = ({product_id, review_id}) => {
    const user = useSelector(state => state.session.user)
    const {closeModal} = useModal()
    const dispatch = useDispatch()
    const [review, setReview] = useState("")
    const [stars, setStars] = useState(0)
    const singleProduct = useSelector(state => state.product.singleProduct)
    const singleProductObj = Object.values(singleProduct)
    const reviewArray = singleProductObj[0].reviews


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
        <>
            <form onSubmit={handleSubmit} method="PUT">
                <h1>Update Review Modal</h1>
                <div className="review_area">
                    <textarea rows={8} cols={45} placeholder="Write your review here!" value={review} onChange={e => setReview(e.target.value)}></textarea>
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
            </form>
        </>
    )
}

export default UpdateReviewModal
