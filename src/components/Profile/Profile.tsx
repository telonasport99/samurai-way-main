import React from "react";
import cl from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, AddPostActionType, OnPostChangeActionType, PostsType, ProfilePageType} from "../../redux/store";

export type ProfileProp = {
    posts: Array<PostsType>
    newPostText:string
    dispatch:(action: ActionType)=>void
}


function Profile(props:ProfileProp) {
    return (
        <div >
            <ProfileInfo/>
           <Mypost posts={props.posts}  newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile