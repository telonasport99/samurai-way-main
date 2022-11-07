import React from "react";
import cl from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType, ProfilePageType} from "../../redux/state";

export type ProfileProp = {
    posts: Array<PostsType>
    addPost:(postMessage:string)=>void
    newPostText:string
    onPostChangeCallback:(newPostText:string)=>void
}

function Profile(props:ProfileProp) {
    return (
        <div >
            <ProfileInfo/>
           <Mypost posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} onPostChangeCallback={props.onPostChangeCallback}/>
        </div>
    )
}
export default Profile