import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";
ReactDOM.render(
    <App  dialogs={state.dialogsPage.dialogs}
          posts={state.profilePage.posts}
          messages={state.dialogsPage.messages} />,
  document.getElementById('root')
);