import React, { Fragment, useReducer } from "react";
import counterReducer from "../../reducers/counterReducer";
import { increaseAction, decreaseAction } from "../../actions/counterActions";

const INTIAL_STATE = {
  quantity: 0,
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, INTIAL_STATE);

  return (
    <Fragment>
      Quantity: {state.quantity}
      <button onClick={() => dispatch(increaseAction())}>+</button>
      <button onClick={() => dispatch(decreaseAction())}>-</button>
    </Fragment>
  );
};

export default Counter;
