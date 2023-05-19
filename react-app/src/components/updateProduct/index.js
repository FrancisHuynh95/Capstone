import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleProductThunk, updateProductThunk } from "../../store/product"
import { useHistory } from "react-router-dom"

function UpdateProduct() {
    const currentProduct = useSelector(state => state.product.singleProduct)
    const currentProductArray = Object.values(currentProduct)
    const history = useHistory()
    const dispatch = useDispatch()
    const { productId } = useParams()

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [product_img1, setImg1] = useState(null)
    const [product_img2, setImg2] = useState(null)
    const [product_img3, setImg3] = useState(null)
    const [product_img4, setImg4] = useState(null)
    const [product_img5, setImg5] = useState(null)
    const [error, setError] = useState([])

    useEffect(() => {
        dispatch(getSingleProductThunk(productId))
    }, [dispatch, productId])

    useEffect(() => {
        if (currentProductArray.length > 0) {
            setName(currentProductArray[0].name)
            setPrice(currentProductArray[0].price)
            setDescription(currentProductArray[0].description)
        }
    }, [productId, currentProduct])

    const handleUpdateButton = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", name)
        formData.append("price", price)

        formData.append("description", description)

        if(product_img1){
            formData.append("product_img1", product_img1)
        }
        if(product_img2){
            formData.append("product_img2", product_img2)
        }
        if(product_img3){
            formData.append("product_img3", product_img3)
        }
        if(product_img4){
            formData.append("product_img4", product_img4)
        }
        if(product_img5){
            formData.append("product_img5", product_img5)
        }
        await dispatch(updateProductThunk(formData, productId))
        history.push(`/products/${productId}`)
    }


    if (!Object.values(currentProduct).length) return null
    return (
        <>
            <form method="PUT" onSubmit={handleUpdateButton}>
                <h1>Update Product</h1>
                <div>
                    <label>
                        <div>Name</div>
                        <input
                            type="text"
                            value={name || ""}
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <div>Price</div>
                        <input
                        type="number"
                        value={price || 0}
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                        />
                        </label>
                </div>
                <div>
                    <label>
                        <div>Description</div>
                        <textarea
                        value={description}
                        placeholder="Description"
                        onChange={e => setDescription(e.target.value)}
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        <div>First Product Image</div>
                        <input
                            className="product_img"
                            type='file'
                            name="product_img1"
                            accept="image/*"
                            onChange={(e) => setImg1(e.target.files[0])}
                        ></input>
                    </label>
                    <label>
                        <div>Second Product Image</div>
                        <input
                            className="product_img"
                            type='file'
                            name="product_img1"
                            accept="image/*"
                            onChange={(e) => setImg2(e.target.files[0])}
                        ></input>
                    </label>
                    <label>
                        <div>Three Product Image</div>
                        <input
                            className="product_img"
                            type='file'
                            name="product_img1"
                            accept="image/*"
                            onChange={(e) => setImg3(e.target.files[0])}
                        ></input>
                    </label>
                    <label>
                        <div>Four Product Image</div>
                        <input
                            className="product_img"
                            type='file'
                            name="product_img1"
                            accept="image/*"
                            onChange={(e) => setImg4(e.target.files[0])}
                        ></input>
                    </label>
                    <label>
                        <div>Five Product Image</div>
                        <input
                            className="product_img"
                            type='file'
                            name="product_img1"
                            accept="image/*"
                            onChange={(e) => setImg5(e.target.files[0])}
                        ></input>
                    </label>
                </div>
                <div>
                    <button type="submit">Update Product</button>
                </div>
            </form>
        </>
    )
}

export default UpdateProduct
