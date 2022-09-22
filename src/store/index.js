import { createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";


//redux toolkit 
const initialState = {counter: 0, showCounter: true}
createSlice({ 
name: "counter", //name of createSlice
initialState,
reducers:{       //this is reducer object
  increment(){},  //method   this method automatically recive redux state
  decrement(){}, //method
  increase(){}, //method
  toggleCounter (){} 
}
})



//redux 
//const initialState = {counter: 0, showCounter: true}
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter:state.showCounter,
    };
  }
  if (action.type === "increase") {
    return{
        counter: state.counter + action.amount,
        showCounter:state.showCounter,
    }
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter:state.showCounter,
    };
  }
  if(action.type === "toggle"){
    return {
        showCounter:!state.showCounter,
        counter: state.counter
    }
  }
  return state;
};

//this now create our redux store
const store = createStore(counterReducer);

export default store;
