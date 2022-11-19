import React from "react";
import state, {ActionType, RootStateType} from "./state";
type sidebarReducerType = (state:RootStateType,action:ActionType)=>RootStateType
const sidebarReducer:sidebarReducerType=(state,action)=>{
return state
}
export default sidebarReducer