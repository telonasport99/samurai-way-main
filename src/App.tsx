import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import {AddPostActionType, DialogsType, MessageType, OnPostChangeActionType, PostsType} from "./redux/state";

type AppState = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>,
    posts: Array<PostsType>
    newPostText:string
    dispatch:(action: AddPostActionType|OnPostChangeActionType)=>void
}

function App(props: AppState) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile posts={props.posts}
                                                                    newPostText={props.newPostText}
                                                                    dispatch={props.dispatch}
                    />}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
    );
}


export default App;
