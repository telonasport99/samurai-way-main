import React, {ChangeEvent} from "react";
import cl from './My.module.css'
import Post from "./Post/Post";
import s from './My.module.css'
import {ProfileProp} from "../Profile";
import {AddPostActionType, OnPostChangeActionType} from "../../../redux/store";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import Mypost from "./Mypost";

function MypostContainer(props: ProfileProp) {
    let addPost = () => {
            props.dispatch(addPostActionCreator())
    }
    const onPostChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>
       props.dispatch(onPostChangeActionCreator(e.currentTarget.value))

    return (
        <Mypost updateNewPostText={onPostChangeHandler} addPost={addPost} posts={props.posts} newPostText={props.newPostText}/>
    )
}

export default MypostContainer