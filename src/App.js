import "./App.css";
import Navbar from "./templates/Navbar";
import Title from "./templates/Title";
import Cart from "./templates/Cart";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";
// redux setup

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store} className="App">
      <Navbar />
      <Title />
      <Cart />
    </Provider>
  );
}

export default App;
