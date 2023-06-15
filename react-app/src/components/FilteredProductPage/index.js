import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getAllProductsThunk, getFilteredProductThunk } from "../../store/product"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"


function FilteredProduct() {
    const dispatch = useDispatch()
    const unfilteredProducts = useSelector(state => state.product.filteredProduct)
    const productSet = new Set()

    useEffect(() => {
        dispatch(getAllProductsThunk())
    }, [dispatch])

    for (let product in unfilteredProducts) {
        productSet.add(unfilteredProducts[product])
    }

    const filteredProducts = Array.from(productSet)


    if(filteredProducts.length === 0) return <h1 className="userCartHeading">Product could not be found</h1>
    if(!unfilteredProducts) return <h1 className="userCartHeading">loading</h1>
    return (
        <>
            <h1 className="userCartHeading">Search Results</h1>
            <div className="product_card_container">
            {filteredProducts.map(product =>
                    <div title={`${product.name}`} className="product_card">
                        <NavLink className="Home_NavLink" to={`/product/${product.id}`}>
                            <img className="product_img" src={product.product_img1}></img>
                            <p className="product_price_container">${(product.price).toFixed(2)}</p>
                        </NavLink>
                    </div>
            )}
            </div>
        </>
    )
}

export default FilteredProduct
