import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={classes.active}>
                <div className={classes.dialogName}>
                    <div className={classes.avatar}><img src={`${props.avatar}`}/></div>
                    <div className={classes.name}>{props.name}</div>
                </div>
            </NavLink>
        </div>
    )

}

export default DialogItem;