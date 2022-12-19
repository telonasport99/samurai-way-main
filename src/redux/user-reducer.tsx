import React from "react";
import state, {
    ActionType,
    AddPostActionType,
    OnPostChangeActionType,
    PostsType,
    ProfilePageType,
    RootStateType,
    SetCurrentPageType,
 SetTotalCountType,
    UsersActionFollowType,
    UsersActionUnFollowType,
    UsersSetUserType
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
export type InitialStateType = {
    users:Array<UsersType>
    pageSize:number
    totalUserCount:number
    currentPage:number
}
let initialState:InitialStateType = {
        users: [],
        pageSize: 5,
        totalUserCount:20,
        currentPage:1
}
const usersReducer=(state:InitialStateType=initialState,action: ActionType): InitialStateType=> {
    switch (action.type) {
        case "FOLLOW":
            return  {...state, users: state.users.map(u=>u.id===action.userId?{...u, followed:true}:u)}
        case "UNFOLLOW":
            return  {...state, users: state.users.map(u=>u.id===action.userId?{...u, followed:false}:u)}
        case "SET-USER":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-COUNT":
            return {...state, totalUserCount: action.totalCount}
        default:
            return state
    }

}
export let followAC = (userId:number):UsersActionFollowType=>({type:'FOLLOW',userId})

export let unFollowAC=(userId:number):UsersActionUnFollowType=>({type:'UNFOLLOW',userId})
export let setUserAC=(users:Array<UsersType>):UsersSetUserType=>({type:'SET-USER',users})
export let setCurrentPageAC=(currentPage:number):SetCurrentPageType=>({type:'SET-CURRENT-PAGE',currentPage})
export let setTotalCountAC=(totalCount:number):SetTotalCountType=>({type:'SET-TOTAL-COUNT',totalCount})

export default usersReducer