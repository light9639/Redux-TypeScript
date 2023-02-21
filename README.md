# ⚗️ Vite + Redux + TypeScript를 이용하여 만든 숫자 증가 예제

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
- `react-redux`에서 `useDispatch`, `useSelector`를 가져온다.
- `useDispatch`는 리덕스 파일안에 함수를 사용할 때 사용하며, `useSelector`는 데이터 값을 가져올 때 사용한다.
- 따라서 `onClick={() => { dispatch(increment()) }`이 포함된 버튼을 클릭하면 {Item.counter1.count}의 데이터값이 증가하게 된다.
```bash
import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, increment } from './main'

export default function App(): JSX.Element {

  const Item = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {...options}
      
      <div style={{ marginTop: "50px" }}>
        <button onClick={() => { dispatch(increment()) }}>Count is {Item.counter1.count}</button>
      </div>
      
      {...options}
    </div>
  );
}
```
### :zap: main.tsx
- `counterSlice`
```bash
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const initialState = { count: 0, user: 'kim' };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
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
