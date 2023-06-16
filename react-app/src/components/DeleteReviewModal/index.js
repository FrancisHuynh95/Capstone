import { useModal } from "../../context/Modal"
import { useDispatch } from "react-redux"
import { deleteReviewThunk, getAllProductsThunk } from "../../store/product"
import './deleteReview.css'

const DeleteReviewModal = ({ review_id, product_id }) => {
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const handleYes = async () => {
        await dispatch(deleteReviewThunk(review_id, product_id))
        closeModal()
    }
    return (
        <div className="deleteReviewModal">
            <h2 className="deleteReviewModalH2">Are you sure you want to delete your review?</h2>
            <div className="deleteReviewButtons">
                <button className="deleteReviewButton" onClick={() => handleYes()}>Confirm Delete</button>
                <button className="cancelButton" onClick={() => closeModal()}>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteReviewModal
