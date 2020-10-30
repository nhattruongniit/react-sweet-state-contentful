import React from 'react';

import { useCounter } from './stores/useCounter';

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