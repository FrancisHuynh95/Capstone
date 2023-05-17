import React, { useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { getAllProductsThunk } from "../../store/product"


function Home(){
const allProducts = useSelector(state => state.product)
console.log('USESELECTOR ================>',allProducts)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(getAllProductsThunk())
}, [dispatch])
    return(
        <h1>Keebsy</h1>
    )
}

export default Home
