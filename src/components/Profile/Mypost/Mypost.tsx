import React, {ChangeEvent} from "react";
import cl from './My.module.css'
import Post from "./Post/Post";
import s from './My.module.css'
import {ProfileProp} from "../Profile";
import {AddPostActionType, OnPostChangeActionType} from "../../../redux/store";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";

function Mypost(props: ProfileProp) {
    let postElement = props.posts.map(el => <Post key={el.id} likesCount={el.likesCount} id={1} message={el.message}/>)
    let addpost = () => {
            props.dispatch(addPostActionCreator())
    }
    const onPostChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>props.dispatch(onPostChangeActionCreator(e.currentTarget.value))

    return (<div className={s.content}>
            <div>my posts
                <div><textarea onChange={onPostChangeHandler}  value={props.newPostText}/></div>
                <div>
                    <button onClick={addpost}>Add post</button>
                </div>
            </div>
            {postElement}
        </div>
    )
}

export default Mypost