function Cart() {
    return (<>
        <div className="my-4 flex">
            <div className="border border-solid border-1 border-slate-400 w-[60%] h-[600px] p-4 overflow-y-auto">

            </div>
            <div className="border border-solid border-1 border-slate-400 w-[40%] h-[600px] p-4 flex flex-col items-center justify-center gap-6">
                <h2 className="font-bold text-xl">Total Items : </h2>
                <h2 className="font-bold text-xl">Total Amount : </h2>
                <button className="bg-green-600 text-white rounded w-44 h-10 font-bold hover:bg-green-500">Place Order</button>
            </div>
        </div>
    </>);
}

export default Cart;