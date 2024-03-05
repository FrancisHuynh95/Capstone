import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"
import { getAllProductsThunk } from "../../store/product"
import OpenModalButton from "../OpenModalButton"
import DeleteProductModal from "../deleteProductModal"
import UpdateReviewModal2 from "../updateReviewModal2"
import DeleteReviewModal from "../DeleteReviewModal"
import "./userprofile.css"

const UserProfile = () => {
    const user = useSelector(state => state.session.user)
    const allProducts = useSelector(state => state.product.products)
    const allProductArray1 = Object.values(allProducts)
    const reviewArray = []
    const theProduct = []
    for (let i = 0; i < allProductArray1.length; i++) {
        for (let j = 0; j < allProductArray1[i].reviews.length; j++) {
            if (allProductArray1[i].reviews[j].reviewer.id === user.id) {
                reviewArray.push(allProductArray1[i].reviews[j])
                theProduct.push(allProductArray1[i])
            }
        }
    }
    const filiteredProducts = allProductArray1.filter(product => product.user.id === user.id)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProductsThunk())
    }, [dispatch, filiteredProducts.length])


    if (!allProducts) return <p>Loading</p>
    if (!user) return <h2>Please login to view your profile</h2>
    return allProducts ? (
        <>
            <h1 className="userProfileH1">User Profile</h1>
            <h2 className="userProfileH2">My Products</h2>
            <div className="userProductsEverything">
                {filiteredProducts.map(product =>
                    <div className="userProductsContainer">
                        <NavLink className="userProfileProduct" exact to={`/product/${product.id}`}>
                            <p className="user_product_name">{product.name}</p>
                            <div className="UserProductPic">
                                <img className="UserProductImg" src={`${product.product_img1}`} alt="product"></img>
                            </div>
                        </NavLink>
                        <div className="userButtons">
                            <button id="updateProductUserProfile" onClick={() => history.push(`/product/${product.id}/update`)}>Update</button>
                            <OpenModalButton
                                id="deleteProductUserProfile"
                                buttonText={`Delete Product`}
                                modalComponent={<DeleteProductModal
                                    product_id={product.id}
                                />}
                            />
                        </div>
                    </div>
                )}
            </div>
            <div className="userReviews">
                <h2>My Reviews</h2>
                {reviewArray.map((product, i) =>
                    <div className="userReviewsContainer">
                        {product.star_rating === 5 && <p><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> </p>}
                        {product.star_rating === 4 && <p><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>  </p>}
                        {product.star_rating === 3 && <p><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>  </p>}
                        {product.star_rating === 2 && <p><i class="fas fa-star"></i> <i class="fas fa-star"></i> </p>}
                        {product.star_rating === 1 && <p><i class="fas fa-star"></i></p>}
                        <div className="UserReview">
                            <p className="user_product_name_review">{theProduct[i].name}</p>
                            <p className="user_product_name_review">{product.review}</p>
                        </div>
                        <div className="userButtonsReview">
                            <div className="userUpdateReviewModal">
                                <OpenModalButton
                                    buttonText={`Update Review`}
                                    modalComponent={<UpdateReviewModal2
                                        product_id={product.product_id}
                                        review_id={product.id}
                                    />}
                                />
                            </div>
                            <div className="userDeleteReviewModal">
                                <OpenModalButton
                                    buttonText={`Delete Review`}
                                    modalComponent={<DeleteReviewModal
                                        review_id={product.id}
                                        product_id={product.product_id}
                                    />}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    ) :
        <img src="../spinner.svg" alt="Loading"></img>
}

export default UserProfile
