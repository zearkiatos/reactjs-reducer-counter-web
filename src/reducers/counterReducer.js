import { COUNTER_TYPES } from "../types";

const actionType = {
  [COUNTER_TYPES.INCREASE]: (state) => ({
    quantity: state.quantity + 1,
  }),
  [COUNTER_TYPES.DECREASE]: (state) => ({
    quantity: state.quantity - 1,
  }),
};
const counterReducer = (state, action) => {
  if (actionType[action.type]) return actionType[action.type](state);
  throw new Error();
};

export default counterReducer;
