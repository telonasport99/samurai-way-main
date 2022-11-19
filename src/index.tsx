import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from './redux/state'
const rerenderEntireTree =() => {
    ReactDOM.render(
        <BrowserRouter><App dialogs={store.getState().dialogsPage.dialogs}
                            posts={store.getState().profilePage.posts}
                            messages={store.getState().dialogsPage.messages}
                            newPostText={store.getState().profilePage.newPostText}
                            dispatch={store.dispatch.bind(store)}
                            newMessageBody={store.getState().dialogsPage.newMessageBody}
        />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree()
store.subscribe(rerenderEntireTree)