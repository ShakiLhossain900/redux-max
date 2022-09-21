import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "increase") {
    return{
        counter: state.counter + action.amount
    }
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//this now create our redux store
const store = createStore(counterReducer);

export default store;
