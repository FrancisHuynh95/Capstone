import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getSingleProductThunk } from "../../store/product"
import { useParams } from "react-router-dom"
import OpenModalButton from "../OpenModalButton"
import DeleteProductModal from "../deleteProductModal"

function ProductById() {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const singleProduct = useSelector(state => state.product.singleProduct)
    const singleProductArray = Object.values(singleProduct)
    console.log(singleProductArray)
    console.log(singleProduct)
    const user = useSelector(state => state.session)


    useEffect(() => {
        dispatch(getSingleProductThunk(productId))
    }, [dispatch])
    if (!singleProductArray) return <p>oopsies</p>
    return (
        <>
            {singleProductArray.map(product =>
                <div>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <p>{product.product_img1}</p>
                    <p>{product.product_img2}</p>
                    <p>{product.product_img3}</p>
                    <p>{product.product_img4}</p>
                    <p>{product.product_img5}</p>
                    <OpenModalButton
                    buttonText="Delete Product"
                    modalComponent={<DeleteProductModal
                        product_id={product.id}
                        />}
                    />
                </div>
            )}
        </>

    )

}

export default ProductById
