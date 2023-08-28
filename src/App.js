import logo from "./logo.svg";
import "./App.css";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  console.log(dispatch);
  const product = {
    name: "i Phone",
    category: "mobile",
    price: 1000,
    color: "red",
  };
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Click</button>
    </div>
  );
}

export default App;
