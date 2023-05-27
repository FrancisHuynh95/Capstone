import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { createProductThunk } from "../../store/product"
import { useHistory } from "react-router-dom"
import OpenModalButton from "../OpenModalButton"
import "./createProduct.css"

function CreateProductListing() {
    const currentUser = useSelector(state => state.session.user)
    const product = useSelector(state => state.product.singleProduct)
    const history = useHistory()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
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

    const handleAddImage1 = (e) => {
        setImg1(e.target.files[0])
        setFileUpload1(e.target.files[0].name)
    }
    const handleAddImage2 = (e) => {
        setImg2(e.target.files[0])
        setFileUpload2(e.target.files[0].name)
    }
    const handleAddImage3 = (e) => {
        setImg3(e.target.files[0])
        setFileUpload3(e.target.files[0].name)
    }
    const handleAddImage4 = (e) => {
        setImg4(e.target.files[0])
        setFileUpload4(e.target.files[0].name)
    }
    const handleAddImage5 = (e) => {
        setImg5(e.target.files[0])
        setFileUpload5(e.target.files[0].name)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!currentUser) {
            return (
                <h1>Please sign in</h1>
            )
        }
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
            errorObj.description = "Description must be at most 200 characters"
        }

        if (product_img1 === null) {
            errorObj.image = "Three images are required"
        }
        if (product_img2 === null) {
            errorObj.image = "Three images are required"
        }
        if (product_img3 === null) {
            errorObj.image = "Three images are required"
        }
        setError(errorObj)
        if (Object.values(errorObj).length > 0) {
            return
        } else {

            let price1 = ((+price).toFixed(2)).toString()
            const formData = new FormData()
            formData.append("name", name)
            formData.append("price", price1)
            formData.append("description", description)
            formData.append("product_img1", product_img1)
            formData.append("product_img2", product_img2)
            formData.append("product_img3", product_img3)
            formData.append("uploader_id", currentUser.id)
            if (product_img4 !== null) formData.append("product_img4", product_img4)
            if (product_img5 !== null) formData.append("product_img5", product_img5)

            await dispatch(createProductThunk(formData))
            history.push(`/`)
        }
    }
    return (
        <div className="create-product-rapper">
            <form id="create-product-form" encType="multipart/form-data" onSubmit={handleSubmit} method="POST" >
                <h1>Create Product Listing Component</h1>
                {error.name && <p className="errors">{error.name}</p>}
                {error.price && <p className="errors">{error.price}</p>}
                {error.description && <p className="errors">{error.description}</p>}
                {error.image && <p className="errors">{error.image}</p>}
                <label>
                    Name
                    <input id="create_product_name" className="product_name" type="text" value={name} placeholder='Product Name' onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Price
                    <input className="product_price" type="number" value={price} placeholder='Product Price' onChange={(e) => setPrice(e.target.value)} />
                </label>
                <label>
                    <div>Description</div>
                    <textarea rows={10} className="product_description" type="text" value={description} placeholder='Product Description' onChange={(e) => setDescription(e.target.value)} />
                </label>
                <div className="img_upload_area">
                    <div className="img_upload_test">
                        First Product Image
                        <div className="imgInputAndFileStatus">
                            <input
                                className="product_img_upload"
                                type='file'
                                name="product_img1"
                                accept="image/*"
                                onChange={handleAddImage1}
                            ></input>
                            <div className="fileStatus">{fileUpload1}</div>
                        </div>

                    </div>
                    <div className="img_upload_test">
                        <div>Second Product Image</div>
                        <div className="imgInputAndFileStatus">
                            <input
                                className="product_img_upload"
                                type='file'
                                name="product_img2"
                                accept="image/*"
                                onChange={handleAddImage2}
                            ></input>
                            <div className="fileStatus">{fileUpload2}</div>
                        </div>
                    </div>

                    <div className="img_upload_test">
                        <div>Third Product Image</div>
                        <div className="imgInputAndFileStatus">
                            <input
                                className="product_img_upload"
                                type='file'
                                name="product_img3"
                                accept="image/*"
                                onChange={handleAddImage3}
                            ></input>
                            <div className="fileStatus">{fileUpload3}</div>
                        </div>
                    </div>

                    <div className="img_upload_test">
                        <div>Fourth Product Image</div>
                        <div className="imgInputAndFileStatus">
                            <input
                                className="product_img_upload"
                                type='file'
                                name="product_img4"
                                accept="image/*"
                                onChange={handleAddImage4}
                            ></input>
                            <div className="fileStatus">{fileUpload4}</div>
                        </div>
                    </div>

                    <div className="img_upload_test">
                        <div>Fifth Product Image</div>
                        <div className="imgInputAndFileStatus">
                            <input
                                className="product_img_upload"
                                type='file'
                                name="product_img5"
                                accept="image/*"
                                onChange={handleAddImage5}
                            ></input>
                            <div className="fileStatus">{fileUpload5}</div>
                        </div>
                    </div>
                </div>

                <div className="submit_button">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProductListing
