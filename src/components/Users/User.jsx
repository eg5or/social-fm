import React from 'react';
import classes from './users.module.css';
import userPhoto from '../../assets/images/profile-default.png';
import {NavLink} from 'react-router-dom';
import Paginator from "../common/Paginator/Paginator";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return <div>
                <span>
                    <div>
                        <NavLink to={'profile/' + user.id}>
                            <img alt='' src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={classes.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}
                            >UNFOLLOW</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}
                            >FOLLOW</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                    </span>
                </span>
    </div>
}


export default User;