import { useState } from "react"

function CartItemCard({ item, allProducts }) {
    const [quantity, setQuantity] = useState(item.quantity)

    const updateCart = () => {
        console.log('updateCart needs ===>, cartId, productId, quantity')
    }

    const removeCart = () => {
        console.log('remove')
    }

    const filteredProducts = (products) => {
        const singleProduct = Object.values(allProducts)?.filter(product => product.id === products.id)
        return (
            <>
                <p>{singleProduct[0]?.name}</p>
                <p>$ {(singleProduct[0]?.price)?.toFixed(2)}</p>
            </>
        )
    }
    return (<div className="each-product">
        {filteredProducts(item)}
        <p>productId {item.product_id}</p>
        <p>quantity {item.quantity}</p>
        <input type="number" onChange={e => setQuantity(e.target.value)} value={quantity}></input>
        <div className="update-remove">
            <button onClick={() => updateCart(item.product_id)}>Update</button>
            <button onClick={() => removeCart(item.product_id)}>Remove</button>
        </div>
    </div>)
}

export default CartItemCard
