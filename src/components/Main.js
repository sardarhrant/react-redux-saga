import { emptyCart, addToCart, removeToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state);
  console.log(data);
  console.log(dispatch);
  const product = {
    name: "i Phone",
    category: "mobile",
    price: 1000,
    color: "red",
  };
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(addToCart(product))}>
          Add To Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(removeToCart(product.name))}>
          Remove From Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>
          Call Product List
        </button>
      </div>
    </div>
  );
}

export default Main;
