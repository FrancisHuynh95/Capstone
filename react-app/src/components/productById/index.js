import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getSingleProductThunk } from "../../store/product"
import { useParams } from "react-router-dom"
import OpenModalButton from "../OpenModalButton"
import DeleteProductModal from "../deleteProductModal"
import { useHistory } from "react-router-dom"

function ProductById() {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const singleProduct = useSelector(state => state.product.singleProduct)
    const singleProductArray = Object.values(singleProduct)
    const history = useHistory()
    const user = useSelector(state => state.session.user)


    useEffect(() => {
        dispatch(getSingleProductThunk(productId))
    }, [dispatch])
    if (!singleProductArray) return <p>oopsies</p>
    return (
        <>
            {singleProductArray.map(product =>
                <div>
                    <p>Name {product.name}</p>
                    <p>Price ${product.price}</p>
                    <p>Description {product.description}</p>
                    <div className="pics-carasol">
                        <img src={`${product.product_img1}`}></img>
                        <img src={`${product.product_img2}`}></img>
                        <img src={`${product.product_img3}`}></img>
                        <img src={`${product.product_img4}`}></img>
                        <img src={`${product.product_img5}`}></img>
                    </div>
                    <div className="isUserButtons">
                        {product.user.id === user.id && <OpenModalButton
                            buttonText="Delete Product"
                            modalComponent={<DeleteProductModal
                                product_id={product.id}
                            />}
                        />}
                       {product.user.id === user.id &&  <button onClick={() => history.push(`/products/${product.id}/update`)}>Update Product</button>}
                    </div>
                </div>
            )}
        </>

    )

}

export default ProductById
