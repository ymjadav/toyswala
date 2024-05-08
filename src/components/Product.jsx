import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dummyImg from '../assets/dummyImg.jpeg'
import { useEffect } from "react";
import { addToCart, addToWishList, setProducts } from "../redux/actions/productActions";
import { dummyData } from "../assets/dummyData/data";
import LazyLoad from "react-lazyload";


function Product() {

  const products = useSelector(state => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(dummyData))
  }, [])

  const renderList = products.map((product) => {
    const { id, name, price, image, category } = product;
    return (<div key={id}>
      <div className="box-border w-[300px] h-[470px] rounded-lg shadow-xl shadow-gray-400 transition duration-300 ease-in  hover:transition hover:duration-300 hover:ease-out">
        <LazyLoad height={270}>
          <div className="flex justify-center h-[270px]">
            <img src={image?.src || dummyImg} alt={image?.alt} className="w-[278px] rounded-t-lg" onError={(e) => e.target.src = dummyImg} />
          </div>
        </LazyLoad>
        <div className="flex flex-col bg-slate-100 h-[200px] rounded-br-lg rounded-bl-lg px-3 justify-start gap-y-[2px] relative">
          <h2 className="text-[18px]  text-pretty">{name}</h2>
          <h3 className="text-[20px] font-bold absolute top-14">$ {price + ".00"}</h3>
          <Link to={`/product/${id}`}>
            <button
              className="absolute top-24 w-[270px] border-2 border-black h-10 rounded transition duration-500 ease-in  hover:transition hover:duration-500 hover:ease-out hover:bg-stone-900 hover:text-white"
            >View Product</button>
          </Link>
          <button
            className="absolute top-36 bg-yellow-400 text-white w-32 h-10 rounded hover:bg-yellow-300 transition duration-500 ease-in hover:transition hover:duration-500 hover:ease-out"
            onClick={() => dispatch(addToCart({
              id: id,
              name: name,
              price: price,
              totalPrice: price,
              category: category,
              quantity: 1,
              image: image?.src || dummyImg,
            }))}
          >Add To Cart</button>
          <button
            className="absolute top-36 right-5 text-yellow-500 border-solid border-2 border-yellow-400 w-32 h-10 rounded transition duration-500 ease-in hover:bg-yellow-400 hover:text-white hover:transition hover:duration-500 hover:ease-out hover:shadow-lg"
            onClick={() => dispatch(addToWishList({
              id: id,
              name: name,
              price: price,
              category: category,
              image: image?.src || dummyImg
            }))}
          >Add To Wishlist</button>
        </div>
      </div>
    </div>)
  })

  return (<>
    <div className="flex gap-8 flex-wrap justify-center mx-auto w-[70%] mt-5 mb-5 font-kanit">
      {renderList}
    </div>
  </>);
}

export default Product;
