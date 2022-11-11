import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, increment } from './main'

function App() {

  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {꺼내온거.counter1.count}
      <button onClick={() => { dispatch(increment()) }}>버튼</button>
    </div>
  );
}

export default App
