import React from "react";
import classes from './FormsControl.module.css'
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";

export const TextArea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
        <div>
            <textarea {...input} {...props} />
        </div>
        <div>
            { hasError && <span>{meta.error}</span> }
        </div>
    </div>
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
        <div>
            <input {...input} {...props} />
        </div>
        <div>
            { hasError && <span>{meta.error}</span> }
        </div>
    </div>
}

export const createField = (placeholder, name, component, validators, props={}, text='') => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={component}
            validate={validators}
            {...props}
        />{text}
    </div>
)

