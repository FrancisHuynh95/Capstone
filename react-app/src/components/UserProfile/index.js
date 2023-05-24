import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllProductsThunk } from "../../store/product"
import "./userprofile.css"
import { NavLink } from "react-router-dom"
import OpenModalButton from "../OpenModalButton"
import DeleteProductModal from "../deleteProductModal"
import { useHistory } from "react-router-dom"
import UpdateReviewModal2 from "../updateReviewModal2"

const UserProfile = () => {
    const user = useSelector(state => state.session.user)
    const allProducts = useSelector(state => state.product.products)
    const allProductArray1 = Object.values(allProducts)
    console.log('allProductArray1 ==========>',allProductArray1)
    const reviewArray = []
    for(let i = 0; i < allProductArray1.length; i++){
        for(let j = 0; j < allProductArray1[i].reviews.length; j++){
            if(allProductArray1[i].reviews[j].reviewer.id === user.id){
                reviewArray.push(allProductArray1[i].reviews[j])
            }
        }
    }
    console.log(reviewArray)
    const filiteredProducts = allProductArray1.filter(product => product.user.id === user.id)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProductsThunk())
    }, [dispatch, filiteredProducts.length])


    if(!allProducts) return <p>Loading</p>
    if(!user) return <h2>Please login to view your profile</h2>
    return (
        <>
            <h1>User Profile</h1>
            <h2>My Products</h2>
            <div className="userProductsEverything">
                {filiteredProducts.map(product =>
                    <div className="userProductsContainer">
                        <NavLink exact to={`/products/${product.id}`}>
                            <p className="user_product_name">{product.name}</p>
                            <div className="UserProductPic">
                                <img className="UserProductImg" src={`${product.product_img1}`}></img>
                            </div>
                        </NavLink>
                        <div className="userButtons">
                            <button onClick={() => history.push(`/products/${product.id}/update`)}>Update</button>
                            <OpenModalButton
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
                {reviewArray.map(product =>
                    <div className="userReviewsContainer">
                        <p className="user_product_name_review">{product.product_id}</p>
                        <div className="UserReview">
                            <p className="user_product_name_review">{product.review}</p>
                            <p className="user_product_name_review">{product.star_rating}</p>
                        </div>
                        <div className="userButtons">
                        <OpenModalButton
                            buttonText={`Update Review`}
                            modalComponent={<UpdateReviewModal2
                                product_id={product.product_id}
                                review_id={product.id}
                            />}
                        />
                            <OpenModalButton
                            buttonText={`Delete Product`}
                            modalComponent={<DeleteProductModal
                                product_id={product.id}
                            />}
                        />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default UserProfile
