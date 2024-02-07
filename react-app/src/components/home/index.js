import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getAllProductsThunk, clearAllProductsThunk } from "../../store/product"
import { NavLink } from "react-router-dom"
import "./home.css"


function Home() {
    const allProducts = useSelector(state => state.product.products)
    const allProductArray1 = Object.values(allProducts)
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()

    let allProductArray = allProductArray1.sort((a, b) => Math.random() - Math.random())

    // useEffect(() => {
    //     allProductArray = [];
    //     dispatch(clearAllProductsThunk());
    // },[])

    useEffect(() => {
            dispatch(getAllProductsThunk());
            setIsLoading(false);
    }, [dispatch])

    return !isLoading ? (
        <>
            <div className="product_card_container">
                {allProductArray.map(product =>
                    <>
                        <div title={`${product.name}`} className="product_card">
                            <NavLink className="Home_NavLink" to={`/product/${product.id}`}>
                                <img className="product_img" src={product.product_img1}></img>
                                <p className="product_price_container">${(product.price).toFixed(2)}</p>
                            </NavLink>
                        </div>
                    </>
                )
                }
            </div>
        </>
    ) : <h1>Loading...</h1>
}

export default Home
