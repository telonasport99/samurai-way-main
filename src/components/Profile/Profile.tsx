import React from "react";
import cl from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, OnPostChangeActionType, PostsType, ProfilePageType} from "../../redux/state";

export type ProfileProp = {
    posts: Array<PostsType>
    newPostText:string
    dispatch:(action: AddPostActionType|OnPostChangeActionType)=>void
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