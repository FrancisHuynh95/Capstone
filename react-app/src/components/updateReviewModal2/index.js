import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import StarRating from "../updateReviewModal/stars"
import { updateReviewThunk } from "../../store/product"
import { useModal } from "../../context/Modal"
import { useSelector } from "react-redux"


const UpdateReviewModal2 = ({ product_id, review_id }) => {
    const user = useSelector(state => state.session.user)
    const allProducts = useSelector(state => state.product.products)
    const allProductArray1 = Object.values(allProducts)

    let reviewArray
    for (let i = 0; i < allProductArray1.length; i++) {
        for (let j = 0; j < allProductArray1[i].reviews.length; j++) {
            if (allProductArray1[i].reviews[j].id === review_id) {
                reviewArray = (allProductArray1[i].reviews[j])
            }
        }
    }
    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const [review, setReview] = useState("")
    const [stars, setStars] = useState(0)
    const [errors, setErrors] = useState({})


    useEffect(() => {
        if (reviewArray?.review) setReview(reviewArray?.review)
        if (reviewArray?.star_rating) setStars(reviewArray?.star_rating)

    }, [allProducts, dispatch])

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
                <h1 className="updateReviewModalH1">Update Your Review </h1>
                {review.length < 10 && <p className="errors">Review must be at least 10 characters!</p>}

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

export default UpdateReviewModal2
