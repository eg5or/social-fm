import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div>
                    <div className={classes.messages}>{messagesElements}</div>
                    <DialogsReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={classes.addNewMessage}>
        <div>
            <Field
                component={TextArea}
                name={'newMessageBody'}
                placeholder='Enter your message'
                validate={[required,maxLength50]}
            />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const DialogsReduxForm = reduxForm({

    form: 'dialogs'
})(DialogsForm)


export default Dialogs;