import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getAllProductsThunk } from "../../store/product"
import { NavLink } from "react-router-dom"


function Home() {
    const allProducts = useSelector(state => state.product.products)
    const allProductArray = Object.values(allProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProductsThunk())
    }, [dispatch])
    return (
        <>
            {allProductArray.map(product =>
                <NavLink to={`/products/${product.id}`}>
                    <div className="product_card">
                        <img className="product_img" src={product.product_img1}></img>
                        <div className="product_name">{product.name}</div>
                        <div className="product_price">${product.price}</div>
                    </div>
                </NavLink>
            )}
        </>
    )
}

export default Home
