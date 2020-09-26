import React from 'react';
import classes from './users.module.css';
import userPhoto from '../../assets/images/profile-default.png';
import {NavLink} from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span key={p.toString()} className={props.currentPage === p ? classes.selectedPage : undefined}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'profile/' + u.id}>
                            <img alt='' src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={classes.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {props.unfollow(u.id)}}
                                >UNFOLLOW</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {props.follow(u.id)}}
                                >FOLLOW</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
                </div>
            )
        }
    </div>
}

export default Users;