import React from "react";
import classes from './Header.module.css'
import HeaderProfileInfo from './HeaderProfileInfo';
import {NavLink} from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={classes.header}>
            <img alt='' src='https://static.goldenline.pl/user_photo/078/user_6045518_4445de_huge.jpg'/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <HeaderProfileInfo
                        setUserAvatar={props.setUserAvatar}
                        id={props.id}
                        avatarURL={props.avatarURL}
                        login={props.login}
                        logout={props.logout}
                    />
                    : <NavLink className={classes.loginLink} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;