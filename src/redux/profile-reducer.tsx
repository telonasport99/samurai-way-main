import React from "react";
import {RootStateOrAny} from "react-redux";
import state, {
    ActionType,
    AddPostActionType,
    OnPostChangeActionType,
    PostsType,
    ProfilePageType,
    RootStateType
} from "./store";
type profileReducerType = (state:ProfilePageType,action:ActionType)=>ProfilePageType
let initialState = {
        posts: [
            {id: 1, message: 'hello', likesCount: 1},
            {id: 2, message: 'hel2', likesCount: 12},
            {id: 3, message: 'hel', likesCount: 6},
        ],
        newPostText:''
}
const profileReducer=(state: ProfilePageType=initialState,action: ActionType): ProfilePageType=> {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 4,
                message: state.newPostText,
                likesCount: 3
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "ON-POST-CHANGE":
            state.newPostText = action.newPostText
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