import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getAllProductsThunk } from "../../store/product"
import { NavLink } from "react-router-dom"
import OpenModalButton from "../OpenModalButton"
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
                    <>
                        <div title={`${product.name}`} className="product_card">
                            <NavLink className="Home_NavLink" to={`/products/${product.id}`}>
                                <img className="product_img" src={product.product_img1}></img>
                                <p className="product_price_container">${(product.price).toFixed(2)}</p>
                            </NavLink>
                        </div>
                    </>
                )
                }
            </div>

        </>
    )
}

export default Home
