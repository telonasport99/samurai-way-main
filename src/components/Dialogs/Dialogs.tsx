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
} from "../../redux/state";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";

type DialogsPageTypeProps = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>
    newMessageBody: string
    dispatch:(action: ActionType)=>void
}

function Dialogs(props:DialogsPageTypeProps) {

    let dialogsElements = props.dialogs.map(el=> <DialogItem name={el.name} id={el.id}/>)

    let messageElements = props.messages.map(el=> <Message message={el.message}/>)
    let newMessageBody = props.newMessageBody
    let onSendMessageClick = ()=>{
    props.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
     let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (<div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.message}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <div><textarea placeholder={'Enter your message'}
                                       value={newMessageBody}
                                       onChange={onNewMessageChange}
                        /></div>
                        <div><button onClick={onSendMessageClick}>send</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;