import React, { useContext, createContext, useReducer } from "react";
import Button from "./Button";
import "./styles.css";
const CounterContext = createContext();
const DispatchContext = createContext();

const SomeOtherComponent = () => {
  console.log("data");
  return <div>someother component</div>;
};

const Counter = (props) => {
  const state = useContext(CounterContext);

  console.log(state);
  return <div>Counter : {state.count}</div>;
};

const Buttons = (props) => {
  const dispatch = useContext(DispatchContext);
  const handleChange = (operation) => {
    console.log(operation);
    dispatch({
      type: operation
    });
  };
  return (
    <>
      <Button onClick={() => handleChange("incr")}>incr</Button>
      <Button onClick={() => handleChange("decr")}>Decrease</Button>
    </>
  );
};

const initialValue = { count: 0 };

const countReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "incr": {
      state = {
        count: state.count + 1
      };
      return state;
    }
    case "decr": {
      state = {
        count: state.count - 1
      };
      return state;
    }
    default:
      //console.log(state);
      return state;
  }
};

export default function App() {
  const [state, dispath] = useReducer(countReducer, initialValue);
  console.log(state);
  return (
    <CounterContext.Provider value={state}>
      <DispatchContext.Provider value={dispath}>
        <Counter />
        <Buttons props />
        <SomeOtherComponent />
      </DispatchContext.Provider>
    </CounterContext.Provider>
  );
}
