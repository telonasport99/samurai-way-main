import React from 'react';
import {connect} from "react-redux";

import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setTotalCountAC,
    setUserAC,
    unFollowAC,
    UsersType
} from "../../redux/user-reducer";
import Users from "./Users";

type MapStatePropsType = {
    users: Array<UsersType>
    pageSize:number
    totalUserCount:number
    currentPage:number
}
let mapStateToProps=(state:ReduxStateType):MapStatePropsType=>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage:state.usersPage.currentPage
    }
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage:number)=>void
    setTotalCount:(totalCount:number)=>void
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
        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount:(totalCount:number)=>{
            dispatch(setTotalCountAC(totalCount))
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Users);