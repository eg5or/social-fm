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

    let dialogsData = [
        {id: 1, name: 'Alina'},
        {id: 2, name: 'Temich'},
        {id: 3, name: 'Skvor'},
        {id: 4, name: 'Vanya'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Kuku'},
        {id: 4, message: 'Yo'}
    ]

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                </div>
                <div className={classes.messages}>
                    <Message message={messagesData[0].message} />
                    <Message message={messagesData[1].message} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;