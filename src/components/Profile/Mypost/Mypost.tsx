import React from "react";
import cl from './My.module.css'
import Post from "./Post/Post";
import s from './My.module.css'
import {ProfileProp} from "../Profile";

function Mypost(props: ProfileProp) {
    let postElement = props.posts.map(el => <Post key={el.id} likesCount={el.likesCount} message={el.message}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addpost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    return (<div className={s.content}>
            <div>my posts
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addpost}>Add post</button>
                </div>
            </div>
            {postElement}
        </div>
    )
}

export default Mypost