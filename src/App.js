import logo from "./logo.svg";
import "./App.css";
import DisplayData from "./component/AddRemoveProduct/DisplayData";
import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((respons) => respons.json())
      .then((data) => setState(data))

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App container mt-5">
      <div className="row g-3">
        {state.map((data, index) => {
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
