import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    { dialogsElements }
                </div>
                <div>
                    <div className={classes.messages}>{ messagesElements }</div>
                    <div className={classes.addNewMessage}>
                        <div><textarea value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       placeholder='Enter your message' /></div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;