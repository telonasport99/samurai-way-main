import React, {ChangeEvent} from "react";
import cl from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionType,
    AddPostActionType,
    DialogsType,
    MessageType,
    OnPostChangeActionType,
    SendMessageType, UpdateNewMessageType
} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsPageTypeProps = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>
    newMessageBody: string
    dispatch:(action: ActionType)=>void
}

export function DialogsContainer(props:DialogsPageTypeProps) {
    let onSendMessageClick = ()=>{
    props.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body: string)=>{
        props.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <Dialogs dialogs={props.dialogs}
                 messages={props.messages}
                 newMessageBody={props.newMessageBody}
                 onSendMessageClick={onSendMessageClick}
                 onNewMessageChange={onNewMessageChange}
        />
    )
}