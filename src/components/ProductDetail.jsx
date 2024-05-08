// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, removeSelectedProduct, selectedProduct } from "../redux/actions/productActions";
import { useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { dummyData } from "../assets/dummyData/data";
import dummyIng from '../assets/dummyImg.jpeg'

function ProductDetail() {

    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { productId } = useParams();
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const { name, price, image, description, category, inStock } = product;

    const fetchProductDetails = async () => {
        const productData = dummyData.find(item => item.id === parseInt(productId));
        dispatch(selectedProduct(productData));
    }

    useEffect(() => {
        if (productId && productId !== '') {
            fetchProductDetails()
        }
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return (<>
            <div className="flex justify-center items-center h-screen"><FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="fidget-spinner-loading"
                wrapperStyle={{}}
                wrapperClass="fidget-spinner-wrapper"
            /></div>
        </>)
    }

    const decQuantity = () => {
        if (quantity === 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1);
        }
    }

    const incQuanity = () => {
        setQuantity(quantity + 1);
    }


    return (<>
        <div className="flex justify-center mt-20 mb-20 font-kanit">
            <div className="w-[48%] flex justify-center items-center">
                <img src={image?.src} alt={image?.alt} className="h-[500px] transition duration-500 ease-in-out rounded" onError={(e) => e.target.src = dummyIng} />
            </div>
            <div className="flex flex-col justify-center gap-y-3 w-[48%] ps-9">
                <h1 className="font-bold text-3xl">{name}</h1>
                <h2 className="font-bold text-red-600 text-2xl">$ {price}</h2>
                <h2 className="font-bold text-xl text-slate-400">{category}</h2>
                <p className="text-gray-500">{description}</p>
                <div className="flex items-center justify-evenly border border-1 border-black h-10 w-[100px]">
                    <button
                        className="text-xl hover:text-yellow-400"
                        onClick={() => decQuantity()}
                    >-</button>
                    {quantity}
                    <button
                        className="text-xl hover:text-yellow-400"
                        onClick={() => incQuanity()}
                    >+</button>
                </div>
                <p className={inStock ? "text-md text-green-600 font-bold" : "text-md text-red-600 font-bold"}>{inStock ? "In Stock" : "Out Of Stock"}</p>
                <div className="flex gap-10">
                    <button
                        className={inStock ? "bg-green-600 w-[200px] h-[40px] text-white font-bold rounded-lg transition ease-in duration-300 hover:bg-green-500 hover:transition hover:ease-out hover:duration-300" : "bg-green-600 w-[200px] h-[40px] text-white font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"}
                        disabled={!inStock}
                        onClick={() => dispatch(addToCart({
                            id: parseInt(productId),
                            name: name,
                            price: price,
                            totalPrice: price,
                            category: category,
                            quantity: quantity,
                            image: image?.src || dummyIng,
                        }))}
                    >Add To Cart</button>

                    <button className="border-solid border-2 border-yellow-400 text-yellow-400 w-[200px] h-[40px] font-bold transition ease-in duration-300 hover:text-yellow-500 hover:transition hover:ease-out hover:duration-300 hover:rounded">Add To Wishlist</button>
                </div>

            </div>
        </div>
    </>);
}

export default ProductDetail;