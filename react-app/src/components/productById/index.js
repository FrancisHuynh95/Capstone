import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getSingleProductThunk } from "../../store/product"
import { useParams } from "react-router-dom"

function ProductById(){
const {productId} = useParams()
const dispatch = useDispatch()
const singleProduct = useSelector(state => state.product.singleProduct)
console.log(singleProduct)
const user = useSelector(state => state.session)


useEffect(() => {
    dispatch(getSingleProductThunk(productId))
}, [dispatch])
    if(!singleProduct['1']) return null
    return (
        <>
            <div>product by id</div>
            <h3>{singleProduct['1'].name}</h3>
            <h3>{singleProduct['1'].description}</h3>
            <h3>{singleProduct['1'].price}</h3>
            <h3>{singleProduct['1'].product_img1}</h3>
            <h3>{singleProduct['1'].product_img2}</h3>
            <h3>{singleProduct['1'].product_img3}</h3>
            <h3>{singleProduct['1'].product_img4}</h3>
            <h3>{singleProduct['1'].product_img5}</h3>
            <h3>{singleProduct['1'].user.firstName}</h3>
            <h3>{singleProduct['1'].user.lastName}</h3>
        </>

    )
}

export default ProductById
