import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './reducers';
import App from "./components/App";
import style from "./main.css";

const store = createStore(mainReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById("app"));