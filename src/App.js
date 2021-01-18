import React, { useState } from "react";
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
  const [count, setCount] = useState(10);

  return (
    <Provider store={store} className="App">
      {/* {setCount(store.getState().cartItem.length)} */}
      <Navbar />
      <Title />
      <Cart setCount={setCount} />
    </Provider>
  );
}

export default App;
