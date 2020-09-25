import classes from './HeaderProfileInfo.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {authAPI} from '../../API/api';

const HeaderProfileInfo = (props) => {

    authAPI.getUserPhoto(props.id).then(data => {
        if (data.photos.small === null) {

        } else {
            props.setUserAvatar(data.photos.small)
        }
    })
    return <div className={classes.headerProfileBlock}>
        <div className={classes.avatar}>
            <img alt='' src={props.avatarURL}/>
        </div>
        <div className={classes.loginName}><NavLink to={'/profile'}>{props.login}</NavLink></div>
        <div className={classes.logout}><button onClick={props.logout}>Logout</button></div>
    </div>
}

export default HeaderProfileInfo;