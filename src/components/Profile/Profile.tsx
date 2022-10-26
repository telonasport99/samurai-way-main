import React from "react";
import cl from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

function Profile(props:ProfilePageType) {
    return (
        <div >
            <ProfileInfo/>
           <Mypost posts={props.posts} />
        </div>
    )
}
export default Profile