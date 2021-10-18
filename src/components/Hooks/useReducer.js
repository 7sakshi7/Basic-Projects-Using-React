import React from "react";
import "./style.css";

const UseReducer = () => {

  // const initialData = 10;
  // const [myNum, setMyNum] = React.useState(initialData);

  // it also return array two elements 
  // it takes 2 arguments
  // 1. reducer fnction and initial data 
  const reducer = (state, action) => {
    if (action.type === "INCR") {
      state = state + 1;
    }
    else {
      if(state>0)
      state = state - 1;
    }
    return state;
  }
  const [state, dispatch] = React.useReducer(reducer, initialState)


  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
        <div
          class="button2" onClick={() => dispatch({ type: "DECR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREMENT
        </div>
      </div>
    </>
  );
};

export default UseReducer;

// for small task use state is best
// for big projects use reducer