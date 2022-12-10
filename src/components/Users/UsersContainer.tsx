import React from 'react';
import {connect} from "react-redux";

import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUserAC, unFollowAC, UsersType} from "../../redux/user-reducer";
import Users from "./Users";

type MapStatePropsType = {
    usersPage: InitialStateType
}
let mapStateToProps=(state:ReduxStateType):MapStatePropsType=>{
    return{
        usersPage: state.usersPage
    }
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;
let mapDispatchToProps=(dispatch:Dispatch):MapDispatchPropsType=>{
    return{
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId:number)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(users:Array<UsersType>)=>{
            dispatch(setUserAC(users))
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Users);