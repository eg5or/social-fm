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

    let dialogs = [
        {id: 1, name: 'Alina'},
        {id: 2, name: 'Temich'},
        {id: 3, name: 'Skvor'},
        {id: 4, name: 'Vanya'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Kuku'},
        {id: 4, message: 'Yo'}
    ]

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages
        .map(m => <Message message={m.message}/>)

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={classes.messages}>
                    { messagesElements }
                </div>
            </div>
        </div>
    )
}

export default Dialogs;