import { useModal } from "../../context/Modal"
import { useDispatch } from "react-redux"
import { deleteReviewThunk } from "../../store/product"

const DeleteReviewModal = ({review_id, product_id}) => {
    const dispatch = useDispatch()
    const {closeModal} = useModal()

    const handleYes = async () => {
        await dispatch(deleteReviewThunk(review_id, product_id))
        closeModal()
    }
    return(
        <>
        <h1>Are you sure you want to delete your review?</h1>
        <button onClick={() => handleYes()}>Confirm Delete</button>
        <button onClick={() => closeModal()}>Cancel</button>
        </>
    )
}

export default DeleteReviewModal
