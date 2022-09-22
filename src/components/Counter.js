import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import {counterActions} from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter); //resive the state manage by redux
  //it's retuen the redux state
 
  //i want to get  the value of show counter
  const show = useSelector((state) => state.showCounter);

  const incremnetHandler = () => {
    //dispatch({ type: "increment" });   //this dispatch for normal redux
    dispatch(counterActions.increment())
  };
  const increseHandler = () => {
    // dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increase(10))   //{type: some_uniquw_identifier, payload:10}

  };
  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement())

  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter())

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incremnetHandler}>Increment</button>
        <button onClick={increseHandler}>Increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// class base components i never used 012 redux with class based components
