import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleProductThunk, updateProductThunk } from "../../store/product"
import { useHistory } from "react-router-dom"
import "./updateproduct.css"

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
    const [fileUpload1, setFileUpload1] = useState("No file uploaded")
    const [fileUpload2, setFileUpload2] = useState("No file uploaded")
    const [fileUpload3, setFileUpload3] = useState("No file uploaded")
    const [fileUpload4, setFileUpload4] = useState("No file uploaded")
    const [fileUpload5, setFileUpload5] = useState("No file uploaded")
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
        const errorObj = {}
        if (name.length === 0) {
            errorObj.name = "Name is required"
        }
        if (name.length > 30) {
            errorObj.name = "Name must be in between 5 and 30 characters"
        }
        if (name.length < 5) {
            errorObj.name = "Name must be in between 5 and 30 characters"
        }
        if (price <= 0) {
            errorObj.price = "Price has to be greater than 0."
        }
        if (description.length === 0) {
            errorObj.description = "Description is required."
        }

        if (description.length > 200) {
            errorObj.description = "Description must be less than 200 characters"
        }
        setError(errorObj)
        if (Object.values(errorObj).length > 0) {
            return
        } else {

            const formData = new FormData()
            formData.append("name", name)
            formData.append("price", price)

            formData.append("description", description)

            if (product_img1) {
                formData.append("product_img1", product_img1)

            }
            if (product_img2) {
                formData.append("product_img2", product_img2)
                setFileUpload2("File is ready")
            }
            if (product_img3) {
                formData.append("product_img3", product_img3)
                setFileUpload3("File is ready")
            }
            if (product_img4) {
                formData.append("product_img4", product_img4)
                setFileUpload4("File is ready")
            }
            if (product_img5) {
                formData.append("product_img5", product_img5)
                setFileUpload5("File is ready")
            }
            await dispatch(updateProductThunk(formData, productId))
            history.push(`/product/${productId}`)
        }
    }


    if (!Object.values(currentProduct).length) return null
    return (
        <>
            <form id="update-product-form" method="PUT" onSubmit={handleUpdateButton} encType="multipart/form-data">
                <h1>Update Product</h1>
                {error.name && <p className="errors">{error.name}</p>}
                {error.price && <p className="errors">{error.price}</p>}
                {error.description && <p className="errors">{error.description}</p>}
                <label>
                    Name
                    <input
                        className="product_name"
                        type="text"
                        value={name || ""}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Price
                    <input
                        className="product_price"
                        type="number"
                        value={price || 0}
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
                <label>
                    Description
                    <textarea
                        className="product_description"
                        rows={10}
                        value={description}
                        placeholder="Description"
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </label>
                <div className="img_upload_area">
                    <div className="img_upload_test">
                        <div>First Product Image</div>
                        <div className="imgInputAndFileStatus">
                            <input
                                className="product_img_update"
                                type='file'
                                name="product_img1"
                                accept="image/*"
                                onChange={(e) => {
                                    setFileUpload1(e.target.files[0].name)
                                    setImg1(e.target.files[0])}}
                            ></input>
                            <div className="fileStatus">{fileUpload1}</div>
                        </div>
                    </div>
                    <div className="img_upload_test">
                        <div>Second Product Image</div>
                        <div className="imgInputAndFileStatus">
                            <input
                                className="product_img_update"
                                type='file'
                                name="product_img1"
                                accept="image/*"
                                onChange={(e) => {
                                    setFileUpload2(e.target.files[0].name)
                                    setImg2(e.target.files[0])}}
                            ></input>
                            <div className="fileStatus">{fileUpload2}</div>
                        </div>
                    </div>
                    <div className="img_upload_test">
                        <div>Third Product Image</div>
                        <div className="imgInputAndFileStatus">
                            <input
                                className="product_img_update"
                                type='file'
                                name="product_img1"
                                accept="image/*"
                                onChange={(e) => {
                                    setFileUpload3(e.target.files[0].name)
                                    setImg3(e.target.files[0])}}
                            ></input>
                            <div className="fileStatus">{fileUpload3}</div>
                        </div>
                    </div>
                    <div className="img_upload_test">
                        <div>Fourth Product Image</div>
                        <div className="imgInputAndFileStatus">
                            <input
                                className="product_img_update"
                                type='file'
                                name="product_img1"
                                accept="image/*"
                                onChange={(e) => {
                                    setFileUpload4(e.target.files[0].name)
                                    setImg4(e.target.files[0])}}
                            ></input>
                            <div className="fileStatus">{fileUpload4}</div>
                        </div>
                    </div>
                    <div className="img_upload_test">
                        <div>Fifth Product Image</div>
                        <div className="imgInputAndFileStatus">
                            <input
                                className="product_img_update"
                                type='file'
                                name="product_img1"
                                accept="image/*"
                                onChange={(e) => {
                                    setFileUpload5(e.target.files[0].name)
                                    setImg5(e.target.files[0])}}
                            ></input>
                            <div className="fileStatus">{fileUpload5}</div>
                        </div>
                    </div>

                </div>
                <div className="update_submit_button">
                    <button type="submit">Update Product</button>
                </div>
            </form>
        </>
    )
}

export default UpdateProduct
