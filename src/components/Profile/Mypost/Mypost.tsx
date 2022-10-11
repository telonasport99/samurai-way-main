import React from "react";
import cl from './Mypost.module.css'
import Post from "./Post/Post";

function Mypost() {
    return (<div>
        <div>my posts
                <textarea></textarea>
            <button>Add post</button>
            </div>
            <Post count={4} text={'Hello World'}/>
            <Post count={9} text={'How are u'}/>
        </div>
    )
}
export default Mypost