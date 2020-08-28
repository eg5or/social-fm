import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )

}

const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem name='Alina' id='1'/>
                    <DialogItem name='Temich' id='2'/>
                    <DialogItem name='Skvor' id='3'/>
                    <DialogItem name='Vanya' id='4'/>
                </div>
                <div className={classes.messages}>
                    <Message message='Hi'/>
                    <Message message='How are you?'/>
                    <Message message='Kuku'/>
                    <Message message='Yo'/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;