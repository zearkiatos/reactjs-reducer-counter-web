import { COUNTER_TYPES } from "../types";
const increaseAction = () => ({
  type: COUNTER_TYPES.INCREASE,
});

const decreaseAction = () => ({
  type: COUNTER_TYPES.DECREASE,
});

export {
  increaseAction,
  decreaseAction,
};
