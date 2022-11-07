import React from 'react';
import './index.css';
import {state, subscribe} from "./redux/state";
import {addPost, RootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
const rerenderEntireTree =(state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter><App dialogs={state.dialogsPage.dialogs}
                            posts={state.profilePage.posts}
                            messages={state.dialogsPage.messages}
                            addPost={addPost}
                            newPostText={state.profilePage.newPostText}

        />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(state)
subscribe(rerenderEntireTree)