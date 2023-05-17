import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getSingleProductThunk } from "../../store/product"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"

function CreateProductListing() {
    const currentUser = useSelector(state => state.session.user)
    const product = useSelector(state => state.product.singleProduct)
    const history = useHistory()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [img1, setImg1] = useState(null)
    const [img2, setImg2] = useState(null)
    const [img3, setImg3] = useState(null)
    const [img4, setImg4] = useState(null)
    const [img5, setImg5] = useState(null)
    return (
        <>
            <form encType="multipart/form-data">
                <h1>Create Product Listing Component</h1>
            </form>
        </>
    )
}

export default CreateProductListing
