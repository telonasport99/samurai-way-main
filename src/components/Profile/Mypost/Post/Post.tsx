import React from "react";
import cl from './Post.module.css'
import {PostsType} from "../../../../redux/state";


function Post(props: PostsType) {
    return (<div>
            <div className={cl.item}>
                <img
                    src='data:image/png;base64,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'/>
                {props.message}
            </div>
            <div className={cl.item}></div>
            <div><span>like {props.likesCount}</span></div>
        </div>
    )
}

export default Post