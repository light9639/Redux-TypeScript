# ⚡Vite + Redux + TypeScript를 이용하여 만든 숫자 증가 예제

:octocat: https://light9639.github.io/Redux-TypeScript/
![127 0 0 1_5500_dist_index html](https://user-images.githubusercontent.com/95972251/201822840-e37b018c-2b3b-486e-a661-d18a9789f96d.png)

:sparkles: Redux, TypeScript를 이용한 숫자 증가 예제입니다. :sparkles:

## :tada: React-Typescript 생성 및, Redux 설치
- React-Typescript 생성
```bash
yarn create react-app my-app --template typescript
```

- vite를 이용하여 프로젝트를 생성하려면

```bash
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, typescirpt 선택하면 생성 완료.

## 🚝 Redux 설치
- Redux 설치 명령어
```bash
yarn add redux react-redux @reduxjs/toolkit 
```

## ✒️ App.tsx, main.tsx 작성
### :zap: App.tsx
```bash
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
```
### :zap: main.tsx
```bash
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const 초기값 = { count: 0, user: 'kim' };

const counterSlice = createSlice({
  name: 'counter',
  initialState: 초기값,
  reducers: {
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    },
    incrementByAmount(state, action: any) {
      state.count += action.payload
    }
  }
})

let store = configureStore({
  reducer: {
    counter1: counterSlice.reducer
  }
})

//state 타입을 export 해두는건데 나중에 쓸 데가 있음
export type RootState = ReturnType<typeof store.getState>

//수정방법 만든거 export
export let { increment, decrement, incrementByAmount } = counterSlice.actions

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
```
