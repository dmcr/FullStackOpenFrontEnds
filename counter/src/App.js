import React from 'react';

function App() {

  const counterReducer = (state, action) => {
    if (action.type === 'INCREMENT') {
      return state + 1
    }
    else if (action.type === 'DECREMENT') {
      return state - 1
    }
    else if (action.type === 'ZERO') {
      return 0
    }

    return state
  }

  return (
    <div className="counter">
    </div>
  );
}

export default App;
