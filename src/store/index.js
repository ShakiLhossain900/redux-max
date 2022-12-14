import { configureStore, createSlice } from "@reduxjs/toolkit";

//redux toolkit counter
const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter", //name of createSlice
  initialState: initialCounterState,
  reducers: {
    //this is reducer object
    increment(state) {
      state.counter++;
    }, //method   this method automatically recive redux state
    decrement(state) {
      state.counter--;
    }, //method //ai method golote acction bola lage na agolo automatically bole dey kon action hocce
    increase(state, action) {
      state.counter = state.counter + action.payload;
    }, //method
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});



//redux toolkit authentication 
const initialAuthnState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthnState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//redux toolkit automatic create the aciton to dispatch aciton
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
  //reducer:{counter: counterSlice.reducer}   //map of the reducer or object system y pass kora jabe
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
































































// //redux
// const initialState = {counter: 0, showCounter: true}
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// //this now create our redux store
// const store = createStore(counterReducer);

// export default store;
