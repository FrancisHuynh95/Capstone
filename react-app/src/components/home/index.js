import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getAllProductsThunk } from "../../store/product"
import { NavLink } from "react-router-dom"
import "./home.css"


function Home() {
    const allProducts = useSelector(state => state.product.products)
    const allProductArray1 = Object.values(allProducts)
    const dispatch = useDispatch()

    const allProductArray = allProductArray1.sort((a, b) => Math.random() - Math.random())

    useEffect(() => {
        dispatch(getAllProductsThunk())
    }, [dispatch])
    return (
        <>
            <div className="product_card_container">
                {allProductArray.map(product =>
                    <div title={`${product.name}`} className="product_card">
                        <NavLink className="Home_NavLink" to={`/products/${product.id}`}>
                            {/* <div className="product_img_container"> */}
                            <img className="product_img" src={product.product_img1}></img>
                            {/* </div> */}
                            <div className="product_price_container">
                                ${(product.price).toFixed(2)}
                            </div>
                        </NavLink>
                    </div>
                )}
            </div>

        </>
    )
}

export default Home
