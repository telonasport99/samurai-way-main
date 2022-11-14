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
import {DialogsType, MessageType, PostsType} from "./redux/state";

type AppState = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>,
    posts: Array<PostsType>
    addPost:(postMessage:string)=>void
    newPostText:string
    onPostChange:(newPostText:string)=>void
}

function App(props: AppState) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile posts={props.posts}
                                                                    addPost={props.addPost}
                                                                    newPostText={props.newPostText}
                                                                    onPostChangeCallback={props.onPostChange}/>}/>
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
