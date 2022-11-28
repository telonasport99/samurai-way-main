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
import {
    ActionType,
    AddPostActionType,
    DialogsType,
    MessageType,
    OnPostChangeActionType,
    PostsType
} from "./redux/store";
import {ReduxStateType} from "./redux/redux-store";
import {Dispatch} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppState = {
    state: ReduxStateType
    dispatch: Dispatch
}

function App(props: AppState) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile posts={props.state.profilePage.posts}
                                                                    newPostText={props.state.profilePage.newPostText}
                                                                    dispatch={props.dispatch}
                    />}/>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}
                                                  newMessageBody={props.state.dialogsPage.newMessageBody}
                                                  dispatch={props.dispatch}

                           />}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
    );
}


export default App;
