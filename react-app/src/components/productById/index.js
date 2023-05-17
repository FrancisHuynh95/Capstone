import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getSingleProductThunk } from "../../store/product"
import { useParams } from "react-router-dom"

function ProductById(){
const {productId} = useParams()
const dispatch = useDispatch()
const singleProduct = useSelector(state => state.product)

useEffect(() => {
    dispatch(getSingleProductThunk(productId))
}, [dispatch])
    return (
        <div>product by id</div>
    )
}

export default ProductById
