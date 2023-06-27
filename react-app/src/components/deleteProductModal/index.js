import { useModal } from "../../context/Modal"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { deleteProductThunk } from "../../store/product"
import "./deleteProduct.css"


function DeleteProductModal({ product_id }) {
    const { closeModal } = useModal()
    const history = useHistory()
    const dispatch = useDispatch()

    async function handleOnClick() {
        await dispatch(deleteProductThunk(product_id))
        closeModal()
        history.push('/')
    }
    return (
        <div className="deleteProductModal">
            <h2 className="deleteProductModalH2">Are you sure you want to delete the product listing?</h2>
            <div className="deleteProductButtons">
                <button className="deleteProductButton" onClick={() => handleOnClick()}>Confirm Delete</button>
                <button className="cancelButton" onClick={() => closeModal()}>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteProductModal
