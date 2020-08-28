import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <div className={`${classes.dialog} ${classes.active}`}>
                        <NavLink to='/dialogs/1'>Alina</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to='/dialogs/2'>Temich</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to='/dialogs/3'>Skvor</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to='/dialogs/4'>Vanya</NavLink>
                    </div>
                </div>
                <div className={classes.messages}>
                    <div className={classes.message}>Hi</div>
                    <div className={classes.message}>How is your deals</div>
                    <div className={classes.message}>Kuku</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;