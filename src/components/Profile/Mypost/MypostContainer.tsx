import React, {ChangeEvent} from "react";
import cl from './My.module.css'
import Post from "./Post/Post";
import s from './My.module.css'
import {ProfileProp} from "../Profile";
import {AddPostActionType, OnPostChangeActionType} from "../../../redux/store";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import Mypost from "./Mypost";
import {StoreContext} from "../../../StoreContext";

function MypostContainer() {

    return (
        <StoreContext.Consumer>
            {(store)=>{
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                const onPostChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>
                    store.dispatch(onPostChangeActionCreator(e.currentTarget.value))
                return <Mypost updateNewPostText={onPostChangeHandler}
                        addPost={addPost}
                        posts={store._state.profilePage.posts}
                        newPostText={store._state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default MypostContainer