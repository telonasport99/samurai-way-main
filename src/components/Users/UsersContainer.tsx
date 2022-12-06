import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUserAC, unFollowAC, UsersType} from "../../redux/user-reducer";

let mapStateToProps=(state:ReduxStateType)=>{
    return{
        users: state.usersPage.users
    }
}
let mapDispatchToProps=(dispatch:Dispatch)=>{
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