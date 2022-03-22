import React from "react";
import { Card, Button } from "react-bootstrap";

const DisplayData = (props) => {
  const productAdd = (id) => {
    const product = localStorage.getItem(id);
    if (product) {
      console.log("already exict");
      const newQuentity = parseInt(product) + 1;
      localStorage.setItem(id, newQuentity);
    } else {
      localStorage.setItem(id, 1);
    }
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
