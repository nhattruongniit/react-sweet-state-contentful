import React from 'react';
import { createHook, createStore } from 'react-sweet-state';

const initialState = {
  count: 0
}

const actions = {
  increment: () => ({ setState, getState}) => {
    const newCount =  getState().count + 1;
    setState({
      count: newCount,
    })
  }
}

const name = 'counter';

const store = createStore({
  initialState,
  actions,
  name
})

export const useCounter = createHook(store);

const Counter = () => {
  const [state, actions] = useCounter();

  console.log(state);

  return (
    <div>
      <button type="button" onClick={actions.increment}>increment</button>
      Counter: {state.count}
    </div>
  )
}

export default Counter;