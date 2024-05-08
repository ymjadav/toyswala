import { PiShoppingCartDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart, placeOrder, removeFromCart } from "../redux/actions/productActions";
import { MdOutlineDeleteSweep } from "react-icons/md";

function Cart() {

    const cart = useSelector(state => state.cart.cart);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    const dispatch = useDispatch();

    const handlePlaceOrder = () => {
        dispatch(placeOrder(cart));
    }



    return (<>
        {cart.length > 0 ?
            (<div className="w-full flex flex-col items-center">
                <h1 className="font-semibold text-4xl m-10 text-center">Your Cart</h1>
                <div className='w-[80%]  my-10 border border-t-2 border-b-2 border-r-0 border-l-0'>
                    {cart.map((item, index) => (
                        <div key={index} className="flex justify-center gap-10 py-10">
                            <img src={item?.image} alt={item.name} className="h-[150px] rounded-md" />
                            <div className="w-[50%] flex flex-col gap-9">
                                <h3 className="font-semibold text-xl">{item.name}</h3>
                                <h3 className="font-semibold text-md">$ {item.price + ".00"}</h3>
                            </div>
                            <div className="flex justify-evenly gap-7">
                                <div className="flex items-center justify-evenly border border-1 border-black h-10 w-[100px]">
                                    <button
                                        className="text-xl hover:text-yellow-400"
                                        onClick={() => dispatch(removeFromCart(item))}
                                    >-</button>
                                    {item.quantity}
                                    <button
                                        className="text-xl hover:text-yellow-400"
                                        onClick={() => dispatch(addToCart({
                                            id: item.id,
                                            name: item.name,
                                            price: item.price,
                                            category: item.category,
                                            quantity: 1,
                                            image: item.image,
                                            totalPrice: item.totalPrice
                                        }))}
                                    >+</button>
                                </div>
                                <MdOutlineDeleteSweep
                                    className="mt-2 text-xl cursor-pointer transition ease-out duration-300 hover:text-red-600 hover:transition hover:ease-in hover:duration-300"
                                    onClick={() => dispatch(deleteFromCart(item))}
                                />
                            </div>
                            <div className="flex items-center h-10">
                                <h2 className="text-md font-semibold">$ {item.totalPrice + ".00"}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-end gap-3 w-[80%] my-10">
                    <h1 className="text-xl">Total Items {" "} <span className="text-slate-400">{totalQuantity}</span></h1>
                    <h1 className="text-xl">Subtotal {" "} <span className="text-slate-400"> $ {totalPrice + ".00"} </span></h1>
                    <h1 className="text-slate-400 font-light">Taxes and shipping calculated at checkout</h1>

                    <button
                        className="w-[300px] bg-black text-white font-bold h-10 rounded transition ease-out duration-300 hover:bg-slate-800 hover:transition hover:ease-in hover:duration-300"
                        onClick={() => handlePlaceOrder()}
                    >
                        Check Out
                    </button>
                </div>
            </div>) :
            (<div className='flex flex-col items-center justify-center h-[650px]'>
                <PiShoppingCartDuotone className='text-[350px] text-gray-400' />
                <h1 className='font-bold text-3xl'>Your cart is empty</h1>
            </div>)
        }
    </>);
}

export default Cart;