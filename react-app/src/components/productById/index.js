import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getSingleProductThunk } from "../../store/product"
import { useParams } from "react-router-dom"
import OpenModalButton from "../OpenModalButton"
import DeleteProductModal from "../deleteProductModal"
import { useHistory } from "react-router-dom"
import "./productById.css"
import { useState } from "react"

function ProductById() {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const singleProduct = useSelector(state => state.product.singleProduct)
    const singleProductArray = Object.values(singleProduct)
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    let imgArray = []
    const [bigImg, setBigImg] = useState("")

    if(singleProductArray[0]){
        imgArray.push(singleProductArray[0].product_img1)
        imgArray.push(singleProductArray[0].product_img2)
        imgArray.push(singleProductArray[0].product_img3)
        imgArray.push(singleProductArray[0].product_img4)
        imgArray.push(singleProductArray[0].product_img5)
        console.log('imgArray',imgArray)
    }

    useEffect(() => {
        setBigImg(imgArray.length > 0 ? imgArray[0] : "")
        dispatch(getSingleProductThunk(productId))
    }, [dispatch, imgArray.length])
    if (!singleProductArray) return <p>oopsies</p>
    return (
        <>
            {singleProductArray.map(product =>
                <div>
                    <div className="product_information">
                        <p>Name {product.name}</p>
                        <p>Price ${product.price}</p>
                        <p>Description {product.description}</p>
                    </div>
                    <div className="image_container">
                        <div className="pics-carasol">
                            <img onClick={() => setBigImg(imgArray[0])} className="product_img_product_page" src={`${product.product_img1}`}></img>
                            <img onClick={() => setBigImg(imgArray[1])} className="product_img_product_page" src={`${product.product_img2}`}></img>
                            <img onClick={() => setBigImg(imgArray[2])} className="product_img_product_page" src={`${product.product_img3}`}></img>
                            {product.product_img4 && <img onClick={() => setBigImg(imgArray[3])} className="product_img_product_page" src={`${product.product_img4}`}></img>}
                            {product.product_img5 && <img onClick={() => setBigImg(imgArray[4])} className="product_img_product_page" src={`${product.product_img5}`}></img>}
                        </div>
                        <div className="the_big_image_container">
                        <img className="the_big_image" src={bigImg}></img>
                        </div>
                    </div>
                    <div className="isUserButtons">
                        {product.user.id === user.id && <OpenModalButton
                            buttonText="Delete Product"
                            modalComponent={<DeleteProductModal
                                product_id={product.id}
                            />}
                        />}
                        {product.user.id === user.id && <button onClick={() => history.push(`/products/${product.id}/update`)}>Update Product</button>}
                    </div>
                </div>
            )}
        </>

    )

}

export default ProductById
