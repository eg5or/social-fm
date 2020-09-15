import React from "react";
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://static.goldenline.pl/user_photo/078/user_6045518_4445de_huge.jpg'/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink className={classes.loginLink} to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}
export default Header;