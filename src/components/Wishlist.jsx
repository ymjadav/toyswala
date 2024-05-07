import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import dummyImg from '../assets/dummyImg.jpeg'
import { Link } from "react-router-dom";
import { addToCart, removeFromWishlist } from "../redux/actions/productActions";

function WishList() {

    const wishlist = useSelector(state => state.wishlist.wishlist);
    const dispatch = useDispatch();
    console.log(wishlist);

    return (<>
        {wishlist.length > 0 ?
            (<div className="w-full flex flex-col items-center mb-10">
                <h1 className="font-semibold text-4xl m-10 font-kanit">Your Wishlist</h1>
                <div className="w-[70%] flex flex-wrap justify-center gap-8 mx-auto my-5">
                    {wishlist.map((item) => (
                        <div key={item.id}>
                            <div className="box-border w-[300px] h-[470px] rounded-lg shadow-xl shadow-gray-400">
                                <div className="flex justify-center h-[270px]">
                                    <img src={item.image} alt={item.name} onError={(e) => e.target.src = dummyImg} className="w-[278px] rounded-t-lg" />
                                </div>
                                <div className="flex flex-col bg-slate-100 h-[200px] rounded-br-lg rounded-bl-lg px-3 justify-start gap-y-[2px] relative">
                                    <h2 className="text-pretty text-[18px] font-kanit">{item.name}</h2>
                                    <h3 className="font-kanit">$ {item.price + ".00"}</h3>
                                    <Link to={`/product/${item.id}`}>
                                        <button
                                            className="absolute font-kanit top-24 w-[270px] border-2 border-black h-10 rounded transition duration-300 ease-in hover:bg-stone-900 hover:text-white hover:transition hover:duration-300 hover:ease-out"
                                        >
                                            View Product
                                        </button>
                                    </Link>
                                    <button
                                        className="absolute font-kanit top-36 bg-yellow-400 text-white w-32 h-10 rounded hover:bg-yellow-300 transition duration-500 ease-in hover:transition hover:duration-500 hover:ease-out"
                                        onClick={() => dispatch(addToCart({
                                            id: item.id,
                                            name: item.name,
                                            price: item.price,
                                            totalPrice: item.price,
                                            category: item.category,
                                            quantity: 1,
                                            image: item.image
                                        }))}
                                    >
                                        Add To Cart
                                    </button>
                                    <button
                                        className="absolute font-kanit top-36 right-5 text-red-500 border-solid border-2 border-red-500 w-32 h-10 rounded transition duration-500 ease-in hover:bg-red-500 hover:text-white hover:transition hover:duration-500 hover:ease-out hover:shadow-lg"
                                        onClick={() => dispatch(removeFromWishlist(item))}
                                    >Remove Item</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>) :
            (<div className="flex flex-col items-center justify-center h-[650px]">
                <FaRegHeart className="text-[350px] text-gray-400" />
                <h1 className="text-3xl font-bold font-kanit">No Items In Your Wishlist</h1>
            </div>
            )}
    </>);
}

export default WishList;