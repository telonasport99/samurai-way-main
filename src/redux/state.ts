import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type StoreType={
    _state:RootStateType
    getState:()=>RootStateType
    _callSubscriber:(state:RootStateType)=>void
    subscribe:(observer:(state:RootStateType)=>void)=>void
    dispatch:(action:ActionType)=>void
}
export type ActionType= AddPostActionType|OnPostChangeActionType|UpdateNewMessageType|SendMessageType
export type AddPostActionType = {
    type:'ADD-POST'
}
export type OnPostChangeActionType = {
    type:"ON-POST-CHANGE"
    newPostText:string}
export type UpdateNewMessageType = {
    type:'UPDATE-NEW-MESSAGE-BODY'
    body:string
}
export type SendMessageType = {
    type:'SEND-MESSAGE'
}
let store:StoreType = {
    _state:  {
        profilePage: {
            posts: [
                {id: 1, message: 'hello', likesCount: 1},
                {id: 2, message: 'hel2', likesCount: 12},
                {id: 3, message: 'hel', likesCount: 6},
            ],
            newPostText:''
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
            ],
            newMessageBody: ''
        },
        sidebarPage:{}

    },
    getState() {
        return this._state
    },
    _callSubscriber(state: RootStateType){
        console.log('state', state)},
    subscribe (observer:(state:RootStateType)=>void){
        this._callSubscriber=observer
    },
    dispatch(action:ActionType){
        profileReducer(this._state,action)
        dialogsReducer(this._state,action)
        this._callSubscriber(this._state)
    }

}


export type MessageType = {
    id?: number,
    message: string
}
export type DialogsType = {
    id: number,
    name: string
}
export type PostsType = {
    id: number,
    message: string,
    likesCount: number,
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText:string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessageType>
    newMessageBody: string
}
export type SidebarPageType={

}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarPage: SidebarPageType
}
export default store;


