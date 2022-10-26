import React from "react";
import cl from './My.module.css'
import Post from "./Post/Post";
import s from './My.module.css'
import {PostsType, ProfilePageType} from "../../../redux/state";



function Mypost(props:ProfilePageType) {
    let postElement=props.posts.map(el=><Post likesCount={el.likesCount} message={el.message}/>)
    return (<div className={s.content}>
            <div>my posts
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {postElement}
        </div>
    )
}

export default Mypost