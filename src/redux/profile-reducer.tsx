import React from "react";
import {RootStateOrAny} from "react-redux";
import state, {ActionType, AddPostActionType, OnPostChangeActionType, PostsType, RootStateType} from "./state";
type profileReducerType = (state:RootStateType,action:ActionType)=>RootStateType
const profileReducer:profileReducerType=(state:RootStateType,action)=> {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 4,
                message: state.profilePage.newPostText,
                likesCount: 3
            }
            state.profilePage.posts.push(newPost)
            state.profilePage.newPostText = ''
            return state
        case "ON-POST-CHANGE":
            state.profilePage.newPostText = action.newPostText
            return state
        default:
            return state
    }

}
export let addPostActionCreator = ():AddPostActionType=>{
    return {
        type:'ADD-POST'
    }
}
export let onPostChangeActionCreator=(text:string):OnPostChangeActionType=>{
    return {type:'ON-POST-CHANGE',
        newPostText:text}
}
export default profileReducer