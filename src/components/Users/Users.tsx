import React from 'react';
import {UsersType} from "../../redux/user-reducer";
import styles from './user.module.css'
type InitialStateType = {
    users:Array<UsersType>
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<UsersType>)=>void
}
const Users = (props:InitialStateType) => {
    if(props.users.length===0){
    props.setUsers([{id: 1, photoUrl:'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg',followed:true, fullName: 'Dima', status:'Iam', location:{city:'Minsk',country:'Belarus'}},
        {id: 2, photoUrl:'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg', followed:false, fullName: 'Vadim', status:'am', location:{city:'Grodno',country:'Belarus'}},
        {id: 3, photoUrl:'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg', followed:true, fullName: 'hello', status:'I', location:{city:'Volkovysk',country:'Belarus'}},
    ])}
    return (
        <div>
            {props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={()=>{props.unfollow(u.id)}}>follow</button>
                            :
                            <button onClick={()=>{props.follow(u.id)}}>unfollow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div><div>{u.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;