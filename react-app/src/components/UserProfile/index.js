import { useEffect } from "react"
import { useSelector, useDispatch  } from "react-redux"
import { getAllProductsThunk } from "../../store/product"
import "./userprofile.css"

const UserProfile = () => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProductsThunk())
    }, [])


    return (
        <>
            <h1>User Profile</h1>
            <h2>My Products</h2>
            <div className="userProductsEverything">
                {user.product.map(product =>
                    <div className="userProductsContainer">
                        <p className="user_product_name">{product.name}</p>
                        <div className="UserProductPic">
                        <img className="UserProductImg" src={`${product.product_img1}`}></img>
                        </div>
                        <div className="userButtons">
                        <button>Update</button>
                        <button>Delete</button>
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
