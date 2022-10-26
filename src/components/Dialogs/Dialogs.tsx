import React from "react";
import cl from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


function Dialogs(props:DialogsPageType) {

    let dialogsElements = props.dialogs.map(el=> <DialogItem name={el.name} id={el.id}/>)

    let messageElements = props.messages.map(el=> <Message message={el.message}/>)

    return (<div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.message}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;