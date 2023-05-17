import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getAllProductsThunk } from "../../store/product"


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
            <div className="product_card">
                <div className="product_img">{product.product_img1}</div>
                <div className="product_name">{product.name}</div>
                <div className="product_price">${product.price}</div>
            </div>)}
        </>
    )
}

export default Home
