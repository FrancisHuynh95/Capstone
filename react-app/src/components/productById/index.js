import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getAllProductsThunk } from "../../store/product"
import { useParams, useHistory } from "react-router-dom"
import OpenModalButton from "../OpenModalButton"
import DeleteProductModal from "../deleteProductModal"
import CreateReviewModal from "../CreateReviewModal"
import DeleteReviewModal from "../DeleteReviewModal"
import UpdateReviewModal from "../updateReviewModal"
import { AddToCartThunk, getCartThunk } from "../../store/cart"
import "./productById.css"


function ProductById() {
    const { productId } = useParams()
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.product.products)
    const allProductsArray = Object.values(allProducts)
    const singleProductArray = allProductsArray?.filter(product => product.id === +productId)

    const cart = useSelector(state => state.cart.cart)
    const cartArray = Object.values(cart)
    const filteredArray = cartArray.filter(product => product.product_id === +productId)


    const history = useHistory()
    let imgArray = []
    const [bigImg, setBigImg] = useState("")
    const [submitted, setSubmitted] = useState(false)

    if (singleProductArray[0]) {
        imgArray.push(singleProductArray[0].product_img1)
        imgArray.push(singleProductArray[0].product_img2)
        imgArray.push(singleProductArray[0].product_img3)
        imgArray.push(singleProductArray[0].product_img4)
        imgArray.push(singleProductArray[0].product_img5)
    }

    useEffect(() => {
        // if(!Object.keys(allProducts).length){
            dispatch(getAllProductsThunk())
        // }
    }, [dispatch])


    useEffect(() => {
        setBigImg(imgArray.length > 0 ? imgArray[0] : "")
        dispatch(getCartThunk())
    }, [dispatch, imgArray.length, singleProductArray.reviews])


    const hasReview = () => {
        if (singleProductArray[0]) {
            return (singleProductArray[0].reviews)?.find(review => review.reviewer.id === user.id)
        }
    }

    const handleAddToCart = async (productId) => {
       await dispatch(AddToCartThunk(productId, 1)) //1 is the amount
       setSubmitted(true)
    }


    if (!singleProductArray.length) return <h1>Loading...</h1>
    return (
        <div className="singleProductContainer">
            {singleProductArray.map(product =>
                <div className="singleProduct">
                    <div className="image_and_review">
                        <div className="image_container">
                            <div className="pics-carasol">
                                <img onClick={() => setBigImg(imgArray[0])} className="product_img_product_page" src={`${product.product_img1}`} alt="Product 1"></img>
                                <img onClick={() => setBigImg(imgArray[1])} className="product_img_product_page" src={`${product.product_img2}`} alt="Product 2"></img>
                                <img onClick={() => setBigImg(imgArray[2])} className="product_img_product_page" src={`${product.product_img3}`}  alt="Product 3"></img>
                                {product.product_img4 && <img onClick={() => setBigImg(imgArray[3])} className="product_img_product_page" src={`${product.product_img4}`}  alt="Product 4"></img>}
                                {product.product_img5 && <img onClick={() => setBigImg(imgArray[4])} className="product_img_product_page" src={`${product.product_img5}`}  alt="Product 5"></img>}
                            </div>
                            <div className="the_big_image_container">
                                <img className="the_big_image" src={bigImg} alt="main img"></img>
                            </div>
                        </div>
                        <div className="isUserButtons">
                            {product.user?.id === user?.id && <button onClick={() => history.push(`/product/${product.id}/update`)}>Update Product</button>}
                            <div className="productIdDeleteProductModal">
                                {product.user?.id === user?.id &&
                                    <OpenModalButton
                                        buttonText={`Delete Product`}
                                        blackButton={true}
                                        modalComponent={<DeleteProductModal
                                            product_id={product.id}
                                        />}
                                    />}
                            </div>
                        </div>
                        <div className="show-reviews">
                        {singleProductArray[0].reviews?.length === 0 && <p>The Product doesn't have a review yet</p>}
                            <div className="createReviewInProductIdPage">
                            {user && singleProductArray[0].user?.id !== user?.id && !hasReview() &&
                                <OpenModalButton
                                buttonText="Create Review"
                                modalComponent={<CreateReviewModal productId={productId} />}
                                />
                            }
                            {singleProductArray[0] && singleProductArray[0].reviews?.toReversed().map(review =>
                                <div className="productIdReviews">
                                    <div className="reviewer_and_star_rating">
                                        {review.star_rating === 5 && <p><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> </p>}
                                        {review.star_rating === 4 && <p><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>  </p>}
                                        {review.star_rating === 3 && <p><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>  </p>}
                                        {review.star_rating === 2 && <p><i class="fas fa-star"></i> <i class="fas fa-star"></i> </p>}
                                        {review.star_rating === 1 && <p><i class="fas fa-star"></i></p>}
                                        <p className="productIdReview">{review.review}</p>
                                    </div>
                                    <p>{review.reviewer.username}</p>
                                    {review.reviewer.id === user?.id &&
                                        <div className="updateReviewButtons">
                                            <div className="updateReviewButtonInProductPage">
                                                <OpenModalButton
                                                    buttonText="Update Review"
                                                    blackButton={false}
                                                    modalComponent={<UpdateReviewModal
                                                        product_id={product.id}
                                                        review_id={review.id} />}
                                                />
                                            </div>
                                            <OpenModalButton
                                                buttonText="Delete Review"
                                                blackButton={true}
                                                modalComponent={<DeleteReviewModal
                                                    product_id={product.id}
                                                    review_id={review.id} />}
                                            />
                                        </div >
                                    }
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                    <div className="product_information">
                        <h2>{product.name}</h2>
                        <h3>Price ${(product.price).toFixed(2)}</h3>
                        <p className="userProfileProductDescription">Description {product.description}</p>
                        {user && product.user.id !== user?.id && filteredArray.length === 0 ? <button className="addToCart" onClick={() => handleAddToCart(product.id)}>Add To Cart</button> : null}
                        {submitted ? <p>{`${product.name} has been successfully added to the cart`}</p> : null}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductById
