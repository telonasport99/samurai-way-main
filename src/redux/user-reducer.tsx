import React from "react";
import state, {
    ActionType,
    AddPostActionType,
    OnPostChangeActionType,
    PostsType,
    ProfilePageType,
    RootStateType, UsersActionFollowType, UsersActionUnFollowType, UsersSetUserType
} from "./store";
export type UsersType = {
    id:number
    photoUrl:string
    followed:boolean
    fullName:string
    status:string
    location:{
        city:string
        country:string
    }
}
type InitialStateType = {
    users:Array<UsersType>
}
let initialState:InitialStateType = {
        users: [
            {id: 1, photoUrl:'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg',followed:true, fullName: 'Dima', status:'Iam', location:{city:'Minsk',country:'Belarus'}},
            {id: 2, photoUrl:'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg', followed:false, fullName: 'Vadim', status:'am', location:{city:'Grodno',country:'Belarus'}},
            {id: 3, photoUrl:'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg', followed:true, fullName: 'hello', status:'I', location:{city:'Volkovysk',country:'Belarus'}},
        ],
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