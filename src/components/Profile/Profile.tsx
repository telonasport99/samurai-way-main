import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, PostsType} from "../../redux/store";
import MypostContainer from "./Mypost/MypostContainer";

export type ProfileProp = {
    posts: Array<PostsType>
    newPostText:string
    dispatch:(action: ActionType)=>void
}


function Profile() {
    return (
        <div >
            <ProfileInfo/>
           <MypostContainer />
        </div>
    )
}
export default Profile