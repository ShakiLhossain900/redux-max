import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch()

  const counter = useSelector((state) => state.counter); //resive the state manage by redux
  //it's retuen the redux state

 const incremnetHandler= () => {
  dispatch({type: "increment",})
 }
 const decrementHandler= () => {
  dispatch({type: "decrement",})
 }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incremnetHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
//i have to re check the logic and the code
//than go for the next