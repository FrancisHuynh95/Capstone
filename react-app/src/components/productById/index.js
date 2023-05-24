import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getSingleProductThunk } from "../../store/product"
import { useParams } from "react-router-dom"
import OpenModalButton from "../OpenModalButton"
import DeleteProductModal from "../deleteProductModal"
import { useHistory } from "react-router-dom"
import "./productById.css"
import { useState } from "react"
import CreateReviewModal from "../CreateReviewModal"
import DeleteReviewModal from "../DeleteReviewModal"
import UpdateReviewModal from "../updateReviewModal"

function ProductById() {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const singleProduct = useSelector(state => state.product.singleProduct)
    const singleProductArray = Object.values(singleProduct)

    console.log(singleProductArray)

    const history = useHistory()
    const user = useSelector(state => state.session.user)
    let imgArray = []
    const [bigImg, setBigImg] = useState("")


    if (singleProductArray[0]) {
        imgArray.push(singleProductArray[0].product_img1)
        imgArray.push(singleProductArray[0].product_img2)
        imgArray.push(singleProductArray[0].product_img3)
        imgArray.push(singleProductArray[0].product_img4)
        imgArray.push(singleProductArray[0].product_img5)
    }

    useEffect(() => {
        setBigImg(imgArray.length > 0 ? imgArray[0] : "")
        dispatch(getSingleProductThunk(productId))
    }, [dispatch, imgArray.length, singleProductArray.reviews])

    if (!singleProductArray) return <p>oopsies</p>
    return (
        <>
            {singleProductArray.map(product =>
                <div className="singleProduct">
                    <div className="product_information">
                        <p>Name {product.name}</p>
                        <p>Price ${(product.price).toFixed(2)}</p>
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
                        {product.user.id === user?.id && <button onClick={() => history.push(`/products/${product.id}/update`)}>Update Product</button>}
                        {product.user.id === user?.id &&
                        <OpenModalButton
                            buttonText={`Delete Product`}
                            modalComponent={<DeleteProductModal
                                product_id={product.id}
                            />}
                        />}
                    </div>
                    <div className="show-reviews">
                        {singleProductArray[0] && singleProductArray[0].reviews.toReversed().map(review =>
                            <>
                                <div className="reviewer_and_star_rating">
                                    {review.star_rating === 5 && <p><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> </p>}
                                    {review.star_rating === 4 && <p><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>  </p>}
                                    {review.star_rating === 3 && <p><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>  </p>}
                                    {review.star_rating === 2 && <p><i class="fas fa-star"></i> <i class="fas fa-star"></i> </p>}
                                    {review.star_rating === 1 && <p><i class="fas fa-star"></i></p>}
                                    <p>{review.review}</p>
                                </div>
                                <p>{review.reviewer.username}</p>
                                {review.reviewer.id === user?.id &&
                                    <div className="updateReviewButtons">
                                        <OpenModalButton
                                            buttonText="Update Review"
                                            modalComponent={<UpdateReviewModal product_id={product.id} review_id={review.id} />}
                                        />
                                        <OpenModalButton
                                            buttonText="Delete Review"
                                            modalComponent={<DeleteReviewModal product_id={product.id} review_id={review.id} />}
                                        />
                                    </div >
                                }
                            </>
                        )}
                        {singleProductArray[0].reviews.length === 0 &&
                            <>
                                <p>The Product doesn't have a review yet</p>
                                {user && singleProductArray[0].user.id !== user?.id &&
                                    <OpenModalButton
                                        buttonText="Create Review"
                                        modalComponent={<CreateReviewModal productId={productId} />}
                                    />
                                }
                            </>
                        }

                    </div>
                </div>
            )}
        </>

    )

}

export default ProductById
