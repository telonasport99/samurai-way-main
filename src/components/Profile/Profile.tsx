import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, PostsType} from "../../redux/store";
import MypostContainer from "./Mypost/MypostContainer";

export type ProfileProp = {
    posts: Array<PostsType>
    newPostText:string
    dispatch:(action: ActionType)=>void
}


function Profile(props:ProfileProp) {
    return (
        <div >
            <ProfileInfo/>
           <MypostContainer posts={props.posts}  newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile