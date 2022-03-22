import React from "react";
import { Card, Button } from "react-bootstrap";

const DisplayData = (props) => {
  const productAdd = (id) => {
    let shopingCart = {};
    // get the shopping cart

    const storedCart = localStorage.getItem("Shoping-Cart");
    if (storedCart) {
      shopingCart = JSON.parse(storedCart);
    } else {
      shopingCart = {};
    }

    // add quentity
    const quentity = shopingCart[id];
    if (quentity) {
      const newQuentity = quentity + 1;
      shopingCart[id] = newQuentity;
      //   localStorage.setItem(id, newQuentity);
    } else {
      shopingCart[id] = 1;
    }
    localStorage.setItem("Shoping-Cart", JSON.stringify(shopingCart));
  };
  return (
    <div className="col-md-4">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <p>Id: {props.id}</p>
          <p>Price: {props.price}</p>
          <p>Name: {props.name}</p>
          <Button variant="primary" onClick={() => productAdd(props.id)}>
            Add Product
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayData;
