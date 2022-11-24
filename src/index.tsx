import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store, {ReduxStateType} from './redux/redux-store'

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree()
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree()
})