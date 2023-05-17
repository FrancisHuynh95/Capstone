import { useModal } from "../../context/Modal"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { deleteProductThunk } from "../../store/product"


function DeleteProductModal({product_id}) {
    const { closeModal } = useModal()
    const history = useHistory()
    const dispatch = useDispatch()


    console.log('INSIDE DELETE PRODUCT MODAL',product_id)
    function handleOnClick(){
        dispatch(deleteProductThunk(product_id))
        closeModal()
        history.push('/')
    }
    return (
        <>
            <h2>Delete Product Modal</h2>
            <button onClick={() => handleOnClick()}>Confirm Delete</button>
            <button onClick={() =>closeModal()}>Cancel</button>
        </>
    )
}

export default DeleteProductModal
