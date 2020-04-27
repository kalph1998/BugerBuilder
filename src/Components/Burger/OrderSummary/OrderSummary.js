import React from "react";
import Aux from "../../../hoc/Auxy";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igkey => {
    return (
      <li key={igkey.toString()}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order Summary</h3>
      <p>A delicious Burger with the Following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total Price: {props.price}$</p>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
