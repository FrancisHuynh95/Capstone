import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleProductThunk } from "../../store/product"

function UpdateProduct() {
    const currentProduct = useSelector(state => state.product.singleProduct)
    const currentProductArray = Object.values(currentProduct)
    const dispatch = useDispatch()
    const { productId } = useParams()

    const [name, setName] = useState(currentProductArray[0]?.name)
    const [price, setPrice] = useState(currentProductArray[0]?.price)
    const [description, setDescription] = useState(currentProductArray[0]?.description)
    const [product_img1, setImg1] = useState(null)
    const [product_img2, setImg2] = useState(null)
    const [product_img3, setImg3] = useState(null)
    const [product_img4, setImg4] = useState(null)
    const [product_img5, setImg5] = useState(null)
    const [error, setError] = useState([])

    useEffect(() => {
        dispatch(getSingleProductThunk(productId))
    }, [dispatch])

    useEffect(() => {
        if(currentProductArray){
            setName(currentProductArray[0].name)
            setPrice(currentProductArray[0].price)
            setDescription(currentProductArray[0].description)
        }
    }, [productId, name, price, description])

    function handleUpdateButton(){
        console.log('weeeeenis')
    }


    if (!currentProduct) return null
    return (
        <>
            <h1>Update Product</h1>
            <div>
                <label>
                    <div>Name</div>
                    <input type="text" value={name} placeholder="Name"></input></label>
            </div>
            <div>
                <label>
                    <div>price</div>
                    <input type="text" value={price} placeholder="Price"></input></label>
            </div>
            <div>
                <label>
                    <div>Description</div>
                    <textarea value={description} placeholder="Description"></textarea>
                </label>
            </div>
            <div>
            <label>
                    <div>First Product Image</div>
                    <input
                        className="product_img"
                        type='file'
                        name="product_img1"
                        accept="image/*"
                        onChange={(e) => setImg1(e.target.files[0])}
                    ></input>
                </label>
            <label>
                    <div>Second Product Image</div>
                    <input
                        className="product_img"
                        type='file'
                        name="product_img1"
                        accept="image/*"
                        onChange={(e) => setImg2(e.target.files[0])}
                    ></input>
                </label>
            <label>
                    <div>Three Product Image</div>
                    <input
                        className="product_img"
                        type='file'
                        name="product_img1"
                        accept="image/*"
                        onChange={(e) => setImg3(e.target.files[0])}
                    ></input>
                </label>
            <label>
                    <div>Four Product Image</div>
                    <input
                        className="product_img"
                        type='file'
                        name="product_img1"
                        accept="image/*"
                        onChange={(e) => setImg4(e.target.files[0])}
                    ></input>
                </label>
            <label>
                    <div>Five Product Image</div>
                    <input
                        className="product_img"
                        type='file'
                        name="product_img1"
                        accept="image/*"
                        onChange={(e) => setImg5(e.target.files[0])}
                    ></input>
                </label>
            </div>
            <div>
            <button onClick={() => handleUpdateButton()}>Update Product</button>
            </div>
        </>
    )
}

export default UpdateProduct
