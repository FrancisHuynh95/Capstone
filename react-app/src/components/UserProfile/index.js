import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllProductsThunk } from "../../store/product"
import "./userprofile.css"
import { NavLink } from "react-router-dom"
import OpenModalButton from "../OpenModalButton"
import DeleteProductModal from "../deleteProductModal"
import { useHistory } from "react-router-dom"

const UserProfile = () => {
    const user = useSelector(state => state.session.user)
    const allProducts = useSelector(state => state.product.products)
    const allProductArray1 = Object.values(allProducts)
    const filiteredProducts = allProductArray1.filter(product => product.user.id === user.id)
    console.log('filtered products =============>', filiteredProducts)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProductsThunk())
    }, [dispatch, filiteredProducts.length])


    if(!user || !allProducts) return <p>Loading</p>
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
                {user.reviews.map(product =>
                    <div className="userReviewsContainer">
                        <p className="user_product_name_review">{product.product_id}</p>
                        <div className="UserReview">
                            <p className="user_product_name_review">{product.review}</p>
                            <p className="user_product_name_review">{product.star_rating}</p>
                        </div>
                        <div className="userButtons">
                            <button>Update</button>
                            <button>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default UserProfile
