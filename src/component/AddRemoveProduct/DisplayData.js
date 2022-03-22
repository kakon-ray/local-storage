import React from "react";
import { Card, Button } from "react-bootstrap";
import { addLocalStrge, removeLocalStrge } from "./addLocalStrge";

const DisplayData = (props) => {
  const addtoCart = (id) => {
    addLocalStrge(id);
  };

  const reoveCart = (id) => {
    removeLocalStrge(id);
  };

  return (
    <div className="col-md-4">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <p>Id: {props.id}</p>
          <p>Price: {props.price}</p>
          <p>Name: {props.name}</p>
          <Button variant="primary" onClick={() => addtoCart(props.id)}>
            Add to Cart
          </Button>
          <hr />
          <Button variant="primary" onClick={() => reoveCart(props.id)}>
            Remove to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayData;
