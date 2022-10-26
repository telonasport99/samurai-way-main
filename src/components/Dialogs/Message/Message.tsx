import cl from "../Dialogs.module.css";
import React from "react";
import {MessageType} from "../../../redux/state";


export function Message(props:MessageType){
    return(<div className={cl.messages}>{props.message}</div>)
}

