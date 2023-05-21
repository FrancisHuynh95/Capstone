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
        <h1>ARE YOU SURE YOU WANT TO DELETE YOUR AWESOME REVIEW?!?!?!?</h1>
        <button onClick={() => handleYes()}>YES FOO</button>
        <button onClick={() => closeModal()}>NAH</button>
        </>
    )
}

export default DeleteReviewModal
