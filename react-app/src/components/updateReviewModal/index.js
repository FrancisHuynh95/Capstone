import { useState } from "react"
import { useDispatch } from "react-redux"
import StarRating from "./stars"


const UpdateReviewModal = () => {
    const dispatch = useDispatch()
    const [review, setReview] = useState("")
    const [stars, setStars] = useState(0)

    const onChange = (number) => {
        setStars(parseInt(number));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        
    }
    return (
        <>
            <form>
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
