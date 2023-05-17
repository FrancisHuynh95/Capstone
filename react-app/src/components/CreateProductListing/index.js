import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { createProductThunk, getSingleProductThunk } from "../../store/product"
import { useHistory } from "react-router-dom"

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
    const [error, setError] = useState([])

    const handleAddImage1 = (e) => {
        setImg1(e.target.files[0])
    }
    const handleAddImage2 = (e) => {
        setImg2(e.target.files[0])
    }
    const handleAddImage3 = (e) => {
        setImg3(e.target.files[0])
    }
    const handleAddImage4 = (e) => {
        setImg4(e.target.files[0])
    }
    const handleAddImage5 = (e) => {
        setImg5(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const errorObj = {}

        if(name.length === 0) {
            errorObj.name = "Name is required"
        }
        if(price <= 0) {
            errorObj.price = "Price has to be greater than 0."
        }
        if(description.length === 0) {
            errorObj.description = "Description is required."
        }

        if(product_img1 === null){
            errorObj.image = "Five images are required"
        }
        if(product_img2 === null){
            errorObj.image = "Five images are required"
        }
        if(product_img3 === null){
            errorObj.image = "Five images are required"
        }
        if(product_img4 === null){
            errorObj.image = "Five images are required"
        }
        if(product_img5 === null){
            errorObj.image = "Five images are required"
        }

        setError(errorObj)
        if(Object.values(errorObj) > 0){
            return
        } else {
            const formData = new FormData()
            formData.append("name", name)
            formData.append("price", price)
            formData.append("description", description)
            formData.append("product_img1", product_img1)
            formData.append("product_img2", product_img2)
            formData.append("product_img3", product_img3)
            formData.append("product_img4", product_img4)
            formData.append("product_img5", product_img5)
            formData.append("uploader_id", currentUser.id)

            await dispatch(createProductThunk(formData))

            history.push(`/`)
        }
    }
    return (
        <>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <h1>Create Product Listing Component</h1>
                {error.name && <p className="errors">{error.name}</p>}
                {error.price && <p className="errors">{error.price}</p>}
                {error.description && <p className="errors">{error.description}</p>}
                {error.image && <p className="errors">{error.image}</p>}
                <label>
                    <div>Name</div>
                    <input id="product_name" type="text" value={name} placeholder='Product Name' onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    <div>Price</div>
                    <input id="product_price" type="number" value={price} placeholder='Product Price' onChange={(e) => setPrice(e.target.value)} />
                </label>
                <label>
                    <div>Description</div>
                    <textarea id="product_description" type="text" value={description} placeholder='Product Description' onChange={(e) => setDescription(e.target.value)} />
                </label>
                <label>
                    <div>First Product Image</div>
                    <input
                        className="product_img"
                        type='file'
                        name="product_img1"
                        accept="image/*"
                        onChange={handleAddImage1}
                    ></input>
                </label>
                <label>
                    <div>Second Product Image</div>
                    <input
                        className="product_img"
                        type='file'
                        name="product_img2"
                        accept="image/*"
                        onChange={handleAddImage2}
                    ></input>
                </label>
                <label>
                    <div>Third Product Image</div>
                    <input
                        className="product_img"
                        type='file'
                        name="product_img3"
                        accept="image/*"
                        onChange={handleAddImage3}
                    ></input>
                </label>
                <label>
                    <div>Fourth Product Image</div>
                    <input
                        className="product_img"
                        type='file'
                        name="product_img4"
                        accept="image/*"
                        onChange={handleAddImage4}
                    ></input>
                </label>
                <label>
                    <div>Fifth Product Image</div>
                    <input
                        className="product_img"
                        type='file'
                        name="product_img5"
                        accept="image/*"
                        onChange={handleAddImage5}
                    ></input>
                </label>
                <div className="submit_button">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default CreateProductListing