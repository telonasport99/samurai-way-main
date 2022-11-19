import React from "react";
import state, {ActionType, PostsType, RootStateType, SendMessageType, UpdateNewMessageType} from "./state";
import profileReducer from "./profile-reducer";
type dialogsReducerType = (state:RootStateType,action:ActionType)=>RootStateType
const dialogsReducer:dialogsReducerType=(state,action)=> {
    switch (action.type) {
        case "SEND-MESSAGE":
            let body = state.dialogsPage.newMessageBody
            state.dialogsPage.newMessageBody = ''
            state.dialogsPage.messages.push({id: 4, message: body})
            return state
        case "UPDATE-NEW-MESSAGE-BODY":
            state.dialogsPage.newMessageBody = action.body
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