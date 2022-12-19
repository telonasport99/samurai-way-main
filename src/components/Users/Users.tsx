import React from 'react';
import {UsersType} from "../../redux/user-reducer";
import styles from './user.module.css'
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
let userPhoto = 'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg'
class Users extends React.Component<UsersPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = []
        for(let i=1;i<=pagesCount;i++){
            pages.push(i)
        }
        return  <div>
        <div>
            {pages.map(el=>{
               return <span className={styles.pageNum +` ${this.props.currentPage === el && styles.selectedPage}`}
               onClick={(e)=>{this.onPageChanged(el)}}>{el}</span>
            })}
        </div>
    {this.props.users.map(u=><div key={u.id}>
                <span>
                    <div>
                        <img src={!u.photoURL ? userPhoto : u.photoURL} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={()=>{this.props.unfollow(u.id)}}>follow</button>
                            :
                            <button onClick={()=>{this.props.follow(u.id)}}>unfollow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
{/*
                        <div>{u.location.city}</div><div>{u.location.country}</div>
*/}
                    </span>
                </span>
            </div>)}
        </div>
    }
}
export default Users;
