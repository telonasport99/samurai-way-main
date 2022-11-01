import React from "react";
import {rerenderEntireTree} from "../render";

export type MessageType = {
    id?: number,
    message: string
}
export type DialogsType = {
    id: number,
    name: string
}
export type PostsType = {
    id?: number,
    message: string,
    likesCount: number,
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}
export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'hello', likesCount: 1},
            {id: 2, message: 'hel2', likesCount: 12},
            {id: 3, message: 'hel', likesCount: 6},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Dimy'},
            {id: 3, name: 'Dimyh'}
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'hi'},
            {id: 3, message: 'hi'}
        ]
    }

}
export let addPost = (postMessage:string)=>{
    let newPost:PostsType = {
        id:4,
        message:postMessage,
        likesCount:3
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}