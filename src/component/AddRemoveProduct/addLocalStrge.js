import React from "react";

const addLocalStrge = (id) => {
  let shopingCart = {};

  // get and check valu localstroge i
  const storedCart = localStorage.getItem("Shoping-Cart");
  if (storedCart) {
    shopingCart = JSON.parse(storedCart);
  }

  //if old product leave then add new quentity
  const quentity = shopingCart[id];
  if (quentity) {
    const newQuentity = quentity + 1;
    shopingCart[id] = newQuentity;
    // localStorage.setItem(id, newQuentity);
  } else {
    shopingCart[id] = 1;
  }
  localStorage.setItem("Shoping-Cart", JSON.stringify(shopingCart));
};

const removeLocalStrge = (id) => {
  // get and check valu localstroge i
  const storedCart = localStorage.getItem("Shoping-Cart");
  if (storedCart) {
    const shopingCart = JSON.parse(storedCart);
    if (id in shopingCart) {
      delete shopingCart[id];
      localStorage.setItem("Shoping-Cart", JSON.stringify(shopingCart));
    } else {
      console.log("Do not Value Shoping cart");
    }
  }
};

export { addLocalStrge, removeLocalStrge };
