import React, { useState } from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext';

const App = () => {

  let initialValue=useState(0);
  return (
    <>
      <CounterContext.Provider value={initialValue}>
        <div>
          <Parent />
        </div>
      </CounterContext.Provider>
    </>
  )
}

export default App
