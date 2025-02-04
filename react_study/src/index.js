import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './react_19/App';
// import ClassState from './react_04/ClassState';
// import App from './react_04/ex05_a/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'

import store from './react_18/redux/store';

// Provider : store를 props로 받아 이를 하위 컴포넌트들에게 전달함
// 하위컴포넌트들은 별도의 props 전달 없이도 store에 접근할 수 있음

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
