import logo from "./logo.svg";
import "./App.css";
import DisplayData from "./component/AddRemoveProduct/DisplayData";
import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { getTotal } from "./component/AddRemoveProduct/addLocalStrge";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((respons) => respons.json())
      .then((data) => setProduct(data))

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const totalPrice = getTotal(product);

  return (
    <div className="App container mt-5">
      <div className="row g-4">
        <h4>Total Price: {totalPrice}</h4>
        {product.map((data, index) => {
          return (
            <React.Fragment key={data.id}>
              <DisplayData name={data.name} price={data.price} id={data.id} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default App;
