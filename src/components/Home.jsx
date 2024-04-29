import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import { useEffect } from "react";
import { dummyData } from "../assets/dummyData/data";

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(dummyData))
  }, [])

  return (
    <div className="text-center text-4xl my-96">
      <h1>Comming Soon....</h1>
    </div>
  );
}
