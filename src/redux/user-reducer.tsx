import React from "react";
import state, {
    ActionType,
    AddPostActionType,
    OnPostChangeActionType,
    PostsType,
    ProfilePageType,
    RootStateType, UsersActionFollowType, UsersActionUnFollowType, UsersSetUserType
} from "./store";
export type LocationType= {
    city: string
    country: string
}
export type UsersType = {
    id: number
    photoURL: string
    followed: boolean
    name:string
    status: string
    location: LocationType
}
type InitialStateType = {
    users:Array<UsersType>
}
let initialState:InitialStateType = {
        users: [],
}
const usersReducer=(state:InitialStateType=initialState,action: ActionType): InitialStateType=> {
    switch (action.type) {
        case "FOLLOW":
            return  {...state, users: state.users.map(u=>u.id===action.userId?{...u, followed:true}:u)}
        case "UNFOLLOW":
            return  {...state, users: state.users.map(u=>u.id===action.userId?{...u, followed:false}:u)}
        case "SET-USER":
            return {...state, users: [...state.users,...action.users]}
        default:
            return state
    }

}
export let followAC = (userId:number):UsersActionFollowType=>({type:'FOLLOW',userId})

export let unFollowAC=(userId:number):UsersActionUnFollowType=>({type:'UNFOLLOW',userId})
export let setUserAC=(users:Array<UsersType>):UsersSetUserType=>({type:'SET-USER',users})

export default usersReducer