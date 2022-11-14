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
                            addPost={store.addPost.bind(store)}
                            newPostText={store.getState().profilePage.newPostText}
                            onPostChange={store.onPostChange.bind(store)}
        />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree()
store.subscribe(rerenderEntireTree)