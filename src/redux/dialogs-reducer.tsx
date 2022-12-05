import React from "react";
import state, {
    ActionType, DialogsPageType,
    DialogsType,
    MessageType,
    PostsType,
    RootStateType,
    SendMessageType,
    UpdateNewMessageType
} from "./store";
import profileReducer from "./profile-reducer";

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Dimy'},
        {id: 3, name: 'Dimyh'}
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hi'},
        {id: 3, message: 'hi'}
    ],
    newMessageBody: ''
}
type dialogsReducerType = (state:DialogsPageType,action:ActionType)=>DialogsPageType
const dialogsReducer=(state: DialogsPageType=initialState,action: ActionType): DialogsPageType=> {
    let stateCopy={
        ...state,
        messages:[...state.messages]
    }
    switch (action.type) {
        case "SEND-MESSAGE":
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 4, message: body})
            return state
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        default:
            return state
    }

}
export let sendMessageActionCreator = ():SendMessageType=>{
    return {
        type:'SEND-MESSAGE'
    }
}
export let updateNewMessageBodyActionCreator=(body:string):UpdateNewMessageType=>{
    return {type:"UPDATE-NEW-MESSAGE-BODY",
        body:body
    }
}

export default dialogsReducer