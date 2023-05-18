import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getAllProductsThunk } from "../../store/product"
import { NavLink } from "react-router-dom"
import "./home.css"


function Home() {
    const allProducts = useSelector(state => state.product.products)
    const allProductArray = Object.values(allProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProductsThunk())
    }, [dispatch])
    return (
        <>
            <div className="background_color_behind_images">

            <div className="home_everything_container">
                <div className="product_card_container">
                    {allProductArray.map(product =>
                        <NavLink className="Home_NavLink" to={`/products/${product.id}`}>
                            <div title={`${product.name}`} className="product_card">
                                <div className="product_img_container">
                                <img className="product_img" src={product.product_img1}></img>
                                </div>
                                <div className="product_price_container">
                                    ${product.price}
                                </div>
                            </div>
                        </NavLink>
                    )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
