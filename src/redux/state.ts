export type StoreType={
    _state:RootStateType
    addPost:(postMessage:string)=>void
    getState:()=>void
    _callSubscriber:(state:RootStateType)=>void
    onPostChange:(newPostText:string)=>void
    subscribe:(observer:(state:RootStateType)=>void)=>void
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
            ]
        }

    },
    getState() {
        return this._state
    },
    _callSubscriber(state: RootStateType){
        console.log('state', state)},
    addPost (postMessage:string){
        let newPost:PostsType = {
            id:4,
            message:this._state.profilePage.newPostText,
            likesCount:3
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText=''
        this._callSubscriber(this._state)
    },
    onPostChange (newPostText:string){
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber(this._state)
    },
    subscribe (observer:(state:RootStateType)=>void){
        this._callSubscriber=observer
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
}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}
export default store;


