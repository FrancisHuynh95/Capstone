import { useModal } from "../../context/Modal"

const DeleteReviewModal = () => {
    const {closeModal} = useModal()

    const handleYes = async () => {
        console.log('YES')
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
